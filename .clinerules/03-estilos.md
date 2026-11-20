# Estilos

- Estiliza con clases de Tailwind en el HTML. No uses `style=""` ni bloques `<style>` en los componentes.
- Colores, tipografías y sombras salen **solo** de los tokens de `src/styles/global.css`.
  La paleta por defecto de Tailwind está desactivada: `bg-blue-500`, `text-red-600`, etc. **no existen**.
- Si hace falta un color nuevo, agrégalo en `@theme` de `global.css` con nombre en español y explica por qué.
- CSS escrito a mano solo en `global.css` y solo si Tailwind no puede hacerlo.

## Tokens disponibles

| Token | Clases | Uso |
| --- | --- | --- |
| `hueso` | `bg-hueso` | Fondo principal |
| `hueso-claro` | `bg-hueso-claro` | Tarjetas y superficies |
| `tinta` | `text-tinta`, `border-tinta`, `bg-tinta` | Texto, bordes, fondos oscuros |
| `gris-200` / `400` / `600` / `800` | `text-gris-600`, `bg-gris-200`… | Texto secundario (`gris-600` o más oscuro sobre hueso) |
| `acento` / `acento-oscuro` | `bg-acento`, `hover:bg-acento-oscuro` | Amarillo: botón principal y resaltados |
| `font-sans` / `font-mono` | `font-sans`, `font-mono` | Space Grotesk (texto) / JetBrains Mono (etiquetas, botones) |
| `shadow-duro` / `shadow-duro-lg` | `shadow-duro` | Sombra sólida brutalista |

## Lenguaje visual: brutalista

- Bordes gruesos: `border-3 border-tinta`. Esquinas rectas: no uses `rounded`.
- Sombras duras (`shadow-duro`), nunca difuminadas.
- Títulos grandes y en negrita; etiquetas pequeñas en `font-mono` y mayúsculas.
- Amarillo solo para destacar. **Nunca texto amarillo sobre fondo hueso** (no se lee): el amarillo va de fondo con texto `tinta`.
- Diseña primero para celular y luego amplía con `sm:`, `md:`, `lg:`.

## Tipografías locales

Los archivos `.woff2` están en `public/fonts/` y se declaran con `@font-face` en `global.css`.
Para usar otra fuente: copia el `.woff2` en `public/fonts/`, añade su `@font-face` y cambia `--font-sans` o `--font-mono`.
