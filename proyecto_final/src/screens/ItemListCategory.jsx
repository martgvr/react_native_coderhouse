import { colors } from "../global/colors"
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"

import Search from "../components/Search"
import ProductItem from "../components/ProductItem"

const ItemListCategory = ({ navigation, route }) => {
	const [keyword, setKeyword] = useState("")
	const [products, setProducts] = useState([])
	const [keywordError, setKeywordError] = useState("")

	const productsSelected = useSelector(state => state.shopReducer.productsSelected)

	useEffect(()=> {
		const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
		setProducts(productsFiltered)
	  }, [productsSelected, keyword])

	const onSearch = (input) => {
		const expression = /^[a-zA-Z0-9\ ]*$/
		const evaluation = expression.test(input)

		if (evaluation) {
			setKeyword(input)
			setKeywordError("")
		} else {
			setKeywordError("Solo se permiten letras y numeros")
		}
	}

	return (
		<View style={styles.container}>
			<Search onSearch={onSearch} error={keywordError} goBack={() => navigation.goBack()} />
			<FlatList
				data={products}
				navigation={navigation}
				keyExtractor={(product) => product.id}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <ProductItem navigation={navigation} item={item} />}
			/>
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
