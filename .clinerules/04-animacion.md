# Animación

No escribas código de Motion dentro de los componentes. Usa estos atributos en el HTML:

- `data-revelar`: el elemento aparece suavemente al entrar en pantalla.
- `data-revelar-cascada`: en un contenedor (por ejemplo un `<ul>`), sus hijos aparecen uno tras otro.

```astro
<h2 data-revelar>Proyectos</h2>
<ul data-revelar-cascada>...</ul>
```

La lógica vive en `src/scripts/animaciones.ts`: ya respeta `prefers-reduced-motion` y anima una sola vez.
Si hace falta una animación nueva, agrégala como función en ese archivo (revisando `prefers-reduced-motion`) y explica cómo se usa.

Usa la animación con moderación: un momento bien hecho es mejor que animar todo.
