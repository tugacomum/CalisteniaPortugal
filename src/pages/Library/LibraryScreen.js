import React from 'react'
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';

const teste = Dimensions.get('window').width / 2.74
const testee = Dimensions.get('window').width / 9

export default function library({ navigation }) {
    return (
        <View>
            <View style={{ flexDirection: 'row', padding:22 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Programas</Text>
                </View>
                <View style={{ marginHorizontal: teste }}>
                    <Text style={{ color: '#D21E1F', fontWeight: 'bold', fontSize: 14, bottom: 2.5, marginVertical: 10 }} onPress={() => navigation.navigate('Program')}>Ver todos</Text>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 16, color: 'grey', paddingRight: 20, paddingLeft: 20, marginVertical: -4 }}>Alguns programas adaptados para todos os níveis de fitness.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ padding: 22, top: 10 }}>
                    <Image source={require('./../../../assets/img/image1.png')} style={{ borderRadius: 20, width: 250, height: 180 }} />
                    <View style={{ paddingLeft: 10, paddingRight: 10 }} />
                    <Image source={require('./../../../assets/img/image2.jpg')} style={{ borderRadius: 20, width: 250, height: 180 }} />
                    <View style={{ paddingLeft: 10, paddingRight: 10 }} />
                    <Image source={require('./../../../assets/img/image3.jpg')} style={{ borderRadius: 20, width: 250, height: 180 }} />
                    <View style={{ paddingLeft: 10, paddingRight: 35 }} />
                </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', padding:22 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Exercícios</Text>
                </View>
                <View style={{ marginHorizontal: testee, left: 13 }}>
                    <Text style={{ color: '#D21E1F', fontWeight: 'bold', fontSize: 14, bottom: 2.5, marginVertical: 10, marginHorizontal: 100 }} onPress={() => navigation.navigate('Exercise')}>Ver todos</Text>
                </View>
            </View>
            <View>
                <Text style={{ fontSize: 16, color: 'grey', paddingRight: 20, paddingLeft: 20, marginVertical: -4 }}>Livraria de exercícios extensivos com mais de 100 exercícios para todos os níveis.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ padding: 22, top: 10 }}>
                    <Image source={require('./../../../assets/img/image5.jpg')} style={{ borderRadius: 20, width: 250, height: 180 }} />
                    <View style={{ paddingLeft: 10, paddingRight: 10 }} />
                    <Image source={require('./../../../assets/img/image6.jpg')} style={{ borderRadius: 20, width: 250, height: 180 }} />
                    <View style={{ paddingLeft: 10, paddingRight: 10 }} />
                    <Image source={require('./../../../assets/img/image7.jpg')} style={{ borderRadius: 20, width: 250, height: 180 }} />
                    <View style={{ paddingLeft: 10, paddingRight: 35 }} />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
});