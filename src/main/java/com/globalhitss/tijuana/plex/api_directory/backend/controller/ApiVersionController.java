package com.globalhitss.tijuana.plex.api_directory.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globalhitss.tijuana.plex.api_directory.backend.model.ApiVersions;
import com.globalhitss.tijuana.plex.api_directory.backend.service.ApiVersionService;

@RestController
@RequestMapping("/api-versions")
public class ApiVersionController {
    private final ApiVersionService apiVersionService;

    public ApiVersionController(ApiVersionService apiVersionService) {
        this.apiVersionService = apiVersionService;
    }

    @GetMapping
    public List<ApiVersions> getAllApiVersions() {
        return apiVersionService.getAllApiVersions();
    }

    @GetMapping("/{id}")
    public Optional<ApiVersions> getApiVersionById(@PathVariable Long id) {
        return apiVersionService.getApiVersionById(id);
    }
}