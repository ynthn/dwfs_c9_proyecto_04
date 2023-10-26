# PROYECTO 4: Aplicación "Restaurante"


## Índice
* [1. Introducción](#1-introducción)
* [2. Tecnologías utilizadas](#2-tecnologías-utilizadas)
* [3. Prototipo](#3-prototipo)
* [4. Descripción del proyecto](#4-descripción-del-proyecto)

## 1. Introducción
Construir una aplicación web para un restaurante con las siguiente funcionalidades:
* -Sección principal con la información del restaurante
* -Formulario de contacto
* -Datos de ubicación y contacto
* -Componente de reservar una mesa con hora y fecha especifica
* -Componente que incluya el menu completo del restaurante
* -Link: 


## 2. Tecnologías utilizadas
* -HTML 5
* -CSS
* -REACT BOOTSTRAP
* -JAVASCRIPT
* -GIT/GITHUB
* -NODE.JS (Entorno controlado por eventos diseñado para crear aplicaciones escalables)
* -NPM (gestor de paquetes de NODE.JS, entorno de ejecución de JavaScript)
* -REACT (Librería JavaScript para crear interfaces de usuarios)
* -VITE (Herramienta de compilación)
* -FIREBASE DATABASE (BD NoSQL)
* -DEPLOY en NETLIFY
* -PROTOTIPADO con la herramienta proto.io
* -IMAGENES desde freepik.es
* -ICONOS desde icons.getbootstrap.com


## 3. Prototipo
![Prototipo](/public/prototipo.png)


## 4. Descripción del proyecto
* -HEADER: se utilizo REACT BOOTSTRAP para usar el componente de NAVBAR
* -SLIDER: se utilizo REACT BOOTSTRAP para usar el componente de CAROUSEL
* -FOOTER: datos de ubicación y correo electrónico
* -MENU: Información de la carta del restaurante obtenida desde FIREBASE STORAGE
* -RESERVAS: Agregar, listar y eliminar Reservas usando FIREBASE STORAGE
* -Uso de props: Componente Loading recibe el parametro de false/true desde el componente Padre
* -Uso de hooks useState: para mostrar Loading, para almacenar el contenido del menu, para almacenar el contenido de las reservas y para almacenar el valor de las reservas antes de enviar a la base de datos 