import { StyleSheet, View, Text, Pressable  } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'

export default function Button({ label, theme, onPress }) {

    if (theme === 'primary') {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={[ styles.button, { backgroundColor: '#ff85a5' }]} onPress={onPress}>
                    <FontAwesome
                    name="picture-o"
                    size={18}
                    color="#25292e"
                    style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 69,
        marginHorizontal: 20,
        padding: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#ffafc5',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#553e4e',
        fontSize: 16,
    }
})