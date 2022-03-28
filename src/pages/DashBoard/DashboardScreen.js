import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import 'moment/locale/pt';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function dashboard({ navigation }) {
    let datesWhitelist = [{
        start: moment()
    }];
    let datesBlacklist = [moment().add(1, 'days')];
    return (
        <View style={{ padding: 20 }}>
            <View style={{}}>
                <Text style={{ color: 'black', fontSize: 15 }}>Esta semana</Text>
                <Text style={{ color: '#D21E1F', fontSize: 15, alignSelf: 'flex-end', top: -20 }} onPress={() => navigation.navigate('Calendar')}>Ver Calendário</Text>
                <CalendarStrip
                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{ type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white' }}
                    style={{ height: 80, paddingTop: 20, paddingBottom: 10, borderWidth: 2, borderRadius: 10, borderColor: 'white', backgroundColor: 'white', shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 5 }}
                    calendarHeaderPosition='above'
                    calendarHeaderStyle={{ top: -15, fontWeight: '100' }}
                    calendarColor={'transparent'}
                    dateNumberStyle={{ color: 'black' }}
                    dateNameStyle={{ color: 'black' }}
                    iconContainer={{ flex: 0.1 }}
                    datesWhitelist={datesWhitelist}
                    datesBlacklist={datesBlacklist}
                    highlightDateNameStyle={{ color: '#D21E1F' }}
                    highlightDateNumberStyle={{ color: '#D21E1F' }}
                />
                <Text style={{ color: 'black', fontSize: 15, paddingTop: 20 }}>A minha biblioteca</Text>
                <View style={{ top: 20, borderWidth: 1, borderColor: 'white', borderRadius: 10, height: 60, backgroundColor: 'white', fontWeight: 'bold', color: 'black', textAlignVertical: 'center', fontSize: 15, paddingLeft: 25, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 5, flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, textAlignVertical: 'center'}}>Treinos</Text>
                    <MaterialCommunityIcons name="arrow-right" color='black' size={20} onPress={() => navigation.navigate('EditProfile')} style={{textAlignVertical: 'center', paddingLeft: Dimensions.get('window').width / 1.6}}/>
                </View>
                <View style={{padding: 10}}></View>
                <View style={{ top: 20, borderWidth: 1, borderColor: 'white', borderRadius: 10, height: 60, backgroundColor: 'white', fontWeight: 'bold', color: 'black', textAlignVertical: 'center', fontSize: 15, paddingLeft: 25, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 5, flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, textAlignVertical: 'center'}}>Programas</Text>
                    <MaterialCommunityIcons name="arrow-right" color='black' size={20} onPress={() => navigation.navigate('EditProfile')} style={{textAlignVertical: 'center', paddingLeft: Dimensions.get('window').width / 1.78}}/>
                </View>
                <View style={{padding: 10}}></View>
                <View style={{ top: 20, borderWidth: 1, borderColor: 'white', borderRadius: 10, height: 60, backgroundColor: 'white', fontWeight: 'bold', color: 'black', textAlignVertical: 'center', fontSize: 15, paddingLeft: 25, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 2, shadowOffset: { height: 1, width: 1 }, elevation: 5, flexDirection: 'row'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, textAlignVertical: 'center'}}>Exercícios</Text>
                    <MaterialCommunityIcons name="arrow-right" color='black' size={20} onPress={() => navigation.navigate('EditProfile')} style={{textAlignVertical: 'center', paddingLeft: Dimensions.get('window').width / 1.74}}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    calendario: {
    },
    programa: {
        fontSize: 16,
        paddingTop: 10,
    },
    exercTitle: {
        paddingTop: 110,
        fontSize: 16,
        alignSelf: 'center'
    },
    programaTitle: {
        fontSize: 16,
        paddingTop: 120,
        fontWeight: 'bold',
    },
    plus1: {
        top: 120,
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
});