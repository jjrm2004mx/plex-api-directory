package com.globalhitss.tijuana.plex.api_directory.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globalhitss.tijuana.plex.api_directory.backend.model.Api;
import com.globalhitss.tijuana.plex.api_directory.backend.service.ApiService;

// Contador de consumo de API 

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/apis")
public class ApiController {
    private final ApiService apiService;
    private final Counter apiControllerCounter;



   /* public ApiController(ApiService apiService) {
        this.apiService = apiService;
    }*/

     public ApiController(MeterRegistry registry, ApiService apiService) {
        this.apiControllerCounter = registry.counter("api_controller_calls_total");
        this.apiService = apiService;
    }

    @GetMapping
    public List<Api> getAllApis() {
        apiControllerCounter.increment();
        return apiService.getAllApis();
    }

    @GetMapping("/{id}")
    public Api getApiById(@PathVariable Long id) {
        return apiService.getApiById(id);
    }
}
