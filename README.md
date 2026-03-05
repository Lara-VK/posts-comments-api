# Posts & Comments API

Backend REST API desarrollado con **NestJS + MongoDB**.

Incluye:

* CRUD de Posts
* CRUD de Comments
* Carga masiva (Bulk)
* Paginación
* Respuesta estandarizada
* Docker support

---

## 🚀 Tecnologías

* NestJS
* MongoDB
* Mongoose
* Docker
* RxJS

---

## 📌 Instalación Local

```bash
git clone <repo-url>
cd posts-comments-api
npm install
npm run start:dev
```

Servidor disponible en:

```
http://localhost:3000
```

---

## 🐳 Ejecutar con Docker

Requiere Docker Desktop instalado.

```bash
docker compose up --build
```

Servicios:

* API → http://localhost:3000
* MongoDB → mongodb://localhost:27017

Para detener:

```bash
docker compose down
```

---

## 📚 Endpoints

### Posts

| Método | Endpoint    | Descripción             |
| ------ | ----------- | ----------------------- |
| GET    | /posts      | Listar posts (paginado) |
| GET    | /posts/:id  | Obtener post            |
| POST   | /posts      | Crear post              |
| PUT    | /posts/:id  | Editar post             |
| DELETE | /posts/:id  | Eliminar post           |
| POST   | /posts/bulk | Carga masiva            |

Ejemplo paginación:

```
GET /posts?page=1&limit=5
```

---

### Comments

| Método | Endpoint               |
| ------ | ---------------------- |
| GET    | /comments/post/:postId |
| POST   | /comments              |
| DELETE | /comments/:id          |

---

## 📦 Estructura del Proyecto

```
src/
 ├── posts/
 ├── comments/
 ├── common/
 ├── app.module.ts
```

---

## 🧱 Respuesta Estandarizada

Todas las respuestas siguen el formato:

```json
{
  "success": true,
  "data": {},
  "message": "optional"
}
```

---

## 🧪 Colección Postman

Se incluye archivo:

```
postman_collection.json
```

Importar en Postman para probar la API.

---

## 📄 JSON para Carga Masiva

Ejemplo:

```json
[
  {
    "title": "Post 1",
    "body": "Contenido del post",
    "author": "Kevin"
  }
]
```

---

## 👨‍💻 Autor

Prueba técnica Full-Stack
Angular + NestJS + MongoDB
