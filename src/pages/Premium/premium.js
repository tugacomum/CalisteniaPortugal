import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
const teste = Dimensions.get('window').height / 1.19
const testee = Dimensions.get('window').height / 1.6

export default function Premium() {
    return (
      <View></View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%'
    },
    btnlogin: {
        top: teste,
        backgroundColor: 'white',
        width: Dimensions.get('window').width / 2.2,
        justifyContent: 'center',
        borderRadius: 10,
    },
    btnregister: {
        top: teste,
        backgroundColor: '#F95A41',
        width: Dimensions.get('window').width / 2.2,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textlogin: {
        color: 'black',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
    textregister: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
    },
});