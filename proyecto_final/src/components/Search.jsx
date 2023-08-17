import { useState } from "react"
import { useTheme } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Search = ({ error, onSearch }) => {
	const { colors } = useTheme()
	const styles = dynamicStyle(colors)

	const [keyword, setKeyword] = useState("")

	return (
		<View style={styles.container}>
			<View style={styles.top}>
				<TextInput style={styles.input} placeholder="Search..." value={keyword} onChangeText={setKeyword} placeholderTextColor={colors.subtitle} />
				<Pressable onPress={() => onSearch(keyword)}>
					<MaterialCommunityIcons name="magnify" color={colors.accents} size={24} />
				</Pressable>
				<Pressable onPress={() => setKeyword("")}>
					<MaterialCommunityIcons name="eraser" color={colors.accents} size={24} />
				</Pressable>
			</View>

			<View style={styles.bottom}>
				<Text style={styles.error}>{error}</Text>
			</View>
		</View>
	)
}

export default Search

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			paddingVertical: 8,
		},
		top: {
			gap: 18,
			width: "100%",
			alignItems: "center",
			flexDirection: "row",
			justifyContent: "center",
		},
		bottom: {
			height: 20,
			alignItems: "center",
			justifyContent: "center",
		},
		error: {
			color: "red",
			fontSize: 12,
		},
		input: {
			flex: 1,
			padding: 8,
			fontSize: 18,
			borderWidth: 2,
			borderRadius: 10,
			color: colors.text,
			borderColor: colors.accents,
			backgroundColor: colors.primary,
		},
	})
}