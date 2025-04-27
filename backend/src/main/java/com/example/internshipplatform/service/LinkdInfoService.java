package com.example.internshipplatform.service;

import com.example.internshipplatform.model.LinkdInfo;
import com.example.internshipplatform.repository.LinkdInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LinkdInfoService {

    @Autowired
    private LinkdInfoRepository linkdInfoRepository;

    /**
     * Fetch all LinkdInfo records.
     *
     * @return A list of all LinkdInfo objects.
     */
    public List<LinkdInfo> getAllLinkdInfo() {
        return linkdInfoRepository.findAll();
    }

    /**
     * Fetch a LinkdInfo record by its ID.
     *
     * @param id The ID of the LinkdInfo record.
     * @return An Optional containing the LinkdInfo object if found, or empty if not.
     */
    public Optional<LinkdInfo> getLinkdInfoById(String id) {
        return linkdInfoRepository.findById(id);
    }

    /**
     * Create a new LinkdInfo record.
     *
     * @param linkdInfo The LinkdInfo object to create.
     * @return The created LinkdInfo object.
     */
    public LinkdInfo createLinkdInfo(LinkdInfo linkdInfo) {
        return linkdInfoRepository.save(linkdInfo);
    }

    /**
     * Update an existing LinkdInfo record.
     *
     * @param id        The ID of the LinkdInfo record to update.
     * @param updatedLinkdInfo The updated LinkdInfo object.
     * @return An Optional containing the updated LinkdInfo object if found, or empty if not.
     */
    public Optional<LinkdInfo> updateLinkdInfo(String id, LinkdInfo updatedLinkdInfo) {
        return linkdInfoRepository.findById(id).map(existingLinkdInfo -> {
            existingLinkdInfo.setFullName(updatedLinkdInfo.getFullName());
            existingLinkdInfo.setEmail(updatedLinkdInfo.getEmail());
            existingLinkdInfo.setPosition(updatedLinkdInfo.getPosition());
            existingLinkdInfo.setLinkedinLink(updatedLinkdInfo.getLinkedinLink());
            return linkdInfoRepository.save(existingLinkdInfo);
        });
    }

    /**
     * Delete a LinkdInfo record by its ID.
     *
     * @param id The ID of the LinkdInfo record to delete.
     * @return True if the record was deleted, false if not found.
     */
    public boolean deleteLinkdInfo(String id) {
        if (linkdInfoRepository.existsById(id)) {
            linkdInfoRepository.deleteById(id);
            return true;
        }
        return false;
    }

    /**
     * Fetch professionals based on user's strength and goals.
     *
     * @param strength The user's strength (e.g., "communication", "resume").
     * @param goals    The user's goals (e.g., "Software Engineering Internship").
     * @return A list of professionals matching the criteria.
     */
    public List<LinkdInfo> fetchProfessionals(String strength, String goals) {
        List<LinkdInfo> allProfessionals = linkdInfoRepository.findAll();
        List<LinkdInfo> matchingProfessionals = new ArrayList<>();

        for (LinkdInfo professional : allProfessionals) {
            if (goals.toLowerCase().contains("software") && professional.getPosition().toLowerCase().contains("software")) {
                matchingProfessionals.add(professional);
            } else if (strength.toLowerCase().contains("communication") && professional.getPosition().toLowerCase().contains("manager")) {
                matchingProfessionals.add(professional);
            }
        }

        return matchingProfessionals;
    }
}