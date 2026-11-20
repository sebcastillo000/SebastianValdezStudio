/*
  Animaciones del sitio con Motion.
  Los componentes no importan Motion: solo añaden un atributo al HTML.

    data-revelar           -> el elemento aparece al entrar en pantalla
    data-revelar-cascada   -> sus hijos aparecen uno tras otro

  Cada animación ocurre una sola vez y se desactiva si el usuario
  pidió menos movimiento en su sistema (prefers-reduced-motion).
*/

import { animate, inView, stagger } from "motion";

const DESPLAZAMIENTO = 24; // píxeles que sube el elemento al aparecer

export function iniciarAnimaciones(): void {
  const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  iniciarAbanico(reducirMovimiento);

  if (reducirMovimiento) return;

  document.querySelectorAll<HTMLElement>("[data-revelar]").forEach((elemento) => {
    inView(
      elemento,
      () => {
        animate(
          elemento,
          { opacity: [0, 1], y: [DESPLAZAMIENTO, 0] },
          { duration: 0.6, ease: "easeOut" },
        );
      },
      { amount: 0.3 },
    );
  });

  document.querySelectorAll<HTMLElement>("[data-revelar-cascada]").forEach((grupo) => {
    const hijos = Array.from(grupo.children) as HTMLElement[];
    inView(
      grupo,
      () => {
        animate(
          hijos,
          { opacity: [0, 1], y: [DESPLAZAMIENTO, 0] },
          { duration: 0.5, ease: "easeOut", delay: stagger(0.12) },
        );
      },
      { amount: 0.2 },
    );
  });
}

/*
  Abanico de imágenes ligado al scroll.

    data-abanico          -> contenedor (el "escenario")
    data-abanico-carta    -> cada imagen dentro del escenario

  Las cartas empiezan apiladas y algo giradas en el centro. A medida que
  el escenario sube por la pantalla, se separan hasta quedar en fila
  (computadora) o en cuadrícula 2x2 (celular). Si el usuario baja y
  vuelve a subir, el efecto se deshace: sigue al scroll.
  Con prefers-reduced-motion las cartas aparecen ya separadas, sin moverse.
*/

// Posición apilada: pequeños desfases y giros, como un mazo de fotos.
const APILADO = [
  { x: -6, y: 2, rotate: -9 },
  { x: 4, y: -3, rotate: 6 },
  { x: -3, y: 1, rotate: -3 },
  { x: 7, y: -1, rotate: 10 },
];

// Posición final en computadora: una fila de 4 (en % del ancho de cada carta).
const FILA = [
  { x: -159, y: 0, rotate: -5 },
  { x: -53, y: 4, rotate: 2 },
  { x: 53, y: -2, rotate: -2 },
  { x: 159, y: 3, rotate: 5 },
];

// Posición final en celular: cuadrícula de 2x2.
const CUADRICULA = [
  { x: -55, y: -54, rotate: -4 },
  { x: 55, y: -52, rotate: 3 },
  { x: -55, y: 54, rotate: 3 },
  { x: 55, y: 52, rotate: -4 },
];

function iniciarAbanico(reducirMovimiento: boolean): void {
  const escenarios = document.querySelectorAll<HTMLElement>("[data-abanico]");
  if (escenarios.length === 0) return;

  const pantallaAncha = window.matchMedia("(min-width: 768px)");

  // Mezcla dos números: progreso 0 = a, progreso 1 = b.
  const mezclar = (a: number, b: number, p: number) => a + (b - a) * p;

  // Suaviza el movimiento: arranca rápido y frena al final.
  const suavizar = (p: number) => 1 - Math.pow(1 - p, 3);

  const dibujar = () => {
    const destino = pantallaAncha.matches ? FILA : CUADRICULA;
    const alto = window.innerHeight;

    escenarios.forEach((escenario) => {
      // Progreso: 0 cuando el escenario asoma por abajo de la pantalla,
      // 1 cuando ya se ve entero (su borde inferior llega al 85% de la pantalla).
      // Así el efecto termina aunque la sección esté al final de la página.
      const caja = escenario.getBoundingClientRect();
      const recorrido = caja.height + alto * 0.15;
      const avance = (alto - caja.top) / recorrido;
      const p = reducirMovimiento ? 1 : suavizar(Math.min(Math.max(avance, 0), 1));

      escenario.querySelectorAll<HTMLElement>("[data-abanico-carta]").forEach((carta, i) => {
        const inicio = APILADO[i % APILADO.length];
        const fin = destino[i % destino.length];

        const x = mezclar(inicio.x, fin.x, p);
        const y = mezclar(inicio.y, fin.y, p);
        const giro = mezclar(inicio.rotate, fin.rotate, p);
        const escala = mezclar(0.85, 1, p);

        // translate(-50%, -50%) centra la carta; luego se mueve, gira y crece.
        carta.style.transform = `translate(-50%, -50%) translate(${x}%, ${y}%) rotate(${giro}deg) scale(${escala})`;
      });
    });
  };

  // Redibujamos como máximo una vez por fotograma mientras se hace scroll.
  let pendiente = false;
  const pedirDibujo = () => {
    if (pendiente) return;
    pendiente = true;
    requestAnimationFrame(() => {
      pendiente = false;
      dibujar();
    });
  };

  dibujar();
  pantallaAncha.addEventListener("change", dibujar);
  window.addEventListener("resize", pedirDibujo);
  if (!reducirMovimiento) {
    window.addEventListener("scroll", pedirDibujo, { passive: true });
  }
}
