package com.globalhitss.tijuana.plex.api_directory.backend.service.impl;

import java.util.Optional;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.globalhitss.tijuana.plex.api_directory.backend.model.ApiVersions;
import com.globalhitss.tijuana.plex.api_directory.backend.service.ApiVersionService;

@Service
public class InMemoryApiVersionService implements ApiVersionService {
    private final List<ApiVersions> apisVersions = Arrays.asList(


new ApiVersions(
    601L,
    "Account Management",
    "v2.0",
    "v1.0",
    "RESTful",
    "Business Partner",
    "23 Enero 2025",
    "Provides standardized mechanism for the management of billing and settlement accounts, as well as for financial accounting (account receivable) either in B2B or B2B2C contexts",
    "v4.0.0 /n 07-Nov-2024 TMF646 v4.0.0 CTK file fix Mac-Linux-RUNCTK.sh modified to remove syntax errors. No impact to awarded Open API Conformance certifications"),
    new ApiVersions(
    601L,
    "Account Management",
    "v2.0",
    "v2.0",
    "RESTful",
    "Business Partner",
    "01 Enero 2025",
    "Provides standardized mechanism for the management of billing and settlement accounts, as well as for financial accounting (account receivable) either in B2B or B2B2C contexts",
    "v4.0.0 /n 07-Nov-2024 TMF646 v4.0.0 CTK file fix Mac-Linux-RUNCTK.sh modified to remove syntax errors. No impact to awarded Open API Conformance certifications")
    );

    @Override
    public List<ApiVersions> getAllApiVersions() {
        return apisVersions;
    }

     @Override
    public Optional<ApiVersions> getApiVersionById(Long id) {
        return apisVersions.stream()
                .filter(api -> api.getId().equals(id))
                .findFirst();
    }
}
