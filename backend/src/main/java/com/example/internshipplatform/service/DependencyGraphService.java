package com.example.internshipplatform.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DependencyGraphService {

    public Map<String, Object> generateDependencyGraph(Map<String, Object> analysisResult) {
        Map<String, Object> dependencyGraph = new HashMap<>();

        // Example logic to generate a dependency graph based on analysis
        if (analysisResult.containsKey("completedStages")) {
            List<String> completedStages = (List<String>) analysisResult.get("completedStages");
            if (completedStages.contains("resume")) {
                dependencyGraph.put("nextSteps", List.of("Apply for internships", "Prepare for interviews"));
            } else {
                dependencyGraph.put("nextSteps", List.of("Improve resume", "Build projects"));
            }
        }

        return dependencyGraph;
    }
}