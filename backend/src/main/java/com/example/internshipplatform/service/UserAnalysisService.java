package com.example.internshipplatform.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserAnalysisService {

    @Autowired
    private GroqService groqService;

    @Autowired
    private DependencyGraphService dependencyGraphService;

    public Map<String, Object> analyzeUser(String userInput, Map<String, Object> linkedInProfile) {
        // Combine LinkedIn profile data with user input
        String combinedInput = userInput + " " + linkedInProfile.toString();

        // Analyze user stages using Groq API
        Map<String, Object> analysisResult = groqService.analyzeUserStages(combinedInput);

        // Generate dependency graph
        return dependencyGraphService.generateDependencyGraph(analysisResult);
    }
}