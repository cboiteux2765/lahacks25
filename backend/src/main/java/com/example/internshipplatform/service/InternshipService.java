package com.example.internshipplatform.service;

import com.example.internshipplatform.model.Internship;
import com.example.internshipplatform.model.InternshipAdvice;
import com.example.internshipplatform.repository.InternshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class InternshipService {

    @Value("${groq.api.url}")
    private String groqApiUrl;

    @Value("${groq.api.key}")
    private String groqApiKey;

    private final InternshipRepository internshipRepository;
    private final RestTemplate restTemplate;

    @Autowired
    public InternshipService(InternshipRepository internshipRepository, RestTemplate restTemplate) {
        this.internshipRepository = internshipRepository;
        this.restTemplate = restTemplate;
    }

    public List<Internship> getAllInternships() {
        return internshipRepository.findAll();
    }

    public Optional<Internship> getInternshipById(String id) {
        return internshipRepository.findById(id);
    }

    public Internship createInternship(Internship internship) {
        return internshipRepository.save(internship);
    }

    public Internship updateInternship(String id, Internship internshipDetails) {
        Internship internship = internshipRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Internship not found with id " + id));
        internship.setTitle(internshipDetails.getTitle());
        internship.setDescription(internshipDetails.getDescription());
        internship.setCompany(internshipDetails.getCompany());
        internship.setRequirements(internshipDetails.getRequirements());
        return internshipRepository.save(internship);
    }

    public void deleteInternship(String id) {
        internshipRepository.deleteById(id);
    }

    public InternshipAdvice getAdviceBasedOnStrength(String strength) {
        String url = String.format("%s/advice?strength=%s", groqApiUrl, strength);

        // Set headers for the API request
        var headers = new org.springframework.http.HttpHeaders();
        headers.set("Authorization", "Bearer " + groqApiKey);

        var entity = new org.springframework.http.HttpEntity<>(headers);

        // Make the API call
        var response = restTemplate.exchange(
            url,
            org.springframework.http.HttpMethod.GET,
            entity,
            String.class
        );

        // Parse the response (assuming the API returns advice as plain text)
        String advice = response.getBody();

        return new InternshipAdvice(strength, advice);
    }
}