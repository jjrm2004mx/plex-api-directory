package com.globalhitss.tijuana.plex.api_directory.backend.service;

import java.util.List;
import java.util.Optional;
import com.globalhitss.tijuana.plex.api_directory.backend.model.ApiVersions;

public interface ApiVersionService {
    /**
     * Obtiene todas las versiones de las APIs.
     *
     * @return una lista de ApiVersions
     */
    List<ApiVersions> getAllApiVersions();

    /**
     * Obtiene una versión de API por su ID.
     *
     * @param id el identificador de la versión
     * @return la versión de API correspondiente
     */
    Optional<ApiVersions> getApiVersionById(Long id);
}