import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"

const PictureGallery = ({ images, setImageToShow }) => {
	return (
		<View style={styles.container}>
            {
                images &&
                    images.map(item =>             
                        <TouchableOpacity style={styles.imageCard} onPress={() => setImageToShow(item)}>
                            <Image source={{ uri: item }} style={styles.image} />
                        </TouchableOpacity>
                    )
            }
		</View>
	)
}

export default PictureGallery

const styles = StyleSheet.create({
	container: {
        gap: 10,
		height: 80,
		marginBottom: 10,
        flexDirection: 'row',
	},
    image: {
        minWidth: 75,
        height: 80,
    },
})
