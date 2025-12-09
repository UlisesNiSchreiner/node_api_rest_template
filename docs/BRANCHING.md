# LibFlow (branching model)

Recomendación de flujo de ramas para librerías / templates:

- `master`: rama estable, versiones liberadas.
- `develop`: integración de features antes de cortar una release.
- `feature/*`: nuevas funcionalidades o cambios.
- `fix/*`: hotfixes o bugfixes.

Flujo típico:

1. Crear rama `feature/nombre-feature` desde `develop`.
2. Abrir PR a `develop`.
3. Merge a `develop` una vez aprobado.
4. Para liberar, merge `develop` → `master` y ejecutar:
   - `npm run release:patch|minor|major`

Este repo usa `standard-version` para generar changelog + tags.