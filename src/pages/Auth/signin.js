import { Input, Item, ListItem, Button, Body, Label } from "native-base";
import React, { useState } from "react";
import { Text, ScrollView, ImageBackground, Dimensions, View, StyleSheet, TextInput } from 'react-native';
import { useAuth } from "../../contexts/auth";

export default function SignIn({ navigation }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    function handleLogin() {
        return signIn({ login, password });
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
                    <Text style={{ color: '#D21E1F', fontSize: 34 }}>Bem-vindo</Text>
                    <Text>Verifica a tua conta
                        <Text style={{ color: '#D21E1F' }} onPress={() => navigation.navigate('VerifyEmail')}> aqui</Text>
                    </Text>
                    <View style={{ marginTop: 30 }}>
                        <Item floatingLabel style={{ borderColor: '#D21E1F' }}>
                            <Label>E-mail/Nickname</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setLogin(text)} value={login} />
                        </Item>
                        <Item floatingLabel style={{ borderColor: '#D21E1F', marginTop: 20 }}>
                            <Label>Password</Label>
                            <Input autoCapitalize='none' autoComplete='off' onChangeText={(text) => setPassword(text)} value={password} secureTextEntry={true} />
                        </Item>
                        <View style={styles.forgotPassView}>
                            <View style={{ flex: 1, marginRight: -20 }}>
                                <ListItem noBorder>
                                    <Body>
                                        <Text style={{ color: '#8f9195', alignSelf: 'flex-end' }} onPress={() => navigation.navigate('RequestRecoverPassword')}>Recuperar password</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.loginBtn} onPress={handleLogin}>
                            <Text style={{ color: '#ffffff' }}>Login</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

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
        height: 50,
        marginTop: 20,
        flexDirection: 'row',
    },
    loginBtn: {
        alignSelf: 'center',
        backgroundColor: '#D21E1F',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
    },
});