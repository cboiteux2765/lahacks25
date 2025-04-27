package com.example.internshipplatform.controller;

import com.example.internshipplatform.model.LinkdInfo;
import com.example.internshipplatform.service.LinkdInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/linkd-info")
public class LinkdInfoController {

    @Autowired
    private LinkdInfoService linkdInfoService;

    @GetMapping
    public ResponseEntity<List<LinkdInfo>> getAllLinkdInfo() {
        List<LinkdInfo> linkdInfoList = linkdInfoService.getAllLinkdInfo();
        return ResponseEntity.ok(linkdInfoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LinkdInfo> getLinkdInfoById(@PathVariable String id) {
        return linkdInfoService.getLinkdInfoById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<LinkdInfo> createLinkdInfo(@RequestBody LinkdInfo linkdInfo) {
        LinkdInfo createdLinkdInfo = linkdInfoService.createLinkdInfo(linkdInfo);
        return ResponseEntity.ok(createdLinkdInfo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LinkdInfo> updateLinkdInfo(@PathVariable String id, @RequestBody LinkdInfo linkdInfo) {
        return linkdInfoService.updateLinkdInfo(id, linkdInfo)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLinkdInfo(@PathVariable String id) {
        if (linkdInfoService.deleteLinkdInfo(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/professionals")
    public ResponseEntity<List<LinkdInfo>> getProfessionals(@RequestParam String strength, @RequestParam String goals) {
        List<LinkdInfo> professionals = linkdInfoService.fetchProfessionals(strength, goals);
        return ResponseEntity.ok(professionals);
    }
}