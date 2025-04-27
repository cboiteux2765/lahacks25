package com.example.internshipplatform.model;

public class LinkdInfo {
    private String fullName;
    private String email;
    private String position;
    private String linkedinLink;

    // Constructor
    public LinkdInfo(String fullName, String email, String position, String linkedinLink) {
        this.fullName = fullName;
        this.email = email;
        this.position = position;
        this.linkedinLink = linkedinLink;
    }

    // Getters and Setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getLinkedinLink() {
        return linkedinLink;
    }

    public void setLinkedinLink(String linkedinLink) {
        this.linkedinLink = linkedinLink;
    }

    @Override
    public String toString() {
        return "LinkdInfo{" +
                "fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                ", position='" + position + '\'' +
                ", linkedinLink='" + linkedinLink + '\'' +
                '}';
    }
}