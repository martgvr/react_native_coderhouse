import Card from './Card'
import { Image, StyleSheet, Text } from 'react-native'

const ProductItem = ({ item }) => {
  return (
    <Card>
        <Image resizeMode='cover' style={styles.image} source={{ uri: item.thumbnail }} />
        <Text style={styles.textCategory}>{item.title}</Text>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 35,
    borderRadius: 30,
  }
})