package com.globalhitss.tijuana.plex.api_directory.frontend.security.config;


//Importar las clases para leer properties de configuración (aplication.properties)
import org.springframework.beans.factory.annotation.Value;

import org.springframework.context.annotation.Bean; 
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.globalhitss.tijuana.plex.api_directory.frontend.security.JwtFilter;



import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@Configuration
public class SecurityConfig {
    private final JwtFilter jwtFilter;

    public SecurityConfig(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

   @Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .cors() // Habilita CORS
        .and()
        .authorizeHttpRequests()
            .requestMatchers("/auth/**").permitAll()
            .requestMatchers("/api-versions/**").permitAll()
            .anyRequest().authenticated()
        .and()
        .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

    http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
    return http.build();
}


@Value("${spring.application.frontend.origin}")
private String frontendOrigin;

@Bean
public CorsFilter corsFilter() {
    CorsConfiguration config = new CorsConfiguration();
    //config.addAllowedOrigin("http://localhost:3000"); // Cambia según tu frontend
    config.addAllowedOrigin(frontendOrigin);
    config.addAllowedHeader("*");
    config.addAllowedMethod("*");
    config.setAllowCredentials(true);

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", config);
    return new CorsFilter(source);
}

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}