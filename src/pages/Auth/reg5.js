import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';

const teste = Dimensions.get('window').height / 2.22
const testee = Dimensions.get('window').height / 5

export default function Reg5({ navigation }) {
    const [index, setIndex] = useState(0);
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste5.jpg')}
                style={styles.img}>
                <Text style={styles.textTitle}>Calistenia Portugal</Text>
                <Text style={styles.textG}>Objetivos</Text>
                <View style={styles.container}>
                    <TouchableOpacity style={{
                        top: -15,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 1 ? '#F95A41' : 'grey', height: 70, justifyContent:'center'
                    }}
                        onPress={() => setIndex(1)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Construir força</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Fique mais forte e faça exercícios com mais facilidade.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 15,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 2 ? '#F95A41' : 'grey', height: 70, justifyContent:'center'
                    }} onPress={() => setIndex(2)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Construir músculos</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Aumentar o volume e dificultar o crescimento muscular.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 45,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 3 ? '#F95A41' : 'grey', height: 70, justifyContent:'center'
                    }} onPress={() => setIndex(3)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Perder peso</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Otimizados para exercícios de queima de gordura de alta intensidade.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        top: 75,
                        paddingTop: 3,
                        borderWidth: 2, borderRadius: 10, borderColor: index === 4 ? '#F95A41' : 'grey', height: 70, justifyContent:'center'
                    }} onPress={() => setIndex(4)}>
                        <Text style={{
                            color: "#FFFF",
                            fontWeight: "bold",
                            paddingLeft: 10,
                        }}>Aprender novas técnicas</Text>
                        <Text style={{
                            color: "#FFFF",
                            paddingLeft: 10,
                        }}>Domine habilidades básicas a avançadas.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button onPress={() => navigation.navigate('Reg6')} style={styles.btnregister}>
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