# Proyecto final React Native

## Sobre el proyecto

![react native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

Esta aplicación ha sido desarrollada para el curso de React Native de Coderhouse utilizando las siguientes tecnologías:

- `Expo` para su creación, prueba y distribución.
- `SQLite` como base de datos local.
- `Redux Toolkit` para el manejo de estados.
- `React Navigation` para la construcción de stacks y navegación.

## Índice

1) Clonar repositorio
2) Uso del proyecto
3) Estructura de proyecto
4) Creditos

## 1. Clonar repositorio

Primero clickear el boton `Code` y copiar el link del repositorio.

<img src="https://i.ibb.co/PhP94ZG/github.jpg">

Luego, en la terminal de tu preferencia, dirigete al directorio donde desees clonarlo y escribe las siguientes lineas:

- Clonar repo

```
$ git clone <link copiado> <directorio>
```

- Instalar dependencias

```
$ npm install
```

- Iniciar

```
$ npm start
```

## 2. Uso del proyecto

### Variables de base de datos

El archivo `/src/database/firebase.config.js` posee las siguientes variables:

```
DB_URL = <dirección de Realtime Database>
API_KEY = <clave API Google Identity Toolkit>
MAPS_API_KEY = <clave API Google Maps>
```

### Estructura de base de datos

Categorías

```
[
    {
        name: "",
        icon: "",
    }
]
```

Productos

```
[
    {
        id: [number],
        title: "",
        brand: "",
        stock: [number],
        price: [number],
        rating: [number],
        images: [ "string" ],
        category: "",
        thumbnail: "",
        description: "",
        discountPercentage: [number],
    }
]
```

## 3. Estructura de proyecto
Carpetas agrupadas, componentes, y screens
Stacks del navigation
Stores de redux creados
Componentes a medida (como Alert / Error Critico / Error modal cerrable)

## 4. Creditos
Este proyecto ha sido desarrolado por [Martín Guevara](https://github.com/martgvr).

### Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo:

```
Correo Electrónico: martin_91@live.com.ar
```

¡Gracias por tu interés en este proyecto! Espero que te resulte útil y te diviertas explorándolo. ¡Espero recibir tus comentarios y contribuciones!