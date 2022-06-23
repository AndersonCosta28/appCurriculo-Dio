import React from "react";
import { Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import BotaoRedeSocial from "./components/buttons/BotaoRedeSocial";
import Card from "./components/Card";

const App = () => {

    const LINK_LINDEKIN = 'https://www.linkedin.com/in/anderson-costa-7a15141b2/';
    const LINK_GITHUB = 'https://github.com/Mert1s';
    const LINK_FACEBOOK = 'https://www.facebook.com/anderson.costa28/';

    return (
        <>
            <ScrollView style={styles.scroll}>
                <View style={styles.page}>
                    <View style={styles.container_cabecalho}>
                        <Image source={require('./assets/foto.png')} style={styles.foto}></Image>
                        <Text style={styles.nome}>Anderson Costa</Text>
                        <Text style={styles.funcao}>Desenvolvedor FullStack</Text>
                        <View style={styles.rede_social}>
                            <BotaoRedeSocial iconeDaRede='facebook' link={LINK_FACEBOOK} />
                            <BotaoRedeSocial iconeDaRede='linkedin' link={LINK_LINDEKIN} />
                            <BotaoRedeSocial iconeDaRede='github' link={LINK_GITHUB} />
                        </View>
                    </View>
                    <Card titulo='Experiência profissional'>
                        <Text style={styles.card_content_text}>Total Soluções</Text>
                        <Text style={styles.card_content_text}>Mega informática</Text>
                    </Card>
                    <Card titulo='Formação acadêmica'>
                        <Text style={styles.card_content_text}>SENAI-BA - Tecnico em Desenvolvimento de Sistemas </Text>
                        <Text style={styles.card_content_text}>UNICESUMAR - Análise de desenvolvimento de sistemas</Text>
                    </Card>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#E7E7E7'
    },
    page: {
        flex: 1,
        alignItems: 'center'
    },
    container_cabecalho: {
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    foto: {
        width: 250,
        height: 250,
        borderRadius: 125
    },
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 10
    },
    funcao: {
        color: '#939393',
        marginBottom: 10
    },
    rede_social: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '40%',
        marginTop: 20
    },
    card_content_text: {
        color: '#939393',
        marginBottom: 10
    },
})

export default App;