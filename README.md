# node_api_rest_template

Template para crear APIs REST en Node.js + TypeScript con arquitectura en capas
(controllers → services → repositories).

- ESM + CJS + type definitions (build con tsup)
- Tests + Coverage (Vitest)
- Linting + Formatting (ESLint + Prettier)
- Husky + lint-staged + commitlint
- Versionado manual con standard-version
- Listo para publicar en npm
- Dockerfile listo para Docker / Kubernetes

## Scripts principales

- `npm run dev` – build en watch (puedes usar nodemon apuntando a `dist/index.cjs`)
- `npm run build`
- `npm test`
- `npm run lint`
- `npm run typecheck`
- `npm run start` – ejecuta `dist/index.cjs`

## Variables de entorno

Archivo `.env`:

- `MONGO_URI` – conexión a MongoDB
- `MONGO_DB_NAME` – nombre de la base
- `MONGO_USERS_COLLECTION` – colección de usuarios
- `PORT` – puerto HTTP (opcional, por defecto 3000)

## Endpoints de ejemplo

- `GET /health` → `{ "status": "ok" }`
- `GET /api/users` → lista de usuarios desde MongoDB