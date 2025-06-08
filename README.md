# 🧠 API de Juegos Cognitivos

Este proyecto es una API REST desarrollada como parte del Módulo 6 del programa de formación. Permite gestionar usuarios y compras de programas cognitivos, incluyendo registro, inicio de sesión, verificación de sesión activa, y operaciones CRUD sobre productos.

## 🚀 Tecnologías utilizadas

- Node.js + Express
- MongoDB Atlas + Mongoose
- JSON Web Tokens (JWT)
- Swagger (documentación interactiva)
- Dotenv
- bcryptjs
- Render (despliegue en la nube)

---

## 📁 Estructura del proyecto
![image](https://github.com/user-attachments/assets/1368641b-ae82-4aa1-9464-25e621671290)

## 🔧 Instrucciones para correr el proyecto localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Nico-MDS/PROYECTO1M6.git
   cd PROYECTO1M6

2. Instala las dependencias:
   npm install

3. Crea un archivo .env con tus credenciales:

- MONGO_URI=tu_uri_de_mongodb_atlas
- JWT_SECRET=tu_clave_secreta
 
4. Inicia el servidor en modo desarrollo:

- npm run dev  

5. Abre el navegador

- Documentación Swagger local: http://localhost:5000/api-docs

🌐 Despliegue en línea

- Puedes probar la API desplegada en Render usando Swagger:
🔗 https://proyecto1m6-api.onrender.com/api-docs

📌 Funcionalidades principales
✅ Registro e inicio de sesión de usuarios

🔐 Verificación de sesión mediante JWT

✏️ Actualización y eliminación de usuarios autenticados

🛍️ CRUD completo de compras de programas cognitivos (básico, estándar, premium)

📝 Notas
El token JWT debe copiarse desde la respuesta del login y usarse en el botón Authorize de Swagger para probar rutas protegidas.

El proyecto incluye validación de datos y seguridad básica.


Nicolás Rodríguez


