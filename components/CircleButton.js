import { View, Pressable, StyleSheet } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function CircleButton ({ onPress }) {

    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MaterialIcons name='add' size={38} color={'#FFCFD2'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderColor: '#FFCFD2',
        borderWidth: 4,
        borderRadius: 42,
        padding: 3,
    },
    circleButton: {
        backgroundColor: '#ff85a5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
    },
})