import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

export default function Dashboard() {
    return (


            <View style={styles.container}>

                <Text style={styles.textTr}>Os meus treinos</Text>
                <Text style={styles.textTradd}>ver todos</Text>
                <Text style={styles.textTrtxt}>Todos os treinos que irá salvar serão guardados aqui.</Text>

                <Text style={styles.textPr}>Os meus programas</Text>
                <Text style={styles.textPradd}>ver todos</Text>
                <Text style={styles.textPrtxt}>Todos os programas que irá salvar serão guardados aqui</Text>

                <Text style={styles.textEx}>Exercícios</Text>
                <Text style={styles.textExadd}>ver todos</Text>
                <Text style={styles.textExtxt}>Poderá visuzalizar seus exercícios aqui.</Text>

            </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40
    },
    textTr: {

        fontSize: 18,
        fontWeight: 'bold',
        top: -250, 
        right: 100,
    },
    textTradd: {
        color: "#F95A41",
        fontSize: 15,
        fontWeight: "bold",
        top: -225,
        alignSelf: 'flex-end'
    },
    textTrtxt: {
        textAlign: 'center',
        fontSize: 15,
        top: -160,
    },
    textPr: {

        fontSize: 18,
        fontWeight: 'bold',
        right: 80,
        top: -60,
    },
    textPradd: {

        color: "#F95A41",
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        top: -50,

    },
    textPrtxt: {
        fontSize: 15,
        top: 10,
        textAlign: 'center'
    },
    textEx: {

        fontSize: 18,
        fontWeight: 'bold',
        top: 100,
        right: 125,
    },
    textExadd: {

        color: "#F95A41", 
        fontSize: 15,
        fontWeight: 'bold',
        top: 120,
        alignSelf: 'flex-end'
    },
    textExtxt: {
        textAlign: 'center',
        fontSize: 15,
        top: 155,
    },

});