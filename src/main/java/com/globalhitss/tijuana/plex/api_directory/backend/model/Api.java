package com.globalhitss.tijuana.plex.api_directory.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Genera automáticamente Getters, Setters, toString, equals, y hashCode
@NoArgsConstructor // Genera un constructor vacío
@AllArgsConstructor // Genera un constructor con todos los campos

public class Api {
    private String startLetter;
    private Long id;
    private String name;
    private String version;
    private String status;
    private String description;
    private String link;
    private String detail;

    // Getters y setters
    // Constructor completo y vacío


}