# Astronomía – Aplicación Web Personal
### *Proyecto Final – Desarrollo Web*

---

## **Descripción del proyecto**

Aplicación web académica orientada a la **divulgación de contenidos básicos de astronomía**.  
El sistema permite a los usuarios explorar información sobre la historia de la astronomía, los planetas del sistema solar, visualizar una galería temática y enviar mensajes mediante un formulario de contacto.

La aplicación integra **frontend y backend**, utilizando tecnologías web básicas y un servidor en **Python puro**, sin frameworks.

---

##  **Objetivo**

Desarrollar una aplicación web funcional aplicando conocimientos de  
**HTML, CSS, JavaScript y Python**, implementando navegación entre páginas, interactividad y manejo manual de peticiones HTTP.

---

## **Tecnologías utilizadas**

- **HTML5**
- **CSS3**
- **JavaScript**
- **Python 3**
- **http.server** (Python estándar)
- **Git y GitHub**

---

## **Páginas del sistema**

1. **index.html** – Página principal y presentación  
2. **historia.html** – Historia de la astronomía  
3. **planetas.html** – Información de los planetas  
4. **galeria.html** – Galería de imágenes  
5. **contacto.html** – Formulario de contacto  

---

## **Backend en Python**

El backend está desarrollado usando **Python puro** con el módulo estándar `http.server`.

### Funcionalidades:
- Manejo manual de rutas **GET** para archivos HTML, CSS, JS e imágenes
- Manejo de ruta **POST `/contacto`**
- Recepción y procesamiento manual de datos enviados desde el formulario
- Respuesta directa del servidor al cliente

---

## **Ejecución del proyecto**

### 1️⃣ Requisitos
- Python 3.10 o superior
- Navegador web moderno
- Visual Studio Code (recomendado)

---

### 2️⃣ Ejecutar el servidor

Desde la carpeta raíz del proyecto, ejecutar:

```bash
python server.py
