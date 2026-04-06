# Tasks: Move payload-types.ts to src/types/

## Phase 1: Mover archivo y actualizar config

- [x] 1.1 Mover `src/payload-types.ts` → `src/types/payload-types.ts`
- [x] 1.2 En `src/payload.config.ts:35`, cambiar `outputFile` a `path.resolve(dirname, 'types/payload-types.ts')`

## Phase 2: Actualizar imports

- [x] 2.1 En `src/components/sections/projects-client.tsx:7`, cambiar `@/payload-types` → `@/types/payload-types`
- [x] 2.2 En `src/components/sections/skills-client.tsx:7`, cambiar `@/payload-types` → `@/types/payload-types`
- [x] 2.3 En `src/components/ui/projects/project-card.tsx:8`, cambiar `@/payload-types` → `@/types/payload-types`
- [x] 2.4 En `src/components/ui/skills/skill-card.tsx:5`, cambiar `@/payload-types` → `@/types/payload-types`

## Phase 3: Verificación

- [x] 3.1 Ejecutar `pnpm lint` — debe pasar sin errores
- [x] 3.2 Ejecutar `tsc --noEmit` — debe pasar sin errores
- [x] 3.3 Confirmar que `pnpm generate:types` genera en `src/types/payload-types.ts` (revisar el outputFile actualizado)
