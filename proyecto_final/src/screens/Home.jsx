import { COLORS } from "../global/colors"
import { StyleSheet, View, FlatList } from "react-native"
import { useGetCategoriesQuery } from "../services/shop.service"

import Error from "../components/Error"
import Loader from "../components/Loader"
import CategoryItem from "../components/CategoryItem"

const Home = ({ navigation }) => {
	const { data: categories, isLoading, isError } = useGetCategoriesQuery()

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
							<FlatList
								data={categories}
								keyExtractor={(category) => category}
								showsVerticalScrollIndicator={false}
								renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
							/>
						</View>
			}
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 65,
		alignItems: "center",
		backgroundColor: COLORS.secondary,
	},
	flatListContainer: {
		width: '100%',
	},
})
