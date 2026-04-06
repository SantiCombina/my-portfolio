# Proposal: Move payload-types.ts to src/types/

## Intent

`payload-types.ts` se genera en `src/` (raíz del source), pero ya existe `src/types/` para tipos del proyecto. Centralizar los tipos generados ahí mejora la organización y hace predecible dónde viven todos los tipos.

## Scope

### In Scope
- Cambiar `typescript.outputFile` en `payload.config.ts` para que genere en `src/types/payload-types.ts`
- Mover el archivo actual `src/payload-types.ts` → `src/types/payload-types.ts`
- Actualizar los 4 imports de `@/payload-types` → `@/types/payload-types` en los componentes afectados

### Out of Scope
- Cambiar el alias `@/` en `tsconfig.json`
- Reorganizar otros archivos de `src/types/`

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- None

## Approach

1. Mover el archivo físico.
2. Actualizar `payload.config.ts` línea 35: `outputFile: path.resolve(dirname, 'types/payload-types.ts')`.
3. Actualizar los 4 imports afectados (búsqueda y reemplazo de `@/payload-types` → `@/types/payload-types`).
4. Verificar con `pnpm lint` y `tsc --noEmit`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/payload.config.ts:35` | Modified | Ruta de outputFile |
| `src/payload-types.ts` | Removed | Se mueve a src/types/ |
| `src/types/payload-types.ts` | New | Nuevo destino del archivo generado |
| `src/components/sections/projects-client.tsx:7` | Modified | Import actualizado |
| `src/components/sections/skills-client.tsx:7` | Modified | Import actualizado |
| `src/components/ui/projects/project-card.tsx:8` | Modified | Import actualizado |
| `src/components/ui/skills/skill-card.tsx:5` | Modified | Import actualizado |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| `pnpm generate:types` sobreescribe el archivo en la ruta antigua | Low | La config queda apuntando a la nueva ruta desde el inicio |
| Algún import sin actualizar genera error de compilación | Low | `tsc --noEmit` lo detecta antes de commitear |

## Rollback Plan

```bash
# Revertir el archivo movido y los imports
git checkout src/payload-types.ts
git checkout src/payload.config.ts
git checkout src/components/
# Borrar src/types/payload-types.ts si fue creado
```

## Dependencies

- Ninguna externa

## Success Criteria

- [ ] `src/payload-types.ts` ya no existe en raíz de `src/`
- [ ] `src/types/payload-types.ts` existe y tiene el contenido correcto
- [ ] `pnpm generate:types` genera el archivo en `src/types/payload-types.ts`
- [ ] `pnpm lint` pasa sin errores
- [ ] `tsc --noEmit` pasa sin errores
