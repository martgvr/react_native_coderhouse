import { Pressable, StyleSheet, Text, View } from "react-native"

import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"

const Login = ({ navigation }) => {
	const onSubmit = () => {}

	return (
		<View style={styles.main}>
			<View style={styles.container}>
				<Text style={styles.title}>Login to start</Text>

				<InputForm label={"email"} onChange={() => {}} error={""} />
				<InputForm label={"password"} onChange={() => {}} error={""} isSecure={true} />
				
                <SubmitButton onPress={onSubmit} title="Send" />
				
                <Text style={styles.sub}>Not have an account?</Text>

				<Pressable onPress={() => navigation.navigate("Signup")}>
					<Text style={styles.subLink}>Sign up</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default Login

const styles = StyleSheet.create({
	main: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#eee',
	},
	container: {
		gap: 15,
		width: "90%",
		borderRadius: 10,
		paddingVertical: 20,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 22,
	},
	sub: {
		fontSize: 14,
		color: "black",
	},
	subLink: {
		fontSize: 14,
		color: "blue",
	},
})
