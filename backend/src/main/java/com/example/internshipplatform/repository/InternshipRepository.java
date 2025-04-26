package com.example.internshipplatform.repository;

import com.example.internshipplatform.model.Internship;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InternshipRepository extends MongoRepository<Internship, String> {
    // Custom query methods can be defined here if needed
}