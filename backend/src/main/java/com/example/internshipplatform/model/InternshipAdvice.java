package com.example.internshipplatform.model;

public class InternshipAdvice {
    private String strength;
    private String advice;

    public InternshipAdvice(String strength, String advice) {
        this.strength = strength;
        this.advice = advice;
    }

    public String getStrength() {
        return strength;
    }

    public void setStrength(String strength) {
        this.strength = strength;
    }

    public String getAdvice() {
        return advice;
    }

    public void setAdvice(String advice) {
        this.advice = advice;
    }
}