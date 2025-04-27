package com.example.internshipplatform.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class GroqService {

    @Value("${spring.ai.openai.api.url}")
    private String groqApiUrl;

    @Value("${spring.ai.openai.api.key}")
    private String groqApiKey;

    public Map<String, Object> analyzeUserStages(String userInput) {
        RestTemplate restTemplate = new RestTemplate();

        // Set up headers
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + groqApiKey);
        headers.set("Content-Type", "application/json");

        // Request body
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "meta-llama/llama-4-maverick-17b-128e-instruct");
        requestBody.put("messages", new Object[]{
                Map.of("role", "system", "content", "You are an AI that analyzes user progress."),
                Map.of("role", "user", "content", userInput)
        });

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        // Make the API call
        ResponseEntity<Map> response = restTemplate.postForEntity(groqApiUrl, request, Map.class);

        // Parse and return the response
        return response.getBody();
    }
}