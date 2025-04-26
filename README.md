# Proyecto base con autenticación vía Sherpa

Este es un ejemplo desarrollado con [Next.js](https://nextjs.org), pensado como base para proyectos que requieran la autenticación de miembros del Movimiento Scout del Uruguay mediante [`Sherpa`](https://sherpa.msu.edu.uy), siguiendo el estándar [`OAuth2`](https://oauth.net/2/).

¿Que cosa? Dicho en criollo ... usando esto como base podés desarrollar cualquier proyecto para tu grupo o el movimiento y permitir que los miembros del MSU se conecten usando su documento y contraseña tal y como se conectan al sherpa. Una vez que lo hagan tendrás un usuario en tu base de datos con el nombre, grupo, tipo de miembro y rama.

---

## 🔐 Variables de entorno

Estas son las variables necesarias para que el proyecto funcione correctamente. El **ID de cliente** y el **secreto** deben ser proporcionados por el MSU. Para solicitarlos, escribí a [`sherpa@msu.edu.uy`](mailto:sherpa@msu.edu.uy).

| Variable                          | Descripción                                                                               |
| --------------------------------- | ----------------------------------------------------------------------------------------- |
| `DATABASE_URL`                    | Cadena de conexión a la base de datos. Ejemplo: `postgresql://root:@localhost:5432/shuni` |
| `NEXT_PUBLIC_BASE_URL`            | URL base de tu proyecto. Ejemplo: `http://localhost:3000`                                 |
| `NEXT_PUBLIC_SSO_CLIENT_ID`       | ID del cliente proporcionado por Sherpa.                                                  |
| `SSO_CLIENT_SECRET`               | Secreto del cliente proporcionado por Sherpa.                                             |
| `NEXT_PUBLIC_SESSION_COOKIE_NAME` | Nombre de la cookie de sesión. Ejemplo: `_session`                                        |

---

## 🛠 Inicializar la base de datos

Para preparar el entorno de base de datos con Prisma, ejecutá:

```bash
npx prisma generate
npx prisma db push
```

---

## 🚀 Ejecutar en modo desarrollo

Para levantar el entorno local de desarrollo:

```bash
npm run dev
```

## ¿Como funciona?

Si accedes a http://localhost:3000 deberias ver un mensaje de vienvenida y un link a la "zona protegida". Esta url solo es accesible para usuarios conectados, por lo que si haces click te redirigirá a sherpa para que accedas con un documento y contraseña de un miembro del MSU.

Una vez lo hayas hecho sherpa te enviará de nuevo y estarás logueado. Por lo que habrás accedido a la "zona protegida" y verás en pantalla los datos del usuario.

## Acceder a los datos del usuario

Te recomiendo que veas el código de /app/private-route/page.tsx
Te dará una buena idea de como acceder a los datos del usuario y como proteger rutas.
