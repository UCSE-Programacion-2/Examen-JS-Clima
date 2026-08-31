# 🌦️ Examen de JavaScript en Frontend

## 📝 Introducción

El objetivo de este repaso de examen es desarrollar una aplicación web de consulta de clima utilizando HTML, CSS y JavaScript. Este repositorio contiene los archivos `index.html`, `clima.html` y `datos.json`. Deberás crear los archivos JavaScript necesarios para dinamizar las páginas y cumplir con los requerimientos funcionales.

## 📂 Archivos proporcionados

- **index.html:** Página principal donde el usuario seleccionará una ciudad para consultar el clima.
- **clima.html:** Página que mostrará el clima de la ciudad seleccionada y un historial de consultas.
- **datos.json:** Archivo JSON que contiene los datos de clima de diversas ciudades.

## ✅ Tareas a realizar

### 1. Crear el archivo `index.js`

Este archivo manejará la lógica de la página `index.html`.

#### Instrucciones:

1. **Cargar opciones en el selector de ciudades:**
    - Leer el archivo `datos.json`.
    - Llenar el selector de ciudades con los datos correspondientes.

2. **Manejar el envío del formulario:**
    - Al hacer clic en el botón "Consultar Clima", guardar la ciudad seleccionada en el `localStorage` y redirigir a la página `clima.html`.

### 2. Crear el archivo `clima.js`

Este archivo manejará la lógica de la página `clima.html`.

#### Instrucciones:

1. **Mostrar clima de la ciudad seleccionada:**
    - Leer la ciudad seleccionada del `localStorage`.
    - Mostrar el clima de la ciudad en una tabla.

2. **Mostrar historial de consultas:**
    - Leer el historial de consultas guardado en el `localStorage`.
    - Mostrar las consultas en una lista.

3. **Limpiar historial de consultas:**
    - Añadir un botón para limpiar el historial de consultas.
    - Al hacer clic en el botón, limpiar el `localStorage` y actualizar la lista.

## 📋 Requerimientos funcionales

### index.html
- **Selector de ciudades:** El selector debe llenarse dinámicamente con los datos del archivo `datos.json`.
- **Enviar formulario:** Al hacer clic en "Consultar Clima", la ciudad seleccionada debe guardarse en el `localStorage` y el usuario debe ser redirigido a `clima.html`.

### clima.html
- **Mostrar clima:** Mostrar el clima de la ciudad seleccionada en una tabla.
- **Mostrar historial de consultas:** Mostrar las consultas guardadas en el `localStorage` en una lista.
- **Limpiar historial:** Debe haber un botón para limpiar el historial de consultas.

## 🚀 Guía de implementación

### Paso 1: Cargar datos en el selector de ciudades

1. Crear una función para leer el archivo `datos.json`.
2. Llenar el selector de ciudades con los datos del JSON.

### Paso 2: Manejar el envío del formulario

1. Crear una función para manejar el evento de envío del formulario.
2. Guardar la ciudad seleccionada en el `localStorage`.
3. Redirigir al usuario a `clima.html` después de guardar la ciudad seleccionada.

### Paso 3: Mostrar clima de la ciudad seleccionada

1. Leer la ciudad seleccionada del `localStorage`.
2. Mostrar el clima de la ciudad en una tabla en `clima.html`.

### Paso 4: Mostrar historial de consultas

1. Leer las consultas guardadas en el `localStorage`.
2. Mostrar las consultas en una lista en `clima.html`.

### Paso 5: Limpiar historial de consultas

1. Añadir un botón para limpiar el historial de consultas.
2. Al hacer clic en el botón, limpiar el `localStorage` y actualizar la lista.

## 🧪 Evaluación

Se evaluará la correcta implementación de las funcionalidades descritas, la limpieza y organización del código, y el manejo adecuado de eventos y almacenamiento local en JavaScript.
