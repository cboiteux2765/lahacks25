package com.example.internshipplatform.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/linkedin")
public class LinkedInController {

    @Value("${linkedin.client.id}")
    private String clientId;

    @Value("${linkedin.client.secret}")
    private String clientSecret;

    @Value("${linkedin.redirect.uri}")
    private String redirectUri;

    @Value("${linkedin.oauth.url}")
    private String oauthUrl;

    @Value("${linkedin.api.url}")
    private String apiUrl;

    @GetMapping("/callback")
    public ResponseEntity<Map<String, Object>> handleCallback(@RequestParam String code) {
        RestTemplate restTemplate = new RestTemplate();

        // Exchange authorization code for access token
        Map<String, String> tokenRequest = new HashMap<>();
        tokenRequest.put("grant_type", "authorization_code");
        tokenRequest.put("code", code);
        tokenRequest.put("redirect_uri", redirectUri);
        tokenRequest.put("client_id", clientId);
        tokenRequest.put("client_secret", clientSecret);

        ResponseEntity<Map> tokenResponse = restTemplate.postForEntity(oauthUrl, tokenRequest, Map.class);
        String accessToken = (String) tokenResponse.getBody().get("access_token");

        // Fetch LinkedIn profile data
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<Void> profileRequest = new HttpEntity<>(headers);
        ResponseEntity<Map> profileResponse = restTemplate.exchange(apiUrl, org.springframework.http.HttpMethod.GET, profileRequest, Map.class);

        return ResponseEntity.ok(profileResponse.getBody());
    }
}   