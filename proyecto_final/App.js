import { useState } from 'react';
import { useFonts } from 'expo-font'
import { StyleSheet, View } from 'react-native'

import Home from './src/screens/Home'
import Header from './src/components/Header'
import ItemListCategory from './src/screens/ItemListCategory';

export default function App() {
  const [fontsLoaded] = useFonts({ 'header': require('./src/assets/fonts/agdasima-regular.ttf'), });
  const [category, setCategory] = useState('')

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      {
        category ?
          <ItemListCategory category={category} setCategory={setCategory} />
          :
          <Home setCategory={setCategory} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})