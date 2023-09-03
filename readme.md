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

### Estructura de carpetas
El proyecto se encuentra estructurado en stacks situados en la carpeta `/src/navigation`

- Navigation
    - AuthStack
        - Login
        - Sign up
    - MainStack
        - Shop
        - Carts
        - Profile
        - Orders
        
Los componentes utilizados por cada uno de los stacks se encuentran agrupados en la carpeta `/src/components`

### Estructura de Redux
El proyecto cuenta con una gestión de estados ubicado en `/src/store/store.js`

- Store
    - app
        - Estados: modo claro/oscuro, y los estados de warning y alert de la aplicación.
        - Funciones: `setDarkMode / setWarning / setAlert`
    - cart
        - Estados: items agregados al cart, el total monetario y la hora de actualización.
        - Funciones: `addCartItem / removeCartItem / clearCart`
    - shop
        - Estados: id del item seleccionado, categoría seleccionada, etc.
        - Funciones: `setIdSelected / setCategorySelected`
    - user
        - Estados: valores referentes a la sesión del usuario como email, imagen de perfil, etc.
        - Funciones: `setUser / saveImage / setUserLocation / signOut`
    - counter
        - Estados: valores del contador del shop.
        - Funciones: `increment / incrementByAmount / decrement / resetAmount`

## 4. Creditos
Este proyecto ha sido desarrolado por [Martín Guevara](https://github.com/martgvr).

### Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto conmigo:

```
Correo Electrónico: martin_91@live.com.ar
```

¡Gracias por tu interés en este proyecto! Espero que te resulte útil y te diviertas explorándolo. ¡Espero recibir tus comentarios y contribuciones!