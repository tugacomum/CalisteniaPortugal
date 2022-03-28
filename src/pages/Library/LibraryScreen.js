import React from 'react'
import { View, Text, StyleSheet, Dimensions, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const teste = Dimensions.get('window').width / 2.74
const testee = Dimensions.get('window').width / 9
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function library({ navigation }) {
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
    return (
        <ScrollView 
            refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }>
            <Image source={require('./../../../assets/img/seila.png')} style={{ width: Dimensions.get('window').width, height: 240, position: 'absolute', backgroundColor: 'black', opacity: 0.8 }} />
            <View style={{ flexDirection: 'row', padding: 30, top: 10 }}>
                <Text style={{ borderColor: 'white', backgroundColor: 'white', borderWidth: 1, color: 'black', borderRadius: 5, fontWeight: 'bold', width: 170, textAlign: 'center' }}>DESTAQUE DE HOJE</Text>
                <MaterialCommunityIcons name="magnify" color='white' style={{ left: Dimensions.get('window').width / 1.3, position: 'absolute', top: 20, backgroundColor: 'white', opacity: 0.6, borderRadius: 30, width: 50, height: 50, textAlignVertical: 'center', textAlign: 'center', color: 'black' }} size={40} />
            </View>
            <View style={{paddingLeft: 30, paddingTop: 30}}>
                <Text style={{ fontWeight: 'bold', borderWidth: 1, borderRadius: 5, borderColor: '#D21E1F', backgroundColor: '#D21E1F', color: 'white', width: 100, textAlign: 'center', opacity: 0.9}}>AVANÇADO</Text>
                <Text style={{ color: 'white', left: 5, top:5, color: 'white'}}>Calistenia • Construção de força</Text>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, paddingTop: 10, left: 5}}>Dia de prancha</Text>
            </View>
            <View style={{ paddingTop: 50 }}>
                <View style={{ flexDirection: 'row', padding: 22 }}>
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
                <View style={{ flexDirection: 'row', padding: 22 }}>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
});