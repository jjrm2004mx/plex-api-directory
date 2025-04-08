package com.globalhitss.tijuana.plex.api_directory.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globalhitss.tijuana.plex.api_directory.backend.model.Api;
import com.globalhitss.tijuana.plex.api_directory.backend.service.ApiService;

@RestController
@RequestMapping("/apis")
public class ApiController {
    private final ApiService apiService;

    public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping
    public List<Api> getAllApis() {
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public Api getApiById(@PathVariable Long id) {
        return apiService.getApiById(id);
    }
}
