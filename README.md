#  Cypress E2E Test - E-Commerce Platform

Este repositorio contiene una suite completa de pruebas automatizadas **End-to-End (E2E)** desarrolladas con **Cypress** e **JavaScript**. El objetivo principal es validar los flujos críticos de usuario dentro de una plataforma de comercio electrónico ([Automation Exercise](https://automationexercise.com/)).

---

## 🚀 Cobertura de Pruebas (Test Cases)

La suite cubre los escenarios clave del embudo de conversión de un e-commerce, organizados modularmente dentro de `cypress/e2e/`:

### 🔑 1. Autenticación (`login.cy.js`)
* Validación de inicio de sesión con credenciales válidas.
* Verificación de redirección y elementos del panel de usuario post-login.

### 🔍 2. Búsqueda y Filtrado (`busqueda.cy.js`)
* Búsqueda de productos por palabras clave mediante el buscador principal.
* Filtrado por categorías y subcategorías en el menú lateral.
* Validación de resultados relevantes presentados en pantalla.

### 🛒 3. Carrito de Compras (`carrito.cy.js`)
* Selección y adición de productos al carrito desde el catálogo.
* Verificación de productos listados dentro de la tabla de resumen.
* Eliminación de ítems del carrito y aserción de estado "Carrito Vacío" (`not.exist`).

### 💳 4. Proceso de Compra Completo (`checkout.cy.js`)
* Flujo End-to-End (E2E) completo:
  1. Registro dinámico de usuario único (`Date.now()`).
  2. Selección e incorporación de producto al carrito.
  3. Confirmación de dirección de entrega e ingreso de notas del pedido.
  4. Simulación de pago con tarjeta de crédito.
  5. Aserción final de confirmación de orden (`ORDER PLACED!`).

---

## 🛠️ Tecnologías y Herramientas Utilizadas

* **Framework de Pruebas:** [Cypress](https://www.cypress.io/) (v13+)
* **Lenguaje:** JavaScript (ES6+)
* **Patrones y Buenas Prácticas:** 
  * Selectores robustos (`data-qa`, `IDs`, atributos CSS).
  * Generación de datos de prueba dinámicos.
  * Aserciones explícitas (Chai/Mocha).
  * Manejo de asincronía y timeouts explícitos.

---

## ⚙️ Pre-requisitos e Instalación

Para ejecutar este proyecto de forma local, necesitas contar con [Node.js](https://nodejs.org/) instalado en tu equipo.

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/tu-repositorio.git](https://github.com/TU_USUARIO/tu-repositorio.git)