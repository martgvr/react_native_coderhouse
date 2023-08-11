import { useState } from "react"
import { COLORS } from "../global/colors"
import { useDispatch, useSelector } from "react-redux"
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native"
import { increment, decrement, incrementByAmount } from "../features/counter/counter.slice"

const Counter = () => {
    const [inputToAdd, setInputToAdd] = useState(0);

    const dispatch = useDispatch()
    const count = useSelector(state => state.counterReducer.value)

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => dispatch(decrement())}>-</Text>
                </TouchableOpacity>

                <Text style={styles.span}>{count}</Text>

                <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())} >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <TextInput
                    style={styles.spanInput}
                    keyboardType="numeric"
                    onChangeText={setInputToAdd}
                    value={inputToAdd.toString()}
                    placeholder="Cantidad a aumentar"
                />
                <TouchableOpacity style={styles.button} onPress={() => dispatch(incrementByAmount(inputToAdd))}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setInputToAdd(0)}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        gap: 10,
        width: "100%",
        alignSelf: 'flex-end',
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: COLORS.secondary,
    },
    buttonsContainer: {
        gap: 10,
        width: '100%',
        paddingHorizontal: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: COLORS.border,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.text,
    },
    span: {
        width: "60%",
        padding: 10,
        fontSize: 20,
        textAlign: "center",
        color: COLORS.text,
        backgroundColor: COLORS.secondary,
    },
    spanInput: {
        width: "40%",
        padding: 10,
        fontSize: 16,
        textAlign: "center",
        borderWidth: 1,
        borderRadius: 10,
        color: COLORS.text,
        borderColor: COLORS.border,
        backgroundColor: COLORS.primary,
    },
});
