import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { useRef } from 'react';

const testee = Dimensions.get('window').height / 6
const teste = Dimensions.get('window').width / 1
const testeee = Dimensions.get('window').width / 5

export default function Reg6({ navigation }) {
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste5.jpg')}
                style={styles.img}>
                <Text style={styles.textTitle}>Calistenia Portugal</Text>
                <Text style={styles.textG}>Performance</Text>
                <View style={{ top: 20 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textperformance}>Máx. PullUps:</Text>
                        <View style={{ padding: 20 }}></View>
                        <TextInput keyboardType='numeric' style={styles.intput1} onSubmitEditing={() => ref_input2.current.focus()} returnKeyType="next"></TextInput></View>
                    <View style={{ padding: 5 }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textperformance}>Máx. PushUps:</Text>
                        <View style={{ padding: 20 }}></View>
                        <TextInput keyboardType='numeric' style={styles.intput2} ref={ref_input2} onSubmitEditing={() => ref_input3.current.focus()} returnKeyType="next"></TextInput></View>
                    <View style={{ padding: 5 }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textperformance}>Máx. Squads:</Text>
                        <View style={{ padding: 20 }}></View>
                        <TextInput keyboardType='numeric' style={styles.intput3} ref={ref_input3} onSubmitEditing={() => ref_input4.current.focus()} returnKeyType="next"></TextInput></View>
                    <View style={{ padding: 5 }}></View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textperformance}>Máx. Dips:</Text>
                        <View style={{ padding: 20 }}></View>
                        <TextInput keyboardType='numeric' style={styles.intput4} ref={ref_input4} returnKeyType="done"></TextInput></View>
                </View>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button onPress={() => navigation.navigate('SignUp')} style={styles.btnregister}>
                        <Text style={styles.textregister}>Próximo</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    intput1: {
        borderColor: "#fff",
        top: 180,
        borderWidth: 2,
        width: 50,
        height: 30,
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: testeee
    },
    intput2: {
        borderColor: "#fff",
        top: 180,
        borderWidth: 2,
        width: 50,
        height: 30,
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: Dimensions.get('window').width / 5.65
    },
    intput3: {
        borderColor: "#fff",
        top: 180,
        borderWidth: 2,
        width: 50,
        height: 30,
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: Dimensions.get('window').width / 4.85
    },
    intput4: {
        borderColor: "#fff",
        top: 180,
        borderWidth: 2,
        width: 50,
        height: 30,
        borderRadius: 10,
        color: 'white',
        textAlign: 'center',
        marginHorizontal: Dimensions.get('window').width / 3.75
    },
    textperformance: {
        paddingLeft: 50,
        fontSize: 17,
        fontWeight: "bold",
        color: '#fff',
        top: 150,
        paddingTop: 30,
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