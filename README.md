# Mi sitio: paquete de inicio

Astro 7 + Tailwind CSS 4 + Motion 14, con estilo brutalista, tipografías locales y un agente (Cline) que ya sabe cómo trabajar en este proyecto.

## Qué necesitas instalar (desde una computadora vacía)

| #   | Programa                        | Para qué                                   | Dónde                              |
| --- | ------------------------------- | ------------------------------------------ | ---------------------------------- |
| 1   | **Google Chrome** (o Edge)      | Ver tu sitio y crear las cuentas           | https://www.google.com/chrome      |
| 2   | **Visual Studio Code**          | Editor de código                           | https://code.visualstudio.com      |
| 3   | **Node.js LTS** (incluye `npm`) | Ejecutar Astro e instalar paquetes         | https://nodejs.org (botón **LTS**) |
| 4   | **Git**                         | Puntos de restauración (deshacer) de Cline | https://git-scm.com/downloads      |

Funciona con Node 22, 24 o 26: descarga la que diga **LTS**. En Mac, Git se instala solo: la primera vez que escribas `git` en la terminal, macOS ofrece instalar las "herramientas de línea de comandos"; acepta. No hace falta Homebrew ni gestores de versiones de Node (nvm, fnm).

**Extensiones de VS Code.** Al abrir esta carpeta, VS Code te ofrecerá instalarlas (botón **Install**). Si no aparece el aviso, búscalas en el panel de extensiones (`Ctrl+Shift+X` / `Cmd+Shift+X`):

- **Cline**: el agente de IA.
- **Astro**: colores y autocompletado para archivos `.astro`.
- **Tailwind CSS IntelliSense**: autocompletado de clases y colores del proyecto.
- **Prettier**: ordena el código al guardar.

**Cuentas gratuitas:** NVIDIA (https://build.nvidia.com, pide verificar tu celular) y Google (https://aistudio.google.com) como respaldo.

**Paquetes del proyecto.** No se instalan a mano: `npm install` los descarga todos.

| Paquete                                                            | Para qué                                          |
| ------------------------------------------------------------------ | ------------------------------------------------- |
| `astro`                                                            | Arma el sitio a partir de componentes             |
| `tailwindcss`, `@tailwindcss/vite`                                 | Estilos con clases                                |
| `motion`                                                           | Animaciones                                       |
| `prettier`, `prettier-plugin-astro`, `prettier-plugin-tailwindcss` | Formato automático del código (y orden de clases) |
| `@astrojs/check`, `typescript`                                     | Detectar errores antes de publicar                |

## 0. Instalar Node.js

Abre una terminal (en VS Code: menú **Terminal > New Terminal**) y escribe:

```bash
node -v
```

Si aparece `v22.12.0` o un número mayor, pasa al paso 1. Si dice que `node` no se reconoce, instálalo:

**Opción A: tu propia computadora**

1. Entra a https://nodejs.org y descarga la versión **LTS**.
2. Ejecuta el instalador con las opciones por defecto.
3. Cierra y vuelve a abrir VS Code (si no, la terminal no ve Node).
4. Comprueba con `node -v`.

**Opción B: computadora de la universidad (sin permisos de administrador)**

1. En https://nodejs.org, sección de descargas, baja el **.zip** de Windows (LTS, 64 bits), no el instalador `.msi`.
2. Descomprímelo en una carpeta tuya, por ejemplo `C:\Users\TU_USUARIO\node`. Dentro debe estar `node.exe`.
3. En la terminal de VS Code (PowerShell), cambiando la ruta por la tuya:

   ```powershell
   $env:Path = "C:\Users\TU_USUARIO\node;" + $env:Path
   ```

4. Comprueba con `node -v` y `npm -v`.

Esto dura mientras esa terminal esté abierta. Si abres otra, repite el paso 3.

**Si `npm` dice "la ejecución de scripts está deshabilitada"** (pasa mucho en Windows):

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## 1. Abrir el proyecto

1. Guarda la carpeta del proyecto en una ruta **corta, sin espacios ni tildes y fuera de OneDrive**. Por ejemplo `C:\proyectos\mi-sitio` o `Documentos/proyectos/mi-sitio`.
2. En VS Code: **File > Open Folder** y elige **la carpeta del proyecto** (la que contiene `package.json`), no una carpeta superior.
3. Si pregunta _"Do you trust the authors?"_, responde **Yes, I trust**.
4. Instala las extensiones recomendadas cuando VS Code lo ofrezca.

## 2. Arrancar el sitio

```bash
npm install     # descarga los paquetes (solo la primera vez)
npm run dev     # abre el sitio en http://localhost:4321
```

Abre http://localhost:4321 en Chrome. Si ves **"Plantilla lista"** con el fondo hueso, el resaltado amarillo y las tarjetas aparecen al bajar, tu entorno funciona.

Deja esa terminal abierta mientras trabajas. Los avisos amarillos `npm warn` se pueden ignorar; preocúpate solo si ves `npm error`.

## 3. Conseguir la API key de NVIDIA

1. Crea tu cuenta en https://build.nvidia.com y verifica tu correo.
2. Cuando te pida un nombre de "Cloud Account", escribe `UIDE-NombreApellido`.
3. Verifica tu celular (Ecuador: +593, sin el 0 inicial).
4. Menú de tu perfil (arriba a la derecha) > **API Keys** > **Generate API Key** > expiración **12 months** > **Generate Key**.
5. **Copia la key y guárdala en ese momento: no se vuelve a mostrar.** Empieza con `nvapi-`.

Nunca subas tu key a GitHub ni la compartas.

## 4. Configurar Cline

1. Abre Cline (ícono del robot en la barra izquierda).
2. Recomendado: clic derecho en el ícono > **Move To** > **Secondary Side Bar**. Así tienes los archivos a la izquierda y Cline a la derecha.
3. En "How will you use Cline?" elige **Bring my own API key** (no "Absolutely Free") > **Continue**.
4. **API Provider:** `OpenAI Compatible`. Si aparece el banner de ClinePass, ciérralo.
5. Llena solo estos tres campos; deja todo lo demás como está:
   - **Base URL:** `https://integrate.api.nvidia.com/v1`
   - **API Key:** tu key `nvapi-...`
   - **Model ID:** `z-ai/glm-5.3`
6. **Continue**.

Para usar otro modelo de NVIDIA, copia su ID desde el código de ejemplo de su página (`model="..."`).
**No lo copies de la barra de direcciones**: ahí aparece con guiones (`glm-5-3`) y no funciona.

## 5. Plan B: Google Gemini

Usa Gemini si Cline muestra **"Retries exhausted"**, varios errores **429** seguidos, o se queda pensando más de dos minutos.

1. En https://aistudio.google.com crea una API key.
2. En Cline (engranaje ⚙️) > **API Provider:** Gemini > pega la key.
3. Modelo: `gemini-3.5-flash-lite`.

## 6. Probar el agente

Con `npm run dev` corriendo, escribe en Cline (modo **Act**):

> Cambia el título de la página a mi nombre.

El título aparece en la **pestaña** del navegador. Si cambió, estás listo.

## Comandos

| Comando             | Qué hace                                                        |
| ------------------- | --------------------------------------------------------------- |
| `npm run dev`       | Sitio en vivo en http://localhost:4321                          |
| `npm run verificar` | Formatea el código, busca errores y compila (úsalo al terminar) |
| `npm run build`     | Genera la versión final en `dist/`                              |
| `npm run preview`   | Muestra la versión final de `dist/`                             |

## Formato automático: Prettier con Astro

Al guardar (`Ctrl+S` / `Cmd+S`), Prettier ordena la sangría y las clases de Tailwind. Con archivos `.astro` no funciona "de fábrica": hacen falta **tres piezas**, y las tres ya vienen en esta plantilla.

1. **Los paquetes** (en `package.json`): `prettier`, `prettier-plugin-astro` y `prettier-plugin-tailwindcss`. Se instalan con `npm install`.
2. **La configuración de Prettier** (`.prettierrc.json`): carga los dos plugins y le dice que los `.astro` se leen con el parser de Astro.

   ```json
   {
     "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
     "overrides": [{ "files": "*.astro", "options": { "parser": "astro" } }]
   }
   ```

3. **El truco en VS Code** (`.vscode/settings.json`): la extensión de Prettier ignora los `.astro` si no se lo pides explícitamente.

   ```json
   {
     "editor.formatOnSave": true,
     "prettier.documentSelectors": ["**/*.astro"],
     "[astro]": { "editor.defaultFormatter": "esbenp.prettier-vscode" }
   }
   ```

**Si al guardar no se formatea:** revisa que hiciste `npm install` (la extensión usa los plugins de `node_modules`) y recarga VS Code con `Ctrl+Shift+P` / `Cmd+Shift+P` > **Developer: Reload Window**. Si sigue sin funcionar, mira **View > Output > Prettier**.

## Estructura

```
src/
├─ pages/index.astro        página: solo ordena secciones
├─ layouts/Layout.astro     <head>, encabezado, pie
├─ components/              una sección = un componente
│  └─ ui/                   piezas reutilizables (Boton, Seccion)
├─ assets/                  tus fotos e imágenes (aquí va mi-foto.jpg)
├─ scripts/animaciones.ts   animaciones con Motion
└─ styles/global.css        colores, tipografías y sombras (tokens)
public/
└─ fonts/                   tipografías locales (.woff2)
```

## Reglas para el agente

Las instrucciones que sigue Cline están en `.clinerules/`. No las borres: le dicen qué tecnologías usar, dónde va cada cosa y cómo trabajar.
