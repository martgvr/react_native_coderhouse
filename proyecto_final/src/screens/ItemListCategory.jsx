import { COLORS } from "../global/colors"
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { useGetProductsByCategoryQuery } from "../services/shop.service"

import Loader from "../components/Loader"
import Search from "../components/Search"
import ProductItem from "../components/ProductItem"

const ItemListCategory = ({ navigation }) => {
	const [keyword, setKeyword] = useState("")
	const [products, setProducts] = useState([])
	const [keywordError, setKeywordError] = useState("")

	const categorySelected = useSelector(state => state.shopReducer.categorySelected)
	const { data: productsSelected, isError, isLoading } = useGetProductsByCategoryQuery(categorySelected)

	useEffect(() => {
		if (productsSelected) {
			const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
			setProducts(productsFiltered)
		}
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
			{
				isLoading ?
					<Loader />
					:
					isError ?
						<Error />
						:
						<View style={styles.flatListContainer}>
							<Search onSearch={onSearch} error={keywordError} goBack={() => navigation.goBack()} />
							<FlatList
								data={products}
								navigation={navigation}
								keyExtractor={(product) => product.id}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => <ProductItem navigation={navigation} item={item} />}
							/>
						</View>
			}
		</View>
	)
}

export default ItemListCategory

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: COLORS.secondary,
	},
	flatListContainer: {
		width: '100%'
	},
})
