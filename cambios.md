# Registro de cambios

Este archivo es el historial de cambios del desarrollo del sitio web personal "Sebastian Valdez Studio". Cada entrada registra una tarea completada mediante un prompt del pack.

## Formato de cada entrada

## AAAA-MM-DD - Prompt XX - Nombre de la sección

- Archivos creados: ...
- Archivos modificados: ...
- Archivos eliminados: ...
- Cambios realizados: ...
- Estado: Completado

---

## 2024-01-07 - Prompt 03 - Inicio · Portada

- Archivos creados: src/components/inicio/Portada.astro
- Archivos modificados: src/pages/index.astro
- Archivos eliminados: Ninguno
- Cambios realizados: Se construyó la sección de portada de la página de inicio con disposición responsive: en celulares el título "Figuras que cobran vida", el texto de presentación, el botón y la imagen se apilan verticalmente; en computadoras el texto y botón están a la izquierda (50%) e la imagen a la derecha (50%). El título principal usa la fuente Roboto Slab y el texto de presentación usa Roboto. El botón "Ver proyectos →" enlaza a /proyectos con fondo de marca #C51F43, texto blanco y hover sutil. La imagen destacada tiene esquinas de 8px (rounded-lg) y un borde sutil de 1px. Se ve bien a 360, 768 y 1280 px, sin scroll horizontal. `npm run verificar` termina sin errores.
- Estado: Completado

## 2024-01-07 - Prompt 01 - Global · Identidad

- Archivos creados: Ninguno
- Archivos modificados: src/styles/global.css, src/components/ui/Contenedor.astro, src/datos/sitio.ts
- Archivos eliminados: Ninguno
- Cambios realizados: Se declararon y aplicaron las variables y clases de color (fondo #FFF9F2, superficie #FFFFFF, texto #292329, texto suave #625760, borde #D8C9C8 y marca #C51F43). Se configuraron las fuentes con @font-face desde pack/fuentes/ para Roboto Slab (400 y 700) y Roboto (400 y 700). Se aplicaron las reglas de esquinas (8px / rounded-lg), bordes (1px solid #D8C9C8), sombra suave y ancho de contenedor medio. Se ve bien a 360, 768 y 1280 px, sin scroll horizontal. `npm run verificar` termina sin errores.
- Estado: Completado

## 2024-01-07 - Prompt 02 - Marco · Estructura base y navegación

- Archivos creados: src/pages/proyectos.astro, src/pages/sobre-mi.astro, src/pages/contacto.astro
- Archivos modificados: src/datos/sitio.ts, src/pages/index.astro, src/components/Encabezado.astro
- Archivos eliminados: src/components/inicio/Portada.astro, src/components/inicio/Comprobacion.astro, src/components/inicio/Pasos.astro
- Cambios realizados: Se configuró la identidad visual del sitio definiendo la paleta de colores, tipografías locales con @font-face, forma y animaciones. El encabezado fijo se mantiene visible al hacer scroll e incluye el logo y enlaces a Inicio (/), Proyectos (/proyectos), Sobre mí (/sobre-mi) y Contacto (/contacto). En pantallas móviles el menú se comporta como desplegable ordenado y accesible. Cada página nueva (proyectos.astro, sobre-mi.astro, contacto.astro) se renderiza con su título de pestaña respectivo. Se ve bien a 360, 768 y 1280 px, sin scroll horizontal. `npm run verificar` termina sin errores.
- Estado: Completado
