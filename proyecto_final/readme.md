# Proyecto final React Native

## Instalación de definiciones (tipos)

```
$ npm i @types/react-native
```

## Instalación de fuentes personalizadas

Documentación: `https://docs.expo.dev/versions/latest/sdk/font/`

En terminal:

```
$ npx expo install expo-font
```

En app:

```
import { useFonts } from 'expo-font';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    });
```

## Instalación de Navigation

```
$ npm install @react-navigation/native
$ npx expo install react-native-screens react-native-safe-area-context
$ npm install @react-navigation/native-stack
$ npm install @react-navigation/bottom-tabs
```

## Redux Toolkit

```
$ npm install @reduxjs/toolkit
$ npm install react-redux
$ npm i -D @redux-devtools/core
```

## SQLite

```
$ npx expo install expo-sqlite
```

# What's next?

```
- Universalizar funciones de sqlite.
- Crear db para ordenes (persistente).
- Eliminar archivos json locales.
- Implementar un estado de error en redux. ({ status: true/false, code: "" })
- Mostrar componente ErrorModal al detectar un error. Al no ser un error crítico se podría cerrar el modal y seguir usando la app.
- Hacer funcionar el counter en el item detail
- Hacer un readme detallado. Librerías utilizadas, como clonar repo, como levantar proyecto y en qué consiste.
- Poner iconos en las categorías, la misma db tiene que tener su respectiva imagen png
- Hacer funcionar el boton de eliminar item del cart y agregar al lado de confirm un boton para limpiar el carrito
- Rediseñar Item List, hacer cuadrados con fotos
```