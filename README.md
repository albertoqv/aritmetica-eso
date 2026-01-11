# ➕➖ Práctica de Enteros (Aritmética ESO)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![PWA](https://img.shields.io/badge/PWA-Offline%20Ready-blueviolet?style=for-the-badge&logo=pwa)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

> **Aplicación educativa interactiva diseñada para practicar el cálculo mental con números enteros (positivos y negativos).** Desarrollada como herramienta de apoyo para el alumnado de 1º de la ESO.

---

<div align="center">

## 🔗 [PROBAR DEMO EN VIVO](https://aritmetica-eso.vercel.app)

![Vista Previa de la App](portada_enlace.png)
*(Interfaz adaptada a Móvil y Escritorio)*

</div>

---

## 🎯 Objetivos Pedagógicos

Esta herramienta no solo evalúa, sino que enseña mediante **feedback formativo**:

* **🧠 Carga Cognitiva Reducida:** Interfaz limpia y sin distracciones que permite al alumno centrarse únicamente en la operación matemática.
* **🔄 Concepto de Opuesto:** Refuerzo de la resta explicada como "la suma del opuesto".
* **✖️ Regla de los Signos:** Práctica intensiva para la automatización de la multiplicación y división.

## ✨ Características Principales

### ⚙️ El Algoritmo
* **Generación Infinita:** Ejercicios ilimitados creados aleatoriamente en el momento.
* **Optimización Didáctica:** Reducción drástica de la aparición del cero y del uno para maximizar la práctica útil.
* **Divisiones Exactas:** El sistema garantiza que las divisiones siempre den un número entero.
* **Signo Explícito:** Resultados mostrados siempre con signo (ej: `+5` en lugar de `5`) para reforzar el concepto.

### 🛡️ Sistema de Errores y Feedback
* **Distractores Inteligentes:** Las opciones incorrectas no son al azar; se generan basándose en los fallos comunes de los estudiantes (fallos de signo, fallos de cálculo cercano).
* **Explicación Inmediata:** Si el alumno falla, una ventana modal explica paso a paso por qué es incorrecto.
* **Historial:** Visualización de la operación anterior para facilitar la corrección en el cuaderno.

## 💻 Aspectos Técnicos

Este proyecto destaca por ser **ligero, rápido y funcionar sin internet**:

| Característica | Descripción |
| :--- | :--- |
| **Offline First (Service Worker)** | Gracias a la implementación de un Service Worker (`sw.js`), la aplicación **funciona sin conexión a internet** una vez cargada por primera vez. |
| **PWA (Progressive Web App)** | Instalable en móviles Android e iOS. Cuenta con `manifest.json` para ejecutarse a pantalla completa como una app nativa. |
| **Zero Dependencies** | Construida con **Vanilla JavaScript** puro. Sin frameworks ni librerías pesadas. Rendimiento máximo en dispositivos antiguos. |
| **Web Audio API** | Efectos de sonido sintetizados matemáticamente en tiempo real (osciladores) para no depender de archivos mp3 externos. |

## 🚀 Cómo usar

1.  **Acceso:** Entra en [aritmetica-eso.vercel.app](https://aritmetica-eso.vercel.app).
2.  **Modo:** Selecciona el tipo de operación (Suma, Resta, Multiplicación, División o Mix Aleatorio).
3.  **Instalación (Recomendado):**
    * **Android:** Pulsa el botón "📲 Instalar App" del menú principal.
    * **iOS (iPhone/iPad):** Pulsa el botón "📲 Instalar App" y sigue las instrucciones (Compartir -> Añadir a inicio).

## 🛠️ Instalación Local (Para desarrolladores)

Si quieres ver el código o modificarlo:

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/albertoqv/aritmetica-eso.git](https://github.com/albertoqv/aritmetica-eso.git)
    ```
2.  Abre el archivo `index.html` en tu navegador.

## 📄 Licencia y Autoría

**Autor:** Alberto Quesada Valle.

Este proyecto fue desarrollado como recurso educativo para el refuerzo de matemáticas en 1º ESO.
Distribuido bajo la **Licencia MIT**. Eres libre de usarlo, modificarlo y compartirlo en tus clases.

---
*Hecho con ❤️ y Matemáticas.*
