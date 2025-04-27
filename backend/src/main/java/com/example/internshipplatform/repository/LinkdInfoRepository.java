package com.example.internshipplatform.repository;

import com.example.internshipplatform.model.LinkdInfo;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LinkdInfoRepository extends MongoRepository<LinkdInfo, String> {
    // Custom query methods can be added here if needed
}