# Dockerfile para el frontend (React)
# Guardar como frontend/Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
# RUN npm install
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
# COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80