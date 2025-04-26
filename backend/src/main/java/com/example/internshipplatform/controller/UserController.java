package com.example.internshipplatform.controller;

import com.example.internshipplatform.model.User;
import com.example.internshipplatform.service.DependencyGraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final DependencyGraphService dependencyGraphService;

    @Autowired
    public UserController(DependencyGraphService dependencyGraphService) {
        this.dependencyGraphService = dependencyGraphService;
    }

    @PostMapping("/profile")
    public ResponseEntity<String> submitProfile(@RequestBody User User) {
        // Process the user profile and generate a dependency graph
        dependencyGraphService.generateDependencyGraph(User);
        return ResponseEntity.ok("Profile submitted and dependency graph generated.");
    }
}

@RestController
@RequestMapping("/api/auth")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String username, @RequestParam String password) {
        Optional<User> user = userService.loginUser(username, password);
        if (user.isPresent()) {
            return ResponseEntity.ok("Login successful!");
        }
        return ResponseEntity.status(401).body("Invalid username or password.");
    }
}