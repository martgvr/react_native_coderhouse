import { colors } from '../global/colors'
import { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Search from '../components/Search'
import productsRaw from '../data/products.json'
import ProductItem from '../components/ProductItem'

const ItemListCategory = ({ category, setCategory }) => {
  const [keyword, setKeyword] = useState("")
  const [products, setProducts] = useState([])
  const [keywordError, setKeywordError] = useState("")

  useEffect(()=> {
    const productsFiltered = productsRaw.filter(product => product.category.toLowerCase() === category && product.title.toLowerCase().includes(keyword))
    setProducts(productsFiltered)
  }, [category, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError('Solo se permiten letras y numeros')
    }
  }

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} error={keywordError} goBack={() => setCategory("")} />
      <FlatList data={products} keyExtractor={product => product.id} renderItem={({item}) => ProductItem({item})} showsVerticalScrollIndicator={false} />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.primary,
  },
})