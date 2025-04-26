Este es un ejemplo desarrollado con [Next.js](https://nextjs.org) pensado para servir de base en proyectos que requieran la autenticación de miembros del Movimiento Scout del Uruguay a través de [`sherpa`](https://sherpa.msu.edu.uy) y basado en el estandar [`oAuth2`](https://oauth.net/2/)

## Definir variables de entorno

Estas son las variables de entorno necesarias para que el proyecto funcione. Tanto el id del ciente como el secreto deben ser proporcionados por el MSU. Solicitarlo a [`sherpa@msu.edu.uy`](mailto:sherpa@msu.edu.uy)

DATABASE_URL - Un string de conexión para la base de datos. Ejemplo"postgresql://root:@localhost:5432/shuni"
NEXT_PUBLIC_BASE_URL - La url base de este proyecto
NEXT_PUBLIC_SSO_CLIENT_ID - El ID del cliente (proporcionado por sherpa)
SSO_CLIENT_SECRET - El secreto del cliente (proporcionado por sherpa)
NEXT_PUBLIC_SSO_AUTHORIZE_URL="https://sherpa.msu.edu.uy/auth/authorize"
SSO_TOKEN_URL="https://sherpa.msu.edu.uy/auth/token"
SSO_LOGIN_URL="https://sherpa.msu.edu.uy/auth/login"
SSO_USER_URL="https://sherpa.msu.edu.uy/auth/user"
NEXT_PUBLIC_SESSION_COOKIE_NAME="\_session"

## Inicializar la base de datos

Para comenzar a usar prisma es necesario correr dos comandos:

```bash
npx prisma generate
npx prisma db push
```

## Correr en modo desarrollo

```bash
npm run dev
```
