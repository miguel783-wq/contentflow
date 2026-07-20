# ContentFlow

ContentFlow es una aplicación web para gestionar contenido de redes sociales. Permite organizar publicaciones, guardar ideas, visualizar un calendario editorial y controlar el flujo de trabajo de una estrategia digital.

Este proyecto fue desarrollado como parte de mi portafolio personal, con el objetivo de practicar desarrollo frontend, rutas, manejo de estado, almacenamiento local y diseño de interfaces modernas.

## Demo

Proyecto desplegado en Vercel:

https://contentflow-blue.vercel.app

## Funcionalidades

- Página principal profesional.
- Dashboard con estadísticas dinámicas.
- Gestión de publicaciones.
- Creación de nuevas publicaciones.
- Eliminación de publicaciones guardadas.
- Calendario editorial dinámico.
- Banco de ideas creativas.
- Estados de contenido: Idea, Borrador, Programado y Publicado.
- Almacenamiento local con localStorage.
- Diseño responsive.
- Interfaz moderna en modo oscuro.

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- LocalStorage
- Git
- GitHub
- Vercel

## Páginas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Página principal del proyecto |
| `/dashboard` | Panel con estadísticas y resumen |
| `/posts` | Lista de publicaciones |
| `/posts/new` | Formulario para crear publicación |
| `/calendar` | Calendario editorial |
| `/ideas` | Banco de ideas creativas |

## Cómo ejecutar el proyecto

Instalar dependencias:

```bash
npm install
```

Ejecutar en modo desarrollo:

```bash
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:3000
```

Crear versión de producción:

```bash
npm run build
```

## Qué aprendí con este proyecto

Durante el desarrollo de ContentFlow practiqué:

- Creación de rutas con App Router.
- Componentes en React.
- Uso de TypeScript para tipar datos.
- Manejo de formularios.
- Uso de useState y useEffect.
- Guardado y lectura de datos con localStorage.
- Diseño de interfaces con Tailwind CSS.
- Organización de carpetas en un proyecto real.
- Preparación de un proyecto para portafolio.
- Despliegue en Vercel.

## Mejoras futuras

- Agregar autenticación de usuarios.
- Conectar con Supabase.
- Guardar publicaciones en una base de datos real.
- Permitir edición de publicaciones.
- Agregar filtros por plataforma y estado.
- Agregar subida de imágenes.
- Crear vista mensual del calendario.
- Integrar generación de ideas con inteligencia artificial.

## Estado del proyecto

Versión MVP funcional terminada.

El proyecto permite crear, guardar, visualizar, eliminar y organizar publicaciones de redes sociales usando almacenamiento local.