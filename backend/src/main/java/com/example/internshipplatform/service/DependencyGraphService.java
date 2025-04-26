package com.example.internshipplatform.service;

import com.example.internshipplatform.model.User;
import org.springframework.stereotype.Service;
import com.kornkutan.groq4j.GroqApi;
import com.kornkutan.groq4j.GroqApiResponse;

import java.util.*; 

@Service
public class DependencyGraphService {

    public Map<String, List<String>> generateDependencyGraph(User User) {
        Map<String, List<String>> dependencyGraph = new HashMap<>();

        // Example logic: Generate graph based on work experience and skills
        for (User.WorkExperience experience : User.getWorkExperience()) {
            if (experience.getSkills().contains("Leadership")) {
                dependencyGraph.put("Improve Leadership Skills", Arrays.asList("Lead a Team", "Take Management Courses"));
            }
        }

        // Example logic: Generate graph based on projects
        for (User.Project project : User.getProjects()) {
            dependencyGraph.put("Showcase Projects", Arrays.asList("Create Portfolio Website", "Share on LinkedIn"));
        }

        return dependencyGraph;
    }
}