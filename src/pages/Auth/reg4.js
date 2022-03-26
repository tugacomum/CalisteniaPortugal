import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';

const teste = Dimensions.get('window').height / 2.22
const testee = Dimensions.get('window').height / 5

export default function Reg4({ navigation }) {
    const [index, setIndex] = useState(0);
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste5.jpg')}
                style={styles.img}>
                <Text style={styles.textTitle}>Calistenia Portugal</Text>
                <Text style={styles.textG}>Nível Fitness</Text>
                <View style={styles.container}>
                    <TouchableOpacity style={{
                        top: -15,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 1 ? '#D21E1F' : 'grey', height: 70, justifyContent:'center'
                    }}
                        onPress={() => setIndex(1)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Novo</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Nunca treinei antes.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 15,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 2 ? '#D21E1F' : 'grey', height: 70, justifyContent:'center'
                    }} onPress={() => setIndex(2)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Principiante</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Tenho alguma experiência.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 45,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 3 ? '#D21E1F' : 'grey', height: 70, justifyContent:'center'
                    }} onPress={() => setIndex(3)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Intermédio</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Tenho experiência moderada com treino constante.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 75,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 4 ? '#D21E1F' : 'grey', height: 70, justifyContent:'center'
                    }} onPress={() => setIndex(4)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Avançado</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Tenho muita experiência moderada com treino constante.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button onPress={() => navigation.navigate('Reg5')} style={styles.btnregister}>
                        <Text style={styles.textregister}>Próximo</Text>
                    </Button></View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 220,
        paddingRight: 15,
        paddingLeft: 15,
    },
    textG: {
        top: testee,
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: "bold",
        color: 'white',
    },
    textTitle: {
        paddingTop: 40,
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    btnregister: {
        top: teste,
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textregister: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17
    },
});