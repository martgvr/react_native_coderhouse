import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { Pressable, StyleSheet, Text, View } from "react-native"

import { setUser } from "../features/user/user.slice"
import { setWarning } from "../features/app/app.slice"
import { sessionsDB } from "../database/sqlite.config"
import { useSignInMutation } from "../services/auth.service"
import { isAtLeastSixCharacters, isValidEmail } from "../validations/auth"

import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"

const Login = ({ navigation }) => {
	const { colors } = useTheme()
	const dispatch = useDispatch()
	const styles = dynamicStyle(colors)

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
				try {
					await sessionsDB.insert({
						columns: 'email, localID, idToken',
						params: [result.data.email, result.data.localId, result.data.idToken]
					})
				} catch (error) {
					dispatch(setWarning({ 
						warningCode: error.message, 
						warningTitle: 'ERROR!',
						warningStatus: true,
						warningDescription: 'No se pudo guardar la sesión en la base de datos.',
					}))
				}

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
			dispatch(setWarning({ 
				warningCode: error.message, 
				warningTitle: 'ERROR!',
				warningStatus: true,
				warningDescription: 'No se pudo iniciar sesión.',
			}))
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

const dynamicStyle = (colors) => {
	return StyleSheet.create({
		main: {
			width: "100%",
			height: "100%",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: colors.secondary,
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
			borderColor: colors.border,
			backgroundColor: colors.primary,
		},
		title: {
			fontSize: 22,
			color: colors.text,
		},
		sub: {
			fontSize: 14,
			color: colors.text,
		},
		subLink: {
			fontSize: 14,
			color: colors.accents,
		},
	})
}