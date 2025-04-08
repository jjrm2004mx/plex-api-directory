## 📦 Requisitos
- Docker y Docker Compose instalados
- Proyecto Java ya compilado en `backend/target/*.jar`

## 📁 Estructura esperada
```
/tu-proyecto
├── backend/
│   └── Dockerfile
│   └── target/
│       └── api-directory-backend.jar
├── frontend/
│   └── Dockerfile
│   └── nginx.conf
│   └── package.json
├── docker-compose.yml
└── README.md
```

## 🚀 Ejecución del proyecto
Desde la raíz del proyecto, ejecutar:

```bash
docker-compose up --build
```

Esto:
- Levanta el backend en `http://localhost:8080`
- Levanta el frontend en `http://localhost:3000`

## 🔐 Autenticación JWT
Puedes hacer login con:
```
POST http://localhost:8080/auth/login
{
  "username": "admin",
  "password": "admin123"
}
```

Copia el `token` y úsalo en el frontend como:
```
Authorization: Bearer <token>
```

---
¡Listo para desarrollar o desplegar en producción! 🚀
