package com.example.internshipplatform.controller;

import com.example.internshipplatform.model.Internship;
import com.example.internshipplatform.model.InternshipAdvice;
import com.example.internshipplatform.service.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/internships")
public class InternshipController {

    private final InternshipService internshipService;

    @Autowired
    public InternshipController(InternshipService internshipService) {
        this.internshipService = internshipService;
    }

    @GetMapping
    public List<Internship> getAllInternships() {
        return internshipService.getAllInternships();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Internship> getInternshipById(@PathVariable String id) {
        Optional<Internship> internshipOpt = internshipService.getInternshipById(id);
        if (internshipOpt.isPresent()) {
            return ResponseEntity.ok(internshipOpt.get()); 
        } else {
            return ResponseEntity.notFound().build(); 
        }
    }

    @PostMapping
    public Internship createInternship(@RequestBody Internship internship) {
        return internshipService.createInternship(internship);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInternship(@PathVariable String id) {
        internshipService.deleteInternship(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/advice")
    public InternshipAdvice getAdvice(@RequestParam String strength) {
        return internshipService.getAdviceBasedOnStrength(strength);
    }
}