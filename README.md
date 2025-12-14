# node_api_rest_template

Template para crear APIs REST en Node.js + TypeScript con arquitectura en capas
(controllers → services → repositories).

![CI](https://img.shields.io/github/actions/workflow/status/UlisesNiSchreiner/node_api_rest_template/ci.yml?label=CI)
![Release](https://img.shields.io/github/actions/workflow/status/UlisesNiSchreiner/node_api_rest_template/release.yml?label=Release)
[![Coverage](https://codecov.io/gh/UlisesNiSchreiner/node_api_rest_template/branch/main/graph/badge.svg)](https://codecov.io/gh/UlisesNiSchreiner/node_api_rest_template)
![License](https://img.shields.io/badge/License-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Node](https://img.shields.io/badge/Node-18+-green)
![OpenAPI](https://img.shields.io/badge/Swagger-OpenAPI%203.0-orange)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)

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