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
```