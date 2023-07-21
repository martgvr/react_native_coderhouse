import { colors } from "../global/colors"
import { useSelector } from 'react-redux'
import { StyleSheet, View, FlatList } from "react-native"

import Counter from "../components/Counter"
import CategoryItem from "../components/CategoryItem"

const Home = ({ navigation }) => {
	const categories = useSelector(state => state.shopReducer.allCategories)

	return (
		<View style={styles.container}>
			<Counter />
			<FlatList
				data={categories}
				style={styles.flatlist}
				keyExtractor={(category) => category}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
			/>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		padding: 10,
		marginBottom: 50,
		alignItems: "center",
		backgroundColor: colors.primary,
	},
	flatlist: {
		width: "100%",
	},
})
