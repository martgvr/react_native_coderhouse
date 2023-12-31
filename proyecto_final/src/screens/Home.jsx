import { useTheme } from "@react-navigation/native"
import { StyleSheet, View, FlatList } from "react-native"
import { useGetCategoriesQuery } from "../services/shop.service"

import Error from "../components/Global/Error"
import Loader from "../components/Global/Loader"
import CategoryItem from "../components/Shop/CategoryItem"

const Home = ({ navigation }) => {
	const styles = dynamicStyle(useTheme().colors)
	const { data: categories, isLoading, isError } = useGetCategoriesQuery()

	return (
		<View style={styles.container}>
			{
				isLoading ?
					<Loader />
					:
					isError ?
						<Error title={'Se produjo un error de conexión'} description={'Reinicie la aplicación para intentar nuevamente.'} />
						:
						<View style={styles.flatListContainer}>
							<FlatList
								data={categories}
								showsVerticalScrollIndicator={false}
								keyExtractor={(category) => category.name}
								renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
							/>
						</View>
			}
		</View>
	)
}

export default Home

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			padding: 20,
			paddingBottom: 65,
			alignItems: "center",
			backgroundColor: colors.secondary,
		},
		flatListContainer: {
			width: '100%',
		},
	})
}