package com.example.internshipplatform.controller;

import com.example.internshipplatform.model.Internship;
import com.example.internshipplatform.model.InternshipAdvice;
import com.example.internshipplatform.service.InternshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return internshipService.getInternshipById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Internship createInternship(@RequestBody Internship internship) {
        return internshipService.createInternship(internship);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Internship> updateInternship(@PathVariable String id, @RequestBody Internship internship) {
        return internshipService.updateInternship(id, internship)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInternship(@PathVariable String id) {
        if (internshipService.deleteInternship(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/advice")
    public InternshipAdvice getAdvice(@RequestParam String strength) {
        return internshipService.getAdviceBasedOnStrength(strength);
    }
}