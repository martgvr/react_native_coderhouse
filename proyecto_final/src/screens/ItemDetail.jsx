import { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'

import allProducts from '../data/products.json'

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState("portrait")

  const { width, height } = useWindowDimensions()
  const { productSelected } =  route.params

  useEffect(() => {
    setOrientation(width > height ? 'landscape' : 'portrait')
  }, [width, height])

  useEffect(() => {
    const productFound = allProducts.find(product => product.id == productSelected)
    setProduct(productFound)
  }, [productSelected])

  return (
    <View style={orientation === 'landscape' ? styles.containerLandscape : null}>
      <Button onPress={() => navigation.goBack()} title='Go Back' />
      <View style={styles.container}> 
        {
          product &&
          <View>
            <Image source={{ uri: product.images[0] }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>$ {product.price}</Text>
          </View>
        }
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  containerLandscape: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  title: {
    fontWeight: 800, 
    fontSize: 22, 
    alignSelf: 'center',
  },
  description: {
    fontSize: 16, 
    alignSelf: 'center', 
    textAlign: 'center',
  },
  price: {
    marginTop: 20, 
    alignSelf: 'center', 
    fontSize: 20,
  },
})