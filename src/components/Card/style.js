import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: '60%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#939393',
        padding: 10,
        backgroundColor: "#FFF"
    },
    card_container: {
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
        marginTop: 20
    },
    card_content: {
        marginTop: 20,
    },
    card_hearder_text: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})

export default styles;