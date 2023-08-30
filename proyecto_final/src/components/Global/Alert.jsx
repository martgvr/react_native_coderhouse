import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { setAlert } from "../../features/app/app.slice"

const Alert = () => {
	const dispatch = useDispatch()
	const { alertStatus } = useSelector(state => state.appReducer)

	useEffect(() => {
		const timeout = setTimeout(() => {
			dispatch(setAlert({ alertStatus: false, alertMessage: '' }))
		}, 5000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		alertStatus && (
			<View style={styles.container}>
				<Text>Alert</Text>
			</View>
		)
	)
}

export default Alert

const styles = StyleSheet.create({
	container: {
		top: 70,
		alignSelf: 'flex-end',
		position: 'absolute',
		backgroundColor: 'blue',
	},
})
