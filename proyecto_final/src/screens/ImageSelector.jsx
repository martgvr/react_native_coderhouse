import { useState } from "react"
import { COLORS } from "../global/colors"
import AddButton from "../components/AddButton"
import * as ImagePicker from "expo-image-picker"
import * as MediaLibrary from "expo-media-library"
import { saveImage } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { Image, View, StyleSheet, Text } from "react-native"
import { usePostProfileImageMutation } from "../services/shopServices"
import SubmitButton from "../components/SubmitButton"

const ImageSelector = ({ navigation }) => {
	const [image, setImage] = useState(null)
    
    const dispatch = useDispatch()
    const { localID } = useSelector((state) => state.userReducer)
    const [triggerSaveImage, resultSaveImage] = usePostProfileImageMutation()

	const verifyCameraPermissions = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        return granted
	}

	const pickImage = async () => {
		const isCameraOk = await verifyCameraPermissions()
		if (isCameraOk) {
			// No permissions request is necessary for launching the image library
			let result = await ImagePicker.launchCameraAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsEditing: true,
				aspect: [1, 1],
				//base64: true,
				quality: 1,
			})

			console.log(result.assets)

			if (!result.canceled) {
				setImage(result.assets[0].uri)
			}
		}
	}

	const confirmImage = async () => {
		try {
            // Request device storage access permission
            const { status } = await MediaLibrary.requestPermissionsAsync();

            if (status === "granted") {
                console.log("Only valid on emulators and physical devices");

                // Save image to media library and create an asset
                const response = await MediaLibrary.createAssetAsync(image);
                console.log(response.uri);

                //Save image link on profileImages remote location
                triggerSaveImage({
                    image: response.uri,
                    localID: localID,
                });

                // Set image on redux state
                dispatch(saveImage(response.uri));
            }
        } catch (error) {
            console.log(error);
        }
        navigation.goBack();
	}

	return (
		<View style={styles.container}>
			{image ? (
				<>
					<Image source={{ uri: image }} style={styles.image} />
					<SubmitButton title={'Take another photo'} width="80%" onPress={pickImage} />
					<SubmitButton title={'Confirm photo'} width="80%" onPress={confirmImage} />
				</>
			) : (
				<>
					<View style={styles.noPhotoContainer}>
						<Text style={styles.text}>No photo to show...</Text>
					</View>
					<SubmitButton title={'Take a photo'} width="80%" onPress={pickImage} />
				</>
			)}
		</View>
	)
}

export default ImageSelector

const styles = StyleSheet.create({
	container: {
		gap: 0,
		flex: 1,
		paddingTop: 40,
		alignItems: "center",
		justifyContent: "flex-start",
		backgroundColor: COLORS.secondary,
	},
	image: {
		width: 200,
		height: 200,
		marginBottom: 20,
		borderRadius: 100,
	},
	noPhotoContainer: {
		width: 200,
		height: 200,
		padding: 10,
		borderWidth: 2,
		marginBottom: 20,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
		borderColor: COLORS.accents,
	},
	text: {
		color: COLORS.text,
	},	
})
