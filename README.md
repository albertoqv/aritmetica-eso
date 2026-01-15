# ➕➖ Práctica de Enteros (Aritmética ESO)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-blueviolet?style=for-the-badge&logo=pwa)
![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg?style=for-the-badge)

> **Aplicación educativa interactiva y gamificada diseñada para practicar el cálculo mental con números enteros.** Desarrollada como herramienta de apoyo para el alumnado de 1º de la ESO.

---

<div align="center">

## 🔗 [PROBAR DEMO EN VIVO](https://aritmetica-eso.vercel.app)

![Vista Previa de la App](portada_enlace.png)
*(Interfaz adaptada a Móvil y Escritorio con diseño de alta visibilidad)*

</div>

---

## 🎯 Objetivos Pedagógicos

Esta herramienta no solo evalúa, sino que enseña mediante **feedback formativo**:

* **🧠 Carga Cognitiva Optimizada:** Interfaz limpia y elementos de gran tamaño para evitar distracciones.
* **⚡ Jerarquía de Operaciones (PEMDAS):** Modo específico para practicar la prioridad de la multiplicación y división sobre la suma y resta.
* **🔄 Concepto de Opuesto:** Refuerzo de la resta explicada como "la suma del opuesto".
* **✖️ Regla de los Signos:** Práctica intensiva para la automatización de la multiplicación y división.

## ✨ Características Principales

### 🎮 Gamificación y Motivación 
* **🔥 Sistema de Rachas:** Contador de aciertos consecutivos en tiempo real con animaciones de fuego para motivar al alumno.
* **🏆 Récord Personal:** El juego guarda automáticamente la mejor puntuación en la memoria del dispositivo.
* **⚡ Feedback Sensorial:** Destellos visuales (pantalla verde al acertar, roja al fallar) y efectos de sonido generados en tiempo real.

### ⚙️ El Algoritmo Didáctico
* **Generación Infinita:** Ejercicios ilimitados creados aleatoriamente.
* **Nivel Adaptativo en Divisiones:** El sistema alterna entre divisiones básicas (tablas de multiplicar) y divisiones con números más altos (hasta 180), garantizando siempre resultados exactos.
* **Operaciones Combinadas Inteligentes:** Genera 5 tipos de estructuras clave (Producto+Suma, Suma+Producto, Cadenas, etc.) utilizando números controlados para que el alumno se centre en la jerarquía y los signos.
* **Modo "Clean" (Sin Paréntesis):** Interruptor opcional para ocultar paréntesis redundantes (ej: mostrar `-5` en lugar de `(-5)` al inicio), permitiendo adaptar la dificultad visual.

### 🛡️ Sistema de Errores
* **Distractores Inteligentes:** Las opciones incorrectas se generan basándose en los fallos comunes (error de signo, error de cálculo cercano).
* **Soluciones Paso a Paso:** En el modo "Combinadas", la ventana de error no solo da la solución, sino que **resuelve la operación paso a paso** para mostrar dónde se aplicó mal la jerarquía.
* **Historial:** Visualización de la operación anterior en la parte inferior.

## 💻 Aspectos Técnicos

Este proyecto destaca por ser **ligero, rápido y funcionar sin internet**:

| Característica | Descripción |
| :--- | :--- |
| **Estrategia "Network First"** | El Service Worker intenta descargar siempre la última versión si hay conexión. Si no hay internet, recurre automáticamente a la caché (Offline). |
| **Persistencia de Datos** | Uso de `localStorage` para guardar el récord personal y la preferencia del "Modo Clean". |
| **PWA (Progressive Web App)** | Instalable en móviles Android e iOS. Cuenta con `manifest.json` y modales de instrucciones personalizados por S.O. |
| **Zero Dependencies** | Construida con **Vanilla JavaScript** puro. Sin frameworks ni librerías pesadas. |
| **Web Audio API** | Efectos de sonido sintetizados matemáticamente en tiempo real (osciladores) para no depender de archivos mp3 externos. |

## 🚀 Cómo usar

1.  **Acceso:** Entra en [aritmetica-eso.vercel.app](https://aritmetica-eso.vercel.app).
2.  **Configuración:** Activa o desactiva el interruptor "Sin Paréntesis" según el nivel de tus alumnos.
3.  **Modo:** Selecciona Suma, Resta, Multiplicación, División, Combinadas o Mix.
4.  **Instalación (Recomendado):**
    * **Android:** Pulsa el botón "📲 Instalar App" del menú principal.
    * **iOS (iPhone/iPad):** Pulsa el botón "📲 Instalar App" y sigue las instrucciones (Compartir -> Añadir a inicio).

## 🛠️ Instalación Local (Para desarrolladores)

Si quieres ver el código o modificarlo:

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/albertoqv/aritmetica-eso.git](https://github.com/albertoqv/aritmetica-eso.git)
    ```
2.  Abre el archivo `index.html` en tu navegador. ¡No requiere instalación de servidores ni `npm install`!

## 📄 Licencia y Autoría

**Autor:** Alberto Quesada Valle.

Este proyecto es un Recurso Educativo Abierto (REA).
Distribuido bajo licencia **Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0)**.
Eres libre de usarlo y adaptarlo en tus clases, siempre que no sea con fines comerciales y compartas las mejoras.
---
*Hecho con ❤️ y Matemáticas.*
