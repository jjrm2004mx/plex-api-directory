package com.globalhitss.tijuana.plex.api_directory.backend.service.impl;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.globalhitss.tijuana.plex.api_directory.backend.model.Api;
import com.globalhitss.tijuana.plex.api_directory.backend.service.ApiService;

@Service
public class InMemoryApiService implements ApiService {
    private final List<Api> apis = Arrays.asList(
            new Api(1L, "Customer Management", "v4.0.0", "Productive", "Manages customer accounts", "/apis/1",
                    "Detail about Customer Management"),
            new Api(2L, "Product Catalog", "v5.0.1", "Candidate", "Handles product structure", "/apis/2",
                    "Detail about Product Catalog"));

    @Override
    public List<Api> getAllApis() {
        return apis;
    }

    @Override
    public Api getApiById(Long id) {
        return apis.stream().filter(api -> api.getId().equals(id)).findFirst().orElse(null);
    }
}
