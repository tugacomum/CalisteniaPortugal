import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function calendar({navigation}) {
    return (
        <View>
            <Calendar hideExtraDays style={styles.calendario} theme={{
                arrowColor: '#F95A41',
                todayTextColor: '#F95A41',
            }} />
            <View style={{ alignItems: 'center' }}>
                <View style={{ alignSelf: 'center' }}>
                    <ImageBackground source={require('./../../../assets/img/dumbbell.png')} style={styles.plus1} />
                    <Text style={styles.exercTitle}>Nenhuma sessão de treino</Text>
                    <Text style={{
                        fontSize: 16,
                        alignSelf: 'center',
                        color: 'black',
                        textAlign: 'center'
                    }}>Navega na nossa livraria e adiciona os teus exercícios favoritos!</Text>
                </View>
            </View>
        </View>
    );
}

LocaleConfig.locales["pt"] = {
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthNamesShort: ["Jan.", "Fev.", "Mar.", "Abr.", "Mai.", "Jun.", "Jul.", "Ago.", "Set.", "Out.", "Nov.", "Dez."],
    today: ["Today"],
    dayNames: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    dayNamesShort: ["Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sab.", "Dom."]
}
LocaleConfig.defaultLocale = "pt"

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