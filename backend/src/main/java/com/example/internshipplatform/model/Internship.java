package com.example.internshipplatform.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "internships")
public class Internship {

    @Id
    private String id;
    private String title;
    private String description;
    private String company;
    private String requirements;

    public Internship() {
    }

    public Internship(String title, String description, String company, String requirements) {
        this.title = title;
        this.description = description;
        this.company = company;
        this.requirements = requirements;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }
}