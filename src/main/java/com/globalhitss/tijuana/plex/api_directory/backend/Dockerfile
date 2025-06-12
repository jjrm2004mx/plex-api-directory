# Dockerfile para el backend (Spring Boot)
# Guardar como backend/Dockerfile
FROM eclipse-temurin:17-jdk
WORKDIR /app
#RUN ls -la
#Temporal

#RUN ls -la /
#RUN ls -la ../../../../../../target
#RUN ls -la ../../../../../../../target
#RUN ls -la  ../../../../../../../../target
COPY ../target/*.jar app.jar
#COPY /api-directory-0.0.1-SNAPSHOT.jar app.jar
#COPY /*.jar app.jar
# COPY c:\VS\plex-api-directory\target\*.jar app.jar
#COPY c:/VS/plex-api-directory/target/*.jar app.jar
#COPY ../../../../../../target/*.jar app.jar
#COPY ../../../../../target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
