## Prompt 01 · Global · Identidad
**Tarea:** Configurar la identidad visual del sitio definiendo la paleta de colores, tipografías locales con @font-face, forma y animaciones.
**Datos:** brief, secciones 3 (Paleta de color), 4 (Tipografías) y 5 (Forma, menú y animación).
**Pega estos archivos (versión actual, con su ruta):**
- src/styles/global.css
- src/components/ui/Contenedor.astro
- src/datos/sitio.ts
**Devuélveme completos:**
- src/styles/global.css (REEMPLAZA)
- src/components/ui/Contenedor.astro (REEMPLAZA)
- src/datos/sitio.ts (REEMPLAZA)
**Borrar:** nada
**Terminado cuando:**
- Se declaran y aplican las variables y clases de color: fondo (#FFF9F2), superficie (#FFFFFF), texto (#292329), texto suave (#625760), borde (#D8C9C8) y marca (#C51F43).
- Se configuran las fuentes con @font-face desde pack/fuentes/ para Roboto Slab (400 y 700) y Roboto (400 y 700).
- Se aplican las reglas de esquinas (8px / rounded-lg), bordes (1px solid #D8C9C8), sombra suave y ancho de contenedor medio.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 02 · Marco · Estructura base y navegación
**Tarea:** Configurar los datos generales del sitio, el encabezado fijo con navegación completa y crear las páginas vacías del mapa del sitio.
**Datos:** brief, secciones 1 (La marca), 5 (Forma, menú y animación), 6 (Mapa del sitio), 7 (Datos de contacto y redes) y 8 (Recursos y archivos).
**Pega estos archivos (versión actual, con su ruta):**
- src/datos/sitio.ts
- src/pages/index.astro
- src/components/Encabezado.astro
**Devuélveme completos:**
- src/datos/sitio.ts (REEMPLAZA)
- src/pages/index.astro (REEMPLAZA)
- src/components/Encabezado.astro (REEMPLAZA)
- src/pages/proyectos.astro (NUEVO)
- src/pages/sobre-mi.astro (NUEVO)
- src/pages/contacto.astro (NUEVO)
**Borrar:** src/components/inicio/Portada.astro, src/components/inicio/Comprobacion.astro, src/components/inicio/Pasos.astro
**Terminado cuando:**
- El encabezado fijo se mantiene visible al hacer scroll e incluye el logo (pack/logos/logosebas.png o .svg) y enlaces a Inicio (/), Proyectos (/proyectos), Sobre mí (/sobre-mi) y Contacto (/contacto).
- En pantallas móviles el menú se comporta como desplegable ordenado y accesible.
- Cada página nueva (proyectos.astro, sobre-mi.astro, contacto.astro) se renderiza con su título de pestaña respectivo.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 03 · Inicio · Portada
**Tarea:** Construir la sección de portada de la página de inicio con título principal, texto de presentación, botón de acción e imagen destacada.
**Datos:** brief, sección 9, Página Inicio, Sección Portada.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/index.astro
**Devuélveme completos:**
- src/components/inicio/Portada.astro (NUEVO)
- src/pages/index.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto de presentación, botón e imagen apilados verticalmente; computadora: texto y botón a la izquierda (50%) e imagen a la derecha (50%).
**Referencia:** ninguna
**Terminado cuando:**
- Se muestra el título principal "Figuras que cobran vida" en Roboto Slab y el texto de presentación en Roboto.
- El botón "Ver proyectos →" enlaza a /proyectos con color de fondo de marca (#C51F43), texto en blanco y hover sutil.
- La imagen destacada respeta las esquinas de 8px y borde sutil de 1px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 04 · Inicio · Proyectos destacados
**Tarea:** Crear la sección de proyectos destacados en la página de inicio con cuadrícula de categorías e imágenes representativas.
**Datos:** brief, sección 9, Página Inicio, Sección Proyectos destacados.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/index.astro
**Devuélveme completos:**
- src/components/inicio/ProyectosDestacados.astro (NUEVO)
- src/pages/index.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título y cuadrícula de 2 columnas de tarjetas; computadora: título y fila de 4 tarjetas en horizontal (Personajes, Escenarios, Animaciones, Más proyectos).
**Referencia:** ninguna
**Terminado cuando:**
- Se muestran las cuatro tarjetas con sus imágenes: pack/imagenes/personajes.jpg, pack/imagenes/detrasescenas.jpg, pack/imagenes/SLASHER.jpg y pack/imagenes/ALIEN.jpg.
- Cada tarjeta incluye su nombre de categoría con tipografía legible, esquinas de 8px, bordes de 1px y sombra suave.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 05 · Inicio · Contacto
**Tarea:** Construir la sección de llamada a contacto al pie de la página de inicio.
**Datos:** brief, sección 9, Página Inicio, Sección Contacto.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/index.astro
**Devuélveme completos:**
- src/components/inicio/Contacto.astro (NUEVO)
- src/pages/index.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto y botón apilados y centrados; computadora: título, texto y botón centrados dentro de un bloque destacado.
**Referencia:** ninguna
**Terminado cuando:**
- Se muestra el título "¿Tienes un proyecto en mente?", el texto "Me encantaría ayudarte a darle vida." y el botón "Contáctame" que redirige a /contacto.
- El bloque contenedor utiliza superficie blanca (#FFFFFF), bordes de 1px (#D8C9C8) y esquinas de 8px.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 06 · Proyectos · Galería de proyectos
**Tarea:** Construir la galería principal de la página Proyectos con título, texto introductorio, barra de filtros y cuadrícula de obras.
**Datos:** brief, sección 9, Página Proyectos, Sección Galería de proyectos.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/proyectos.astro
**Devuélveme completos:**
- src/components/proyectos/GaleriaProyectos.astro (NUEVO)
- src/pages/proyectos.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título y texto introductorio apilados a la izquierda, botones de filtros en fila horizontal desplazable, tarjetas de imágenes en cuadrícula de 2 columnas; computadora: título y texto introductorio, fila de botones de filtros ("Todos" activo), cuadrícula de 3 columnas por 2 filas con 6 tarjetas de imágenes.
**Referencia:** 1a (Muestra imágenes grandes de personajes y producciones, organizadas de forma dinámica y con diferentes inclinaciones) y 2a (Permite presentar distintos proyectos creativos mediante una cuadrícula de imágenes y portadas).
**Terminado cuando:**
- Se muestra el título "Mis Proyectos" y el texto introductorio exacto.
- Se implementan los botones de filtro: Todos, Personajes, Escenarios, Animaciones, destacando visualmente el filtro activo.
- La galería contiene las 6 tarjetas con imágenes: ALIEN.jpg, KANE.jpg, SLASHER.jpg, UNDERTAKER.jpg, personajes.jpg, detrasescenas.jpg, con bordes de 1px, esquinas de 8px y sombra suave.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 07 · Proyectos · Detalle de cada proyecto
**Tarea:** Implementar el componente para visualizar en detalle una producción individual con personajes y descripción narrativa.
**Datos:** brief, sección 9, Página Proyectos, Sección Detalle de cada proyecto.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/proyectos.astro
**Devuélveme completos:**
- src/components/proyectos/DetalleProyecto.astro (NUEVO)
- src/pages/proyectos.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen, título y descripción apilados verticalmente; computadora: presentación destacada con título grande, imagen llamativa y texto explicativo.
**Referencia:** 1b (Presenta la producción con un título grande, una imagen de sus personajes y una descripción que explica la historia y cómo se crearon).
**Terminado cuando:**
- Se presenta una estructura clara para el proyecto con tipografía destacada en Roboto Slab, imagen central y descripción explicativa.
- Mantiene los márgenes y proporciones adaptadas tanto a dispositivos móviles como a escritorio.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 08 · Proyectos · Técnica y proceso
**Tarea:** Desarrollar la sección de técnica y etapas de creación artesanal en la página Proyectos.
**Datos:** brief, sección 9, Página Proyectos, Sección Técnica y proceso.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/proyectos.astro
**Devuélveme completos:**
- src/components/proyectos/TecnicaProceso.astro (NUEVO)
- src/pages/proyectos.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imágenes y textos explicativos de etapas apilados verticalmente; computadora: cuadrícula o secuencia visual que muestra etapas de creación con imágenes grandes y notas de proceso.
**Referencia:** 2b (Presenta proyectos individuales mediante imágenes grandes y contenido visual que explica el proceso creativo, etapas y modelado).
**Terminado cuando:**
- La sección muestra el flujo de trabajo de modelado, escenarios y animación artesanal.
- Los contenedores visuales respetan el radio de borde de 8px y bordes sutiles.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 09 · Sobre mí · Presentación personal
**Tarea:** Construir la sección de bienvenida y semblanza de autor en la página Sobre mí.
**Datos:** brief, sección 9, Página Sobre mí, Sección Presentación personal.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/sobre-mi.astro
**Devuélveme completos:**
- src/components/sobre-mi/PresentacionPersonal.astro (NUEVO)
- src/pages/sobre-mi.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: imagen personal arriba, título y texto de presentación debajo apilados verticalmente; computadora: dos columnas 50/50, imagen personal a la izquierda y texto a la derecha (título y párrafo).
**Referencia:** ninguna
**Terminado cuando:**
- Se muestra la fotografía personal pack/imagenes/SEBASTIANVALDEZ.jpg con esquinas de 8px y borde de 1px.
- Se presenta el título "Hola, soy Sebastián" en Roboto Slab y el texto de presentación exacto en Roboto.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 10 · Sobre mí · Mi proceso creativo
**Tarea:** Crear la sección de los tres pilares del proceso creativo (Creatividad, Proceso, Resultado) en la página Sobre mí.
**Datos:** brief, sección 9, Página Sobre mí, Sección Mi proceso creativo.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/sobre-mi.astro
**Devuélveme completos:**
- src/components/sobre-mi/ProcesoCreativo.astro (NUEVO)
- src/pages/sobre-mi.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: 3 bloques apilados verticalmente, cada uno con icono a la izquierda y texto a la derecha; computadora: fila horizontal de 3 columnas, cada una con icono centrado, título de sección y texto.
**Referencia:** ninguna
**Terminado cuando:**
- Se presentan los tres bloques: Creatividad ("Cada proyecto empieza con una idea."), Proceso ("Moldeo, esculpo, pinto y ajusto.") y Resultado ("Personajes, escenarios y animaciones únicas.").
- Cada bloque incluye su respectivo icono y tipografía Roboto Slab para encabezados.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 11 · Sobre mí · Materiales y técnicas
**Tarea:** Implementar la sección de materiales y técnicas con sus cuatro tarjetas en la página Sobre mí.
**Datos:** brief, sección 9, Página Sobre mí, Sección Materiales y técnicas.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/sobre-mi.astro
**Devuélveme completos:**
- src/components/sobre-mi/MaterialesTecnicas.astro (NUEVO)
- src/pages/sobre-mi.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título arriba, cuadrícula de 2 columnas con tarjetas de imagen y nombre; computadora: título arriba, fila horizontal de 4 tarjetas con imagen y nombre.
**Referencia:** ninguna
**Terminado cuando:**
- Se visualiza el título "Materiales y técnicas" en Roboto Slab.
- Se presentan las cuatro tarjetas con sus imágenes: Plastilina (pack/imagenes/personajes.jpg), Escultura (pack/imagenes/KANE.jpg), Fotografía (pack/imagenes/detrasescenas.jpg) y Animación (pack/imagenes/SLASHER.jpg).
- Cada tarjeta aplica esquinas de 8px, borde de 1px y sombra suave.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 12 · Contacto · Mensaje de bienvenida y Formulario de contacto
**Tarea:** Desarrollar el encabezado de contacto y el formulario de mensajes en la página Contacto.
**Datos:** brief, sección 9, Página Contacto, Sección Mensaje de bienvenida y Formulario de contacto.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/contacto.astro
**Devuélveme completos:**
- src/components/contacto/FormularioContacto.astro (NUEVO)
- src/pages/contacto.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: título, texto introductorio y formulario con campos apilados verticalmente; computadora: columna izquierda (aprox. 55-60%) con título, texto introductorio y formulario con campos y botón.
**Referencia:** ninguna
**Terminado cuando:**
- Se muestra el título "¡Hablemos!" y el texto introductorio: "Si tienes alguna consulta, un proyecto en mente o simplemente quieres saludar, estaré encantado de leerte.".
- El formulario contiene los campos Nombre, Correo electrónico y Mensaje con etiquetas claras, bordes de 1px (#D8C9C8) y esquinas de 8px.
- El botón "Enviar mensaje" aplica el color de marca #C51F43 con texto en blanco.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 13 · Contacto · Redes sociales
**Tarea:** Construir el bloque lateral de redes sociales y canales de contacto directo en la página Contacto.
**Datos:** brief, sección 9, Página Contacto, Sección Redes sociales.
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/contacto.astro
**Devuélveme completos:**
- src/components/contacto/RedesSociales.astro (NUEVO)
- src/pages/contacto.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: ubicada debajo del formulario, con título y opciones apiladas en lista vertical; computadora: columna derecha (aprox. 40-45%) junto al formulario, con título y opciones en lista vertical con iconos.
**Referencia:** ninguna
**Terminado cuando:**
- Se visualiza el título "También puedes encontrarme en:".
- Se despliegan las tres opciones: Instagram, YouTube y Correo, cada una con su icono correspondiente y enlaces accesibles.
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 14 · Compartido · Pie de página
**Tarea:** Crear el componente global de pie de página e integrarlo en todas las páginas del sitio.
**Datos:** brief, secciones 6 (Mapa del sitio), 7 (Datos de contacto y redes) y 9 (Elemento compartido: Pie de página).
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/index.astro
- src/pages/proyectos.astro
- src/pages/sobre-mi.astro
- src/pages/contacto.astro
**Devuélveme completos:**
- src/components/Pie.astro (NUEVO)
- src/pages/index.astro (REEMPLAZA)
- src/pages/proyectos.astro (REEMPLAZA)
- src/pages/sobre-mi.astro (REEMPLAZA)
- src/pages/contacto.astro (REEMPLAZA)
**Borrar:** nada
**Disposición:** celular: nombre del estudio y elementos de redes/derechos apilados; computadora: nombre del estudio a la izquierda y enlaces/redes a la derecha en fila horizontal.
**Referencia:** ninguna
**Terminado cuando:**
- El pie de página se incluye al final de Inicio, Proyectos, Sobre mí y Contacto.
- Muestra el texto "Sebastián Valdez Studio", enlaces a Instagram, YouTube y Correo, y los derechos de autor con estilo tipográfico en texto suave (#625760).
- Cuenta con un borde superior sutil de 1px (#D8C9C8).
- Se ve bien a 360, 768 y 1280 px, sin scroll horizontal.
- `npm run verificar` termina sin errores.

## Prompt 15 · Revisión final · Verificación responsive, enlaces y accesibilidad
**Tarea:** Efectuar la revisión técnica y visual completa del sitio asegurando la navegación fluida, diseño responsive y accesibilidad sin errores.
**Datos:** brief completo (todas las secciones).
**Pega estos archivos (versión actual, con su ruta):**
- src/pages/index.astro
- src/pages/proyectos.astro
- src/pages/sobre-mi.astro
- src/pages/contacto.astro
- src/components/Encabezado.astro
- src/components/Pie.astro
- src/styles/global.css
**Devuélveme completos:**
- Únicamente los archivos que requieran correcciones puntuales (REEMPLAZA)
**Borrar:** nada
**Terminado cuando:**
- Se verifica en navegador que Inicio, Proyectos, Sobre mí y Contacto se ven impecables a 360, 768 y 1280 px sin desbordamiento horizontal.
- Todas las imágenes disponen de atributo alt descriptivo y se cargan con las dimensiones adecuadas.
- Todos los botones, enlaces del menú y llamadas a la acción responden y dirigen a sus respectivas rutas.
- Los contrastes de color cumplen los ratios WCAG AA.
- `npm run verificar` termina sin errores.
