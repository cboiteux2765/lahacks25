package com.example.internshipplatform.controller;

import com.example.internshipplatform.service.LinkdInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/linkd")
public class LinkdInfoController {

    @Autowired
    private LinkdInfoService linkdInfoService;

    @GetMapping
    public ResponseEntity<List<LinkdInfoService.LinkdResult>> getAllLinkdInfo(
        @RequestParam(name = "query") String query,
        @RequestParam(name = "school", required = false) String school
    ) {
        String schoolInp = school;
        if(school == null) schoolInp = ""; 

        LinkdInfoService.LinkdResponse linkdList = linkdInfoService.LinkdSearch(query, school);
        return ResponseEntity.ok(linkdList.results);
    }


}