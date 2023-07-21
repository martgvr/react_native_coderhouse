import { useState } from "react"
import { colors } from "../global/colors"
import { useDispatch, useSelector } from "react-redux"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice"

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0);

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value)

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => dispatch(decrement())}>-</Text>
                </Pressable>
                <Text style={styles.span}>{count}</Text>

                <Pressable style={styles.button} onPress={() => dispatch(increment())} >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>

            </View>
            <View style={styles.buttonsContainer}>
                <TextInput
                    style={styles.spanInput}
                    keyboardType="numeric"
                    onChangeText={setInputToAdd}
                    value={inputToAdd.toString()}
                    placeholder="Cantidad a aumentar"
                />
                <Pressable style={styles.button} onPress={() => dispatch(incrementByAmount(inputToAdd))}>
                    <Text style={styles.buttonText}>Add</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => setInputToAdd(0)}>
                    <Text style={styles.buttonText}>Reset</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: colors.primary,
    },
    buttonsContainer: {
        gap: 10,
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        backgroundColor: '#222',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
    span: {
        width: "60%",
        padding: 10,
        fontSize: 20,
        textAlign: "center",
    },
    spanInput: {
        width: "40%",
        padding: 10,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: "center",
        borderColor: '#777',
    },
});
