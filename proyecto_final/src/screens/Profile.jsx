import { useDispatch, useSelector } from "react-redux"
import { Image, StyleSheet, View, Text } from "react-native"

import { COLORS } from "../global/colors"
import { signOut } from "../features/user/user.slice"
import { deleteSession } from "../database/sqlite.config"
import { useGetProfileImageQuery } from "../services/shop.service"

import SubmitButton from "../components/SubmitButton"

const Profile = ({ navigation }) => {
	const dispatch = useDispatch()
	const { localID, profileImage, email } = useSelector((state) => state.userReducer)
	const { data: image } = useGetProfileImageQuery(localID)

	const cameraImage = image?.image
	const themeHandler = () => console.log('Theme changing')
	const launchCamera = async () => navigation.navigate("Image Selector")
	const launchLocation = async () => navigation.navigate('List Address')
	
	const logoutHandler = async () => {
		try {
			await deleteSession(localID)
			dispatch(signOut())
		} catch (error) {
			console.log(error)
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
			<SubmitButton title={'Logout'} onPress={logoutHandler} width="80%"/>
			<SubmitButton title={'My address'} onPress={launchLocation} width="80%" />
			<SubmitButton title={'Light mode'} onPress={themeHandler} width="80%" />
		</View>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		height: '100%',
		padding: 10,
		paddingTop: 40,
		alignItems: "center",
		backgroundColor: COLORS.secondary,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 20,
	},
	text: {
		fontSize: 20,
		color: COLORS.text,
		marginBottom: 20,
	},
	title: {
		marginLeft: -3,
		letterSpacing: 2,
		opacity: 0.6,
		fontSize: 10,
		fontWeight: 'bold',
		color: COLORS.subtitle,
		alignSelf: 'flex-start',
		textTransform: 'uppercase',
	},
})
