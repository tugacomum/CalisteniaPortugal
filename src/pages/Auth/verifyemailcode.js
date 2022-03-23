import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Dimensions } from 'react-native';
import { Alert } from 'react-native';
import { api } from '../../services/api';
import { ScrollView, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import { Input, Item } from "native-base";
import { Label } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import { useRef } from 'react';

export default function VerifyEmail({ route, navigation }) {
    const URL_REGISTO = 'verify';
    const [teste1, setTeste1] = useState('');
    const [teste2, setTeste2] = useState('');
    const [teste3, setTeste3] = useState('');
    const [teste4, setTeste4] = useState('');
    const [teste5, setTeste5] = useState('');
    const [teste6, setTeste6] = useState('');
    const [login, setLogin] = useState('');
    const code = teste1 + teste2 + teste3 + teste4 + teste5 + teste6;

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(URL_REGISTO, JSON.stringify({ login, code }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            Alert.alert('Email verificado com sucesso')
            navigation.navigate('SignIn')
        } catch (err) {
            Alert.alert('Erro', err.response.data.message)
        }
    }
    const ref_input6 = useRef();
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#ffffff' }}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
                source={require('./../../../assets/img/teste4.jpg')}
                style={{
                    height: Dimensions.get('window').height / 2.5,
                }}>
                <View style={styles.brandView}>
                    <Text style={styles.brandViewText}>Calistenia Portugal</Text>
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={{ color: '#F95A41', fontSize: 34 }}>Verificar conta</Text>
                    <Text>Introduz o teu email e o código que enviamos!</Text>
                    <View style={{ marginTop: 22 }}>
                        <Item floatingLabel style={{ borderColor: '#F95A41', marginTop: 20 }}>
                            <Label>Email</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setLogin(text)} value={login} />
                        </Item>
                        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                            <TextInput maxLength={1} onSubmitEditing={() => ref_input2.current.focus()} returnKeyType="next" onChangeText={(text) => setTeste1(text)} value={teste1} keyboardType='numeric' style={{ borderWidth: 2, borderColor: 'black', backgroundColor: 'transparent', marginTop: 40, textAlign: 'center', width: 50, height: 50, color: 'black', borderRadius: 10, opacity: 0.7, fontSize: 20 }} />
                            <View style={{ padding: 5 }} />
                            <TextInput maxLength={1} ref={ref_input2} onSubmitEditing={() => ref_input3.current.focus()} returnKeyType="next" onChangeText={(text) => setTeste2(text)} value={teste2} keyboardType='numeric' style={{ borderWidth: 2, borderColor: 'black', backgroundColor: 'transparent', marginTop: 40, textAlign: 'center', width: 50, height: 50, color: 'black', borderRadius: 10, opacity: 0.7, fontSize: 20 }} />
                            <View style={{ padding: 5 }} />
                            <TextInput maxLength={1} ref={ref_input3} onSubmitEditing={() => ref_input4.current.focus()} returnKeyType="next" onChangeText={(text) => setTeste3(text)} value={teste3} keyboardType='numeric' style={{ borderWidth: 2, borderColor: 'black', backgroundColor: 'transparent', marginTop: 40, textAlign: 'center', width: 50, height: 50, color: 'black', borderRadius: 10, opacity: 0.7, fontSize: 20 }} />
                            <View style={{ padding: 5 }} />
                            <TextInput maxLength={1} ref={ref_input4} onSubmitEditing={() => ref_input5.current.focus()} returnKeyType="next" onChangeText={(text) => setTeste4(text)} value={teste4} keyboardType='numeric' style={{ borderWidth: 2, borderColor: 'black', backgroundColor: 'transparent', marginTop: 40, textAlign: 'center', width: 50, height: 50, color: 'black', borderRadius: 10, opacity: 0.7, fontSize: 20 }} />
                            <View style={{ padding: 5 }} />
                            <TextInput maxLength={1} ref={ref_input5} onSubmitEditing={() => ref_input6.current.focus()} returnKeyType="next" onChangeText={(text) => setTeste5(text)} value={teste5} keyboardType='numeric' style={{ borderWidth: 2, borderColor: 'black', backgroundColor: 'transparent', marginTop: 40, textAlign: 'center', width: 50, height: 50, color: 'black', borderRadius: 10, opacity: 0.7, fontSize: 20 }} />
                            <View style={{ padding: 5 }} />
                            <TextInput maxLength={1} ref={ref_input6} returnKeyType="done" onChangeText={(text) => setTeste6(text)} value={teste6} keyboardType='numeric' style={{ borderWidth: 2, borderColor: 'black', backgroundColor: 'transparent', marginTop: 40, textAlign: 'center', width: 50, height: 50, color: 'black', borderRadius: 10, opacity: 0.7, fontSize: 20 }} />
                        </View>
                    </View>
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.loginBtn} onPress={handleVerify}>
                            <Text style={{ color: '#ffffff' }}>Verificar</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandViewText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#ffffff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    forgotPassView: {
        height: 30,
        flexDirection: 'row',
    },
    loginBtn: {
        top: 30,
        alignSelf: 'center',
        backgroundColor: '#F95A41',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
    },
    intput3: {
        borderColor: "black",
        top: 180,
        borderWidth: 2,
        width: 50,
        height: 30,
        borderRadius: 10,
        color: 'black',
        textAlign: 'center',
        alignSelf: 'center',
    },
});
