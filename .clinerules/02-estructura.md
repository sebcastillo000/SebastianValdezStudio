# Estructura: dónde va cada cosa

| Carpeta / archivo | Qué contiene |
| --- | --- |
| `src/pages/` | Una página por archivo (`index.astro` = `/`). Solo importa el Layout y ordena secciones. Sin HTML largo, sin estilos, sin scripts. |
| `src/layouts/Layout.astro` | `<head>`, encabezado, pie y arranque de animaciones. Toda página lo usa con `title` y `description`. |
| `src/components/` | **Cada sección de la página es un componente**, aunque se use una sola vez: `SobreMi.astro`, `Proyectos.astro`, `Contacto.astro`. Nombres en español y PascalCase. |
| `src/components/ui/` | Piezas pequeñas reutilizables: `Boton.astro`, `Seccion.astro`. **Antes de crear algo, revisa si ya existe aquí y úsalo.** |
| `src/styles/global.css` | Tokens de diseño (colores, tipografías, sombras) y estilos base. |
| `src/scripts/` | TypeScript compartido, por ejemplo `animaciones.ts`. |
| `src/assets/` | Imágenes del sitio. Se muestran con `<Image />` de `astro:assets`. |
| `public/` | Archivos que se sirven tal cual: favicon y tipografías (`public/fonts/`). |

## Cómo crear una sección nueva

1. Crea `src/components/NombreSeccion.astro` usando `Seccion` como contenedor.
2. Los datos (listas de proyectos, enlaces) van en el frontmatter del componente y se recorren con `map()`.
3. Impórtala en la página y colócala en orden.

```astro
---
import Seccion from "./ui/Seccion.astro";

const proyectos = [{ titulo: "Proyecto 1", descripcion: "Qué hice y con qué." }];
---

<Seccion id="proyectos" etiqueta="02" titulo="Proyectos">
  <ul class="grid gap-6 sm:grid-cols-2" data-revelar-cascada>
    {proyectos.map((p) => (
      <li class="border-3 border-tinta bg-hueso-claro p-6 shadow-duro">
        <h3 class="text-2xl font-bold">{p.titulo}</h3>
        <p class="mt-2 text-gris-600">{p.descripcion}</p>
      </li>
    ))}
  </ul>
</Seccion>
```

## Imágenes

Usa las fotos que el estudiante dejó en `src/assets/`; si no hay ninguna, pregunta antes de inventar una de ejemplo.
No pongas `width` ni `height` en `<Image />`: Astro lee las medidas reales del archivo y así la foto no se deforma ni se recorta.

```astro
---
import { Image } from "astro:assets";
import foto from "../assets/foto.jpg";
---

<Image src={foto} alt="Descripción real de lo que muestra la foto" class="border-3 border-tinta" />
```
