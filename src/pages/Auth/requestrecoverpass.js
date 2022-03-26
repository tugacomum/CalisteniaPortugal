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

export default function RequestRecoverPassword({ route, navigation }) {
    const URL_REGISTO = 'recover/send';
    const [login, setLogin] = useState('');
    const handleRecoverPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post(URL_REGISTO, JSON.stringify({ login }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            Alert.alert('Recupera a tua password com o email que enviámos')
            navigation.navigate('RecoverPassword')
        } catch (err) {
            Alert.alert('Erro', err.response.data.message)
        }
    }
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
                    <Text style={{ color: '#D21E1F', fontSize: 32 }}>Recuperar password</Text>
                    <Text>Recupera a tua password</Text>
                    <View style={{ marginTop: 22 }}>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Email</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setLogin(text)} value={login} />
                        </Item>
                    </View>
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.loginBtn} onPress={handleRecoverPassword}>
                            <Text style={{ color: '#ffffff' }}>Recuperar</Text>
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
        backgroundColor: '#D21E1F',
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
