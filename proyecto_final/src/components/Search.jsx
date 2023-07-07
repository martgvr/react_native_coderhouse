import { useState } from "react"
import { colors } from "../global/colors"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"

import { AntDesign } from "@expo/vector-icons"
import { FontAwesome } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"

const Search = ({ error, onSearch, goBack }) => {
	const [keyword, setKeyword] = useState("")

	return (
		<View style={styles.container}>
			<View style={styles.top} >
				<Pressable onPress={goBack}>
					<AntDesign name="back" size={24} color="#444" />
				</Pressable>
				<TextInput style={styles.input} placeholder="Search..." value={keyword} onChangeText={setKeyword} />
				<Pressable onPress={() => onSearch(keyword)}>
					<FontAwesome name="search" size={24} color="#444" />
				</Pressable>
				<Pressable onPress={() => setKeyword("")}>
					<FontAwesome5 name="eraser" size={24} color="#444" />
				</Pressable>
			</View>

			<View style={styles.bottom}>
				<Text style={styles.error}>{error}</Text>
			</View>
		</View>
	)
}

export default Search

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
	},
	top: {
		gap: 18,
		width: '100%',
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	bottom: {
		height: 30,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: 'red'
	},
	error: {
		color: 'red',
		fontSize: 12,
	},
	input: {
		flex: 1,
		padding: 8,
		fontSize: 18,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: colors.accents,
		backgroundColor: colors.primary,
	},
})
