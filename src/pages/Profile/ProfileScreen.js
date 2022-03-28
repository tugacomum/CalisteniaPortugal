import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Image, View } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text
} from 'react-native-paper';
import { Button } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import { useAuth } from '../../contexts/auth';

export default function Profile({ navigation }) {
    const { user, logout } = useAuth();
    return (
        <>
            <Image source={require('./../../../assets/img/pfpback.jpg')} style={{ width: Dimensions.get('window').width / 1, height: 140, position: 'absolute', opacity: 0.8 }} />
            <SafeAreaView style={styles.container}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image
                            source={require('./../../../assets/img/teste4.jpg')}
                            size={80}
                        />
                        <MaterialCommunityIcons name="cog" color='white' style={{ left: Dimensions.get('window').width / 1.4, position: 'absolute', top: 15}} size={30} onPress={() => navigation.navigate('EditProfile')} />
                        <View style={{ marginLeft: 20 }}>
                            <Title style={[styles.title, {
                                marginTop: 10,
                                marginBottom: 5
                            }]}>@{user.nickname}</Title>
                            {user.bio == null ? <Caption style={styles.caption}>sem biografia</Caption> : <Caption style={styles.caption}>{user.bio}</Caption>}
                        </View>
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
        </>
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
        fontSize: 15,
        color: 'white',
    },
    caption: {
        top: -5,
        fontSize: 14,
        lineHeight: 14,
        color: 'white',
        alignSelf: 'flex-end',
    },
    row: {
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
    btn: {
        alignSelf: 'center',
        backgroundColor: '#D21E1F',
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        borderRadius: 10,
        top: 130,
    }
});