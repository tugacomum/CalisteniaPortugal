import React from 'react';
import { View, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
} from 'react-native-paper';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
export default function Profile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={require('./../../../assets/img/teste4.jpg')}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom: 5,
                        }]}>Bruno Piloto</Title>
                        <Caption style={styles.caption}>@tugacomum</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={{}}>
                    <Button style={styles.loginBtn} onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Editar perfil</Text>
                    </Button>
                </View>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>Viseu, Portugal</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>+351 969227815</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: "#777777", marginLeft: 20 }}>internetsoundseasy@gmail.com</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 100, alignSelf: 'center' }}>
                <ImageBackground source={require('./../../../assets/img/dumbbell.png')} style={styles.plus1} />
                    <Text style={styles.exercTitle}>Histórico de exercícios</Text>
                    <Text style={styles.exercTitle}>Todos os programas de exercícios que já começaste vão aparecer aqui.</Text>
                </View>
            </View>
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.btn}>
                            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Começar</Text>
                        </Button>
                    </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 20,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        top: 30,
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    loginBtn: {
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width / 1.5,
        justifyContent: 'center',
        borderColor: 'grey',
        height: 40,
        borderRadius: 5,
        alignSelf: 'flex-start'
    },
    plus1: {
        top: 80,
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    exercTitle: {
        top: 60,
        paddingTop: 10,
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center'
    },
    btn :{
        alignSelf: 'center',
        backgroundColor: '#F95A41',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
        top:130,      
    }
});