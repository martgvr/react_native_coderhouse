import { useSelector } from 'react-redux'
import { useEffect, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { StyleSheet, View, FlatList } from "react-native"
import { useGetProductsByCategoryQuery } from "../services/shop.service"

import Error from "../components/Error"
import Loader from "../components/Loader"
import Search from "../components/Search"
import ProductItem from "../components/ProductItem"

const ItemListCategory = ({ navigation }) => {
	const [keyword, setKeyword] = useState("")
	const [products, setProducts] = useState([])
	const [keywordError, setKeywordError] = useState("")

	const { colors } = useTheme()
	const styles = dynamicStyle(colors)
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
					<Error title={'Se produjo un error de conexión'} description={'Reinicie la aplicación para intentar nuevamente.'} />
						:
						<View>
							<Search onSearch={onSearch} error={keywordError} goBack={() => navigation.goBack()} />
							<FlatList
								numColumns={2}
								data={products}
								navigation={navigation}
								keyExtractor={(product) => product.id}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => <ProductItem navigation={navigation} item={item} />}
								contentContainerStyle={styles.flatListContent}
							/>
						</View>
			}
		</View>
	)
}

export default ItemListCategory

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			flex: 1,
			padding: 20,
			backgroundColor: colors.secondary,
		},
		flatListContent: {
			width: '100%',
		},
	})
}