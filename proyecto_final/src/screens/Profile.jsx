import { useTheme } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { Image, StyleSheet, View, Text } from "react-native"

import { signOut } from "../features/user/user.slice"
import { sessionsDB, appConfigDB } from "../database/sqlite.config"
import { useGetProfileImageQuery } from "../services/shop.service"
import { setAlert, setDarkMode, setWarning } from "../features/app/app.slice"

import SubmitButton from "../components/Global/SubmitButton"

const Profile = ({ navigation }) => {
	const dispatch = useDispatch()
	const styles = dynamicStyle(useTheme().colors)
	const { localID, profileImage, email } = useSelector((state) => state.userReducer)
	const { data: image } = useGetProfileImageQuery(localID)

	const cameraImage = image?.image
	const launchCamera = async () => navigation.navigate("Image Selector")
	const launchLocation = async () => navigation.navigate('List Address')
	
	const logoutHandler = async () => {
		try {
			await sessionsDB.delete({ condition: 'localID = ?', params: [localID] })
			dispatch(signOut())
		} catch (error) {
			dispatch(setWarning({ 
				warningCode: error.message, 
				warningTitle: 'ERROR!',
				warningStatus: true,
				warningDescription: 'No se pudo cerrar sesión.',
			}))
		}
	}

	const themeHandler = async () => {
		const appData = await appConfigDB.getAll()
		const oldValue = appData.rows._array[0].darkMode
		const newValue = (oldValue == 'true') ? 'false' : 'true'

		try {
			await appConfigDB.update({ column: 'darkMode', oldValue: oldValue, newValue: newValue })
			dispatch(setDarkMode(newValue))
			dispatch(setAlert({ alertStatus: true, alertMessage: `Cambiado a modo ${newValue == 'false' ? 'claro': 'oscuro'}`, alertType: 'success' }))
		} catch (error) {
			dispatch(setWarning({ 
				warningCode: error.message, 
				warningTitle: 'ERROR!',
				warningStatus: true,
				warningDescription: 'No se pudo cambiar el modo claro/oscuro.',
			}))
		}
	}
	
	return (
		<View style={styles.container}>
			<Image source={profileImage || cameraImage ? { uri: profileImage || cameraImage } : require("../assets/images/defaultProfile.png")} style={styles.image} resizeMode="cover" />
			
			<View>
				<Text style={styles.title}>Usuario</Text>
				<Text style={styles.text}>{email}</Text>
			</View>

			<SubmitButton title={'Add profile picture'} onPress={launchCamera} width="80%"/>
			<SubmitButton title={'My address'} onPress={launchLocation} width="80%" />
			<SubmitButton title={'Light mode'} onPress={themeHandler} width="80%" />
			<SubmitButton title={'Logout'} onPress={logoutHandler} width="80%"/>
		</View>
	)
}

export default Profile


const dynamicStyle = (colors) => {
	return StyleSheet.create({
		container: {
			height: '100%',
			padding: 10,
			paddingTop: 40,
			alignItems: "center",
			backgroundColor: colors.secondary,
		},
		image: {
			width: 100,
			height: 100,
			borderRadius: 50,
			marginBottom: 20,
		},
		text: {
			fontSize: 20,
			color: colors.text,
			marginBottom: 20,
		},
		title: {
			marginLeft: -3,
			letterSpacing: 2,
			opacity: 0.6,
			fontSize: 10,
			fontWeight: 'bold',
			color: colors.subtitle,
			alignSelf: 'flex-start',
			textTransform: 'uppercase',
		},
	})
}