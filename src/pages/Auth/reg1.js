import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { useState } from 'react';

const teste = Dimensions.get('window').height / 1.66
const testee = Dimensions.get('window').height / 4

export default function Reg1({ navigation }) {
    const [index, setIndex] = useState(0);
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste5.jpg')}
                style={styles.img}>
                <Text style={styles.textTitle}>Calistenia Portugal</Text>
                <Text style={styles.textG}>Género</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center', top: testee }}>
                    <View style={{ top: 40, borderWidth: 2, borderRadius: 10, borderColor: index === 1 ? '#D21E1F' : 'grey', height: 150, padding: 5 }}>
                        <TouchableOpacity onPress={() => setIndex(1)} style={{ height: 100, width: 100 }}>
                            <ImageBackground source={require('./../../../assets/img/female.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, alignSelf: 'center', top: 10 }}>Mulher</Text>
                    </View>
                    <View style={{ padding: 25 }}></View>
                    <View style={{ top: 40, borderWidth: 2, borderRadius: 10, borderColor: index === 2 ? '#D21E1F' : 'grey', height: 150, padding: 5 }}>
                        <TouchableOpacity onPress={() => setIndex(2)} style={{ height: 100, width: 100 }}>
                            <ImageBackground source={require('./../../../assets/img/male.png')} style={{ width: '100%', height: '100%' }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, alignSelf: 'center', top: 10 }}>Homem</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button onPress={() => navigation.navigate('Reg2')} style={styles.btnregister}>
                        <Text style={styles.textregister}>Próximo</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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