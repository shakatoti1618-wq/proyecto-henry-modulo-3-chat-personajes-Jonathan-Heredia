Chat de Personajes IA
Descripción del Proyecto

Chat de Personajes IA es una Single Page Application (SPA) desarrollada como Proyecto Integrador del Módulo 3.

La aplicación permite interactuar mediante inteligencia artificial con diferentes personajes ficticios, cada uno con una personalidad única, utilizando la API de Gemini AI para generar respuestas dinámicas y contextuales.

Cada personaje posee configuraciones propias de comportamiento, historial de conversación independiente, imágenes personalizadas, transformaciones visuales y fondos temáticos.

Objetivos del Proyecto
Aplicar los conceptos aprendidos durante el Módulo 3.
Consumir servicios de inteligencia artificial mediante APIs.
Implementar una arquitectura SPA utilizando JavaScript.
Manejar rutas y navegación del lado del cliente.
Aplicar principios de modularización.
Implementar pruebas unitarias.
Desplegar una aplicación funcional en Vercel.
Funcionalidades
Navegación SPA
Home
Chat
About

La navegación se realiza sin recargar la página utilizando JavaScript y History API.

Chat Inteligente

Los usuarios pueden conversar con:

Goku
Kratos
Jefe Maestro

Cada personaje mantiene:

Personalidad propia.
Prompt personalizado.
Temperatura independiente.
Historial de conversación.
Transformaciones

Cada personaje dispone de distintas transformaciones visuales:

Goku
Super Saiyan
Super Saiyan 3
Super Saiyan 4
Kratos
Kratos de Grecia
Kratos Nórdico
Jefe Maestro
Mark IV
Halo Infinite
Fondos Dinámicos

Cada personaje posee un escenario propio:

Goku → Templo
Kratos → Olimpo
Jefe Maestro → Halo
Manejo de Conversaciones
Historial persistente durante la sesión.
Limitación de mensajes enviados al modelo.
Control de errores.
Mensajes de carga mientras la IA responde.
Responsive Design

La aplicación se adapta a:

Computadores
Tablets
Dispositivos móviles
Tecnologías Utilizadas
Frontend
HTML5
CSS3
JavaScript ES Modules
Backend
Vercel Functions
Node.js
Inteligencia Artificial
Gemini AI
@google/genai
Testing
Vitest
Deploy
Vercel
Estructura del Proyecto
proyecto-final/
│
├── api/
│   └── functions.js
│
├── src/
│   ├── app.js
│   ├── ai.js
│   ├── chat.js
│   ├── characters.js
│   ├── utils.js
│   ├── styles.css
│   └── images/
│
├── tests/
│   └── utils.test.js
│
├── index.html
├── package.json
├── vercel.json
└── README.md
Instalación

Clonar el repositorio:

git clone URL_DEL_REPOSITORIO

Ingresar al proyecto:

cd proyecto-final

Instalar dependencias:

npm install

Configurar variable de entorno:

GEMINI_API_KEY=TU_API_KEY

Ejecutar en desarrollo:

npm start

Ejecutar Tests

npm test

Modo ejecución única

npm run test:run

Pruebas Implementadas

Se realizaron pruebas unitarias para:

Validación de mensajes.
Limitación del historial de conversación.
Manejo de errores personalizados.
Autor

Demo

Aplicación desplegada:

https://proyecto-henry-modulo-3-chat-person.vercel.app

Repositorio

Código fuente:

https://github.com/shakatoti1618-wq/proyecto-henry-modulo-3-chat-personajes-Jonathan-Heredia

Despliegue en Vercel
Crear una cuenta en Vercel.
Importar el repositorio desde GitHub.
Ir a Settings → Environment Variables.
Crear la variable:

GEMINI_API_KEY

Asignar como valor la API Key obtenida desde Google AI Studio.
Realizar Deploy.

La aplicación quedará disponible automáticamente.

Obtener una API Key de Gemini
Ingresar a Google AI Studio.
Crear una API Key.
Copiar la clave generada.
Configurar la variable GEMINI_API_KEY en Vercel o en un archivo .env local.
Scripts Disponibles

npm start

Ejecuta el proyecto en modo desarrollo.

npm test

Ejecuta los tests con Vitest.

npm run test

Ejecuta los tests una sola vez.

Estado del Proyecto

Proyecto funcional y desplegado en Vercel.

Incluye:
- Navegación SPA
- Integración con Gemini AI
- Personajes personalizados
- Transformaciones visuales
- Fondos dinámicos
- Historial de conversación
- Tests unitarios
- Diseño responsive

Licencia

Proyecto académico desarrollado con fines educativos.

Jonathan Heredia

Proyecto Integrador Módulo 3

Henry Bootcamp

2026