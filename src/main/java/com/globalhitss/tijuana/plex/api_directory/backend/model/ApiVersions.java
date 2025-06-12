package com.globalhitss.tijuana.plex.api_directory.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Modelo que representa una versión de una API.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiVersions {
    private Long id;
    private String name;
    private String stableVersion;
    private String thisVersion;
    private String type; 
    private String domain;
    private String releaseDate;
    private String overview;
    private String versionHistory;
}