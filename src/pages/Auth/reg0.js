import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const teste = Dimensions.get('window').height / 1.19
const testee = Dimensions.get('window').height / 1.6

export default function Reg0({ navigation }) {
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste4.jpg')}
                style={styles.img}>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', alignSelf: 'center', top:testee}}>Maximiza os teus resultados</Text>
                <Text style={{color: 'rgb(224,224,224)', fontSize: 17, fontWeight: 'bold', alignSelf: 'center', top:testee}}>Domina a calistenia com Calistenia Portugal</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
                    <Button onPress={() => navigation.navigate('Reg1')} style={styles.btnregister}>
                        <Text style={styles.textregister}>Registar</Text>
                    </Button>
                    <View style={{padding:6}}/>
                    <Button onPress={() => navigation.navigate('SignIn')} style={styles.btnlogin}>
                        <Text style={styles.textlogin}>Login</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
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
        backgroundColor: '#D21E1F',
        width: Dimensions.get('window').width / 2.2,
        justifyContent: 'center',
        borderRadius: 10,
    },
    textlogin: {
        color: 'black',
        alignSelf:'center',
        fontSize: 17,
    },
    textregister: {
        color: '#fff',
        alignSelf:'center',
        fontSize: 17,
    },
});