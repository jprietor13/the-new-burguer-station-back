# 🍔 The New Burger Station API

**The New Burger Station** es una API REST creada con **NestJS** que permite:

- Registrar usuarios
- Autenticarlos con JWT
- Listar hamburguesas, extras, bebidas, acompañamientos y salsas
- Crear órdenes personalizadas
- Enviar confirmaciones por correo al cliente vía **SendGrid**

Esta API está totalmente documentada con **Swagger** y desplegada en **Railway** con base de datos **MySQL**.

---

## 🌐 Producción

🔗 API desplegada:[**https://the-new-burguer-station-back-jp.up.railway.app/api**](https://the-new-burguer-station-back-jp.up.railway.app/api)

📬 Emails enviados vía **SendGrid**✔️ JWT protegidos📘 Swagger activo🧹 Base de datos MySQL en Railway

---

## 🧠 Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [SendGrid](https://sendgrid.com/)
- [JWT](https://jwt.io/)
- [Swagger](https://swagger.io/)
- [Railway](https://railway.app/)

---

## 📁 Estructura del proyecto

```
src/
│
├── auth/          → Registro, login y estrategia JWT
├── burgers/       → Módulo de hamburguesas
├── orders/        → Módulo de órdenes
├── extras/        → Extras disponibles
├── drinks/        → Bebidas
├── sides/         → Acompañamientos
├── sauces/        → Salsas
├── email/         → Servicio para envío de correos
├── users/         → Gestión de usuarios
├── app.module.ts  → Configuración global
├── main.ts        → Punto de arranque y Swagger
```

---

## ⚙️ Configuración local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/the-new-burguer-station-back.git
cd the-new-burguer-station-back
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar base de datos local

- Crear una base de datos MySQL llamada `burger_station_db`, se puede crear manualmente con el instalador de mySql o usar Docker para crear un contenedor y montar la BD desde ahi.
- Crear un archivo `.env` con:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_NAME=burger_station_db

SENDGRID_API_KEY=clave_sendgrid
SENDGRID_FROM_EMAIL=correo_verificado_cuenta_sendgrid

JWT_SECRET=clave_segura_para_jwt
```

### 4. Iniciar servidor

```bash
npm run start:dev
```

Swagger: [http://localhost:3000/api](http://localhost:3000/api)

---

## 🧪 Probar en local con Swagger

Para probar todos los endpoints desde:📘 `http://localhost:3000/api`

### Ejemplo para registrar:

`POST /auth/register`

```json
{
  "email": "test@example.com",
  "password": "123456"
}
```

### Luego, realizar el login:

`POST /auth/login`→ Con ese endpoint se obtiene el `access_token` para autenticar al usuario

### Para usar endpoints protegidos:

Agregra este header en Swagger:

```
Authorization: Bearer ACCESS_TOKEN
```

---

## ✉️ Crear una orden (protegido)

`POST /orders`

```json
{
  "burgerId": 1,
  "extras": ["Tocineta", "Queso cheddar"],
  "sauces": ["Mayonesa", "BBQ"],
  "side": "Papas fritas",
  "drink": "Cola",
  "totalPrice": 18.75
}
```

✅ Recibirá un correo de confirmación si el email del usuario es válido.

---

## 🚀 Despliegue en producción (Railway)

1. Conectar el repositorio a Railway
2. Agregar las variables en Settings > Variables:

```env
DB_HOST=mysql.railway.internal
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=clave_generada_railway
DB_NAME=railway

SENDGRID_API_KEY=clave_real
SENDGRID_FROM_EMAIL=correo_verificado

JWT_SECRET=clave_segura
```

3. Railway crea una base de datos MySQL automáticamente desde "New > MySQL"

### Procfile

En la raíz del proyecto:

```
start: npm run start:prod
```

Y en `package.json`:

```json
"scripts": {
  "start:prod": "npm run build && npm run start"
}
```

---

## 🔐 Seguridad

- Endpoints de `/orders` protegidos con `JwtAuthGuard`
- Contraseñas encriptadas con `bcrypt`
- JWT firmado con `JWT_SECRET`
- Validaciones básicas activas

---

## 🧑‍🍳 Autor

Creado con por

**Juan Prieto Rodríguez**Frontend & Fullstack Developer📧 [jp1739@gmail.com](mailto:jp1739@gmail.com)

---
