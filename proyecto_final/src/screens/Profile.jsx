import { useSelector } from "react-redux"
import { Image, StyleSheet, View } from "react-native"
import { useGetProfileImageQuery } from "../services/shopServices"

import AddButton from "../components/AddButton"

const Profile = ({ navigation }) => {
	const { localID, profileImage } = useSelector((state) => state.userReducer)
	const { data: image } = useGetProfileImageQuery(localID)

	const cameraImage = image?.image
	const launchCamera = async () => navigation.navigate("Image Selector")

	return (
		<View style={styles.container}>
			<Image source={profileImage || cameraImage ? { uri: profileImage || cameraImage } : require("../assets/images/defaultProfile.png")} style={styles.image} resizeMode="cover" />
			<AddButton onPress={launchCamera} title="Add profile picture" />
		</View>
	)
}

export default Profile

const styles = StyleSheet.create({
	container: {
		padding: 10,
		gap: 15,
		alignItems: "center",
		justifyContent: "flex-start",
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
})
