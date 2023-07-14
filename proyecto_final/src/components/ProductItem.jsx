import Card from './Card'
import { Image, Pressable, StyleSheet, Text } from 'react-native'

const ProductItem = ({ item, navigation }) => {
  const onSelect = () => navigation.navigate('ItemDetail', { productSelected: item.id })
	
  return (
		<Pressable onPress={onSelect}>
      <Card>
          <Image resizeMode='cover' style={styles.image} source={{ uri: item.thumbnail }} />
          <Text style={styles.textCategory}>{item.title}</Text>
      </Card>
    </Pressable>
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