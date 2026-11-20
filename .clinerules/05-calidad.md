# Calidad

- HTML semántico: `header`, `nav`, `main`, `section`, `footer`. Un solo `<h1>` por página (en la portada); `<h2>` para cada sección.
- Toda imagen lleva `alt` que describa lo que muestra (`alt=""` solo si es decorativa).
- Enlaces y botones: usa `Boton` de `src/components/ui/`. El foco visible ya está definido en `global.css`: no lo quites.
- Contraste: sobre fondo hueso, texto `tinta` o `gris-600` (o más oscuro).
- TypeScript: props con `interface Props`; al buscar elementos usa `querySelector<HTMLElement>(...)`.
- Textos reales en español. Nada de lorem ipsum.
