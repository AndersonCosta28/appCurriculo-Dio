import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

const Card = ({titulo, children}) => {
    return (
        <View style={styles.card_container}>
            <View style={styles.card}>
                <View style={styles.card_hearder}>
                    <Text style={styles.card_hearder_text}>{titulo}</Text>
                </View>
                <View style={styles.card_content}>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Card;