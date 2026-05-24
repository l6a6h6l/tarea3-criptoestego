# Criptologia vs Esteganografia - Tarea 3 MACS0530

> Sitio web interactivo desarrollado como entregable de la **Tarea 3** del curso
> **MACS0530 - Tecnicas de Ciberdefensa y Ciberataque** de la
> **Maestria en Ciberseguridad (MACS)** de la **Universidad de Especialidades
> Espiritu Santo (UEES)**, dictado por el Dr. Jorge Luis Zambrano Martinez, Ph.D.

En lugar de un Canva/PowerPoint estandar, este grupo entrego un sitio web
desplegado en Netlify con:

- Portada virtual con datos del curso y del equipo.
- Definicion y fundamentos teoricos.
- Comparativa de 9 dimensiones con vista alternable.
- **Demo LSB interactivo en vivo** (escribi un mensaje y mira como se modifican los bits).
- Casos de uso reales (criptografia y esteganografia legitimas).
- **Timeline filtrable de stegomalware documentado** (Duqu, ZeusVM, Stegano EK, Turla, MontysThree, Worok, Witchetty, Lumma...).
- Resiliencia ante ataques (criptoanalisis, estegoanalisis, amenaza cuantica).
- **Cuenta regresiva en tiempo real a CNSA 2.0 (1 enero 2030)**.
- Diagrama de cascada cripto + estego con esquemas hibridos documentados.
- Conclusion grupal y lineas de investigacion para LATAM/Ecuador.
- 40 referencias APA 7 buscables y copiables al portapapeles.

## Stack

- **React 18** + **Vite 6**
- **Tailwind CSS 3**
- **lucide-react** (iconografia)
- Sin router, sin librerias de animacion pesadas.
- Single page, scroll fluido, responsive (mobile-first).

## Correr en local

```powershell
cd C:\Proyectos\tarea3-criptoestego
npm install
npm run dev
# abrir http://localhost:5173
```

Build de produccion:

```powershell
npm run build
npm run preview
```

## Editar contenido

Toda la informacion textual del sitio vive en un solo archivo:

```
src/data.js
```

Que incluye:

- `courseInfo` - portada (universidad, profesor, fecha, equipo, repo, PDF).
- `tldr` - resumen ejecutivo para el hero.
- `foundations` - definiciones, etimologia, modelos teoricos, taxonomia.
- `comparisonTable` - 9 dimensiones cripto vs estego.
- `useCases` - casos legitimos.
- `stegomalwareTimeline` - 12 casos documentados de stegomalware.
- `attacks` - criptoanalisis, amenaza cuantica, estegoanalisis, investigacion LATAM.
- `hybrid` - cascada, esquemas, metricas, aplicaciones.
- `conclusion` - tesis, recomendacion y lineas LATAM.
- `referencias` - 40 entradas APA 7 con DOI/URL/tags.

> **Para entregar:** completar el array `courseInfo.team` con los 5 integrantes reales.

## Despliegue en Netlify

### Opcion A - Drag & drop (mas rapido)

1. `npm run build`
2. Entrar a https://app.netlify.com/drop
3. Arrastrar la carpeta `dist/` generada.
4. Listo, Netlify devuelve una URL publica.

### Opcion B - Conectar el repo (recomendado)

1. Subir este proyecto a GitHub.
2. En Netlify: **Add new site** -> **Import from Git** -> conectar el repo.
3. Netlify detecta `netlify.toml` automaticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
4. Deploy automatico en cada push.

### Custom domain (opcional)

`Site settings` -> `Domain management` -> `Add custom domain`. Netlify
emite el certificado Let's Encrypt automaticamente.

## Estructura del proyecto

```
tarea3-criptoestego/
├── index.html
├── netlify.toml
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data.js
    └── components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── Foundations.jsx
        ├── Comparison.jsx
        ├── LSBDemo.jsx
        ├── Cases.jsx
        ├── Timeline.jsx
        ├── Attacks.jsx
        ├── QuantumCountdown.jsx
        ├── Hybrid.jsx
        ├── Conclusion.jsx
        ├── References.jsx
        └── Footer.jsx
```

## Cumplimiento de los 5 puntos del entregable

| Punto | Donde se cubre en el sitio |
|------|---------------------------|
| 1. Definicion y fundamentos teoricos | Seccion **Fundamentos** + Hero |
| 2. Ventajas y desventajas | Seccion **Comparativa** (9 dimensiones) |
| 3. Casos de uso reales o hipoteticos | Seccion **Casos** + **Timeline** |
| 4. Resiliencia ante ataques | Seccion **Ataques** + **Cuantica** |
| 5. Integracion para soluciones hibridas | Seccion **Hibrido** |

Mas: **Portada**, **Conclusion grupal** y **Referencias APA 7**.

## Creditos

- **Asignatura**: MACS0530 - Tecnicas de Ciberdefensa y Ciberataque
- **Programa**: Maestria en Ciberseguridad (MACS)
- **Universidad**: Universidad de Especialidades Espiritu Santo (UEES)
- **Profesor**: Dr. Jorge Luis Zambrano Martinez, Ph.D.
- **Fecha**: Mayo 2026 - Samborondon, Ecuador

## Disclaimer

Este proyecto es estrictamente academico. No incluye material malicioso ni
herramientas ofensivas funcionales. Las descripciones de stegomalware son
referencias publicas a investigaciones de firmas como Kaspersky, ESET,
Symantec, Dell SecureWorks y Malwarebytes. Toda referencia en APA 7.
