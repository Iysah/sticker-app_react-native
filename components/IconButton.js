import { Pressable, StyleSheet, Text } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function IconButton ({ icon, label, onPress }) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color='#ffafc5' />
            <Text style={styles.iconText}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#ffafc5',
        marginTop: 12,
    },
    iconText: {
        fontSize: 16,
        color: '#FFCFD2',
    }
})