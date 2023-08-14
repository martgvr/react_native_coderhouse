import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

import { COLORS } from "../global/colors"
import { setUser } from "../features/user/user.slice"
import { insertSession } from "../database/sqlite.config"
import { useSignInMutation } from "../services/auth.service"
import { isAtLeastSixCharacters, isValidEmail } from "../validations/auth"

import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"

const Login = ({ navigation }) => {
	const dispatch = useDispatch()

	const [password, setPassword] = useState("123456")
	const [errorPassword, setErrorPassword] = useState("")

	const [email, setEmail] = useState("jorge@rial.com")
	const [errorMail, setErrorMail] = useState("")

	const [triggerSignIn, result] = useSignInMutation()

	useEffect(() => {
		(async () => {
			if (result.error?.data.error.message) {
				setErrorMail('Email o password incorrectos')
			}
	
			if (result.isSuccess) {
				dispatch(setUser({ 
					email: result.data.email,
					idToken: result.data.idToken,
					localID: result.data.localId,
					profileImage: "",
					location: {
						latitude: "",
						longitude: "",
					}
				}))

				try {
					const response = await insertSession({
						idToken: result.data.idToken,
						localID: result.data.localId,
						email: result.data.email,
					})
				} catch (error) {
					console.log(error)
				}
			}
		})()
	}, [result])

	const onSubmit = () => {
		try {
			setErrorMail('')
			setErrorPassword('')

			const isCorrectEmail = isValidEmail(email)
			const isCorrectPassword = isAtLeastSixCharacters(password)

			if (isCorrectEmail && isCorrectPassword) {
				triggerSignIn({ email: email, password: password, returnSecureToken: true })
			}
			
			if (!isCorrectEmail) setErrorMail('Email incorrecto')
			if (!isCorrectPassword) setErrorPassword('Password incorrecto')
		} catch (error) {
			console.log("Error:", err.message)
		}
	}

	return (
		<View style={styles.main}>
			<View style={styles.container}>
				<Text style={styles.title}>Login to start</Text>

				<InputForm label={"email"} onChange={setEmail} error={errorMail} />
				<InputForm label={"password"} onChange={setPassword} error={errorPassword} isSecure={true} />
				
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
		backgroundColor: COLORS.secondary,
	},
	container: {
		gap: 15,
		width: "90%",
		borderRadius: 10,
		paddingVertical: 20,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: COLORS.border,
		backgroundColor: COLORS.primary,
	},
	title: {
		fontSize: 22,
		color: COLORS.text,
	},
	sub: {
		fontSize: 14,
		color: COLORS.text,
	},
	subLink: {
		fontSize: 14,
		color: COLORS.accents,
	},
})
