package com.example.internshipplatform.service;

import com.example.internshipplatform.model.LinkdInfo;
import com.example.internshipplatform.repository.LinkdInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


import java.util.ArrayList;
import java.util.List;

@Service
public class LinkdInfoService {
    public static class Profile {
        public String id;
        public String name;
        public String location;
        public String headline;
        public String description;
        public String title;
        public String profilePictureUrl;
        public String linkedinUrl;
    }

    public static class Experience {
        public String title;
        public String companyName;
        public String startDate;
        public String endDate;
        public String description;
        public String location;
        public String companyLogo;
    }

    public static class Education {
        public String degree;
        public String fieldOfStudy;
        public String schoolName;
        public String startDate;
        public String endDate;
        public String description;
        public String schoolLogo;
    }

    public static class LinkdResult {
        public Profile profile;
        public List<Experience> experience;
        public List<Education> education;
    }

    public static class LinkdResponse {
        public List<LinkdResult> results;
        public int total;
        public String query;
    }

    @Value("${linkd.token}")
    private String LinkdToken;

    private final RestTemplate restTemplate;

    public LinkdInfoService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public LinkdResponse LinkdSearch(String query, String school) {
        String url = "https://search.linkd.inc/api/search/users";
        String urlWithParams = UriComponentsBuilder.fromHttpUrl(url)
            .queryParam("query", query)
            .queryParam("limit", 3)
            .queryParam("school", school)
            .toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + LinkdToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        return restTemplate
            .exchange(urlWithParams, HttpMethod.GET, entity, LinkdResponse.class)
            .getBody();
    }
}