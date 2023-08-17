import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setUser } from "../features/user/user.slice"
import { useSignUpMutation } from "../services/auth.service"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { isAtLeastSixCharacters, isValidEmail } from "../validations/auth"

import InputForm from "../components/InputForm"
import SubmitButton from "../components/SubmitButton"

import { useTheme } from "@react-navigation/native"

const Signup = ({ navigation }) => {
	const { colors } = useTheme()
	const dispatch = useDispatch()
	const styles = dynamicStyle(colors)

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setconfirmPassword] = useState("")

	const [errorMail, setErrorMail] = useState("")
	const [errorPassword, setErrorPassword] = useState("")
	const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

	const [triggerSignUp, result] = useSignUpMutation()

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(setUser({ 
				email: result.data.email,
				idToken: result.data.idToken,
			}))
		}
	}, [result])

	const onSubmit = () => {
		try {
			setErrorMail('')
			setErrorPassword('')
			setErrorConfirmPassword('')

			const isCorrectEmail = isValidEmail(email)
			const isCorrectPassword = isAtLeastSixCharacters(password)
			const isRepeatedPasswordCorrect = password === confirmPassword

			if (isCorrectEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
				const request = {
					email: email,
					password: password,
					returnSecureToken: true,
				}

				triggerSignUp(request)
			}

			if (!isCorrectEmail) setErrorMail('Email incorrecto')
			if (!isCorrectPassword) setErrorPassword('Password incorrecto')
			if (!isRepeatedPasswordCorrect) setErrorConfirmPassword('Los passwords no coinciden')
		} catch (err) {
			console.log("Catch error")
			console.log(err.message)
		}
	}

	return (
		<View style={styles.main}>
			<View style={styles.container}>
				<Text style={styles.title}>Signup</Text>

				<InputForm label={"Email"} onChange={setEmail} error={errorMail} />
				<InputForm label={"Password"} onChange={setPassword} error={errorPassword} isSecure={true} />
				<InputForm label={"Confirm password"} onChange={setconfirmPassword} error={errorConfirmPassword} isSecure={true} />
				
				<SubmitButton onPress={onSubmit} title="Send" />
				
				<Text style={styles.sub}>Already have an account?</Text>
				
				<Pressable onPress={() => navigation.navigate("Login")}>
					<Text style={styles.subLink}>Login</Text>
				</Pressable>
			</View>
		</View>
	)
}

export default Signup

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