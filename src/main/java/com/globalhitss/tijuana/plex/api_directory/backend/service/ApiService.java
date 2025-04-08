package com.globalhitss.tijuana.plex.api_directory.backend.service;

import java.util.List;

import com.globalhitss.tijuana.plex.api_directory.backend.model.Api;

public interface ApiService {
    List<Api> getAllApis();

    Api getApiById(Long id);
}
