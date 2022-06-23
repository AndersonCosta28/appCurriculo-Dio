import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

const BotaoRedeSocial = (props) => {
    const handlerPressIconRedeSocial = async (link) => {
        console.log('Verificando o link!')

        const res = await Linking.canOpenURL(link);
        if (res) {
            console.log('Link Aprovado!')

            await Linking.openURL(link)
            console.log('Abrindo o link!')
        }
    }

    return (
        <TouchableOpacity onPress={() => handlerPressIconRedeSocial(props.link)}>
            <Icon name={props.iconeDaRede} size={30} color='red' />
        </TouchableOpacity>
    )
}

export default BotaoRedeSocial;