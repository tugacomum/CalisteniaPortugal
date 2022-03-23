import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';

const teste = Dimensions.get('window').height / 1.28
const testee = Dimensions.get('window').height / 4

export default function Reg3({ navigation }) {
    return (
        <View>
            <ImageBackground
                source={require('./../../../assets/img/teste5.jpg')}
                style={styles.img}>
                <Text style={styles.textTitle}>Calistenia Portugal</Text>
                <Text style={styles.textP}>Altura</Text>
                <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button onPress={() => navigation.navigate('Reg4')} style={styles.btnregister}>
                        <Text style={styles.textregister}>Próximo</Text>
                    </Button>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    textP: {
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