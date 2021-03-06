import React from 'react'
import { View, Text, StyleSheet, ImageBackground, RefreshControl, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function calendar({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
    return (
        <View>
            <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
            <Calendar hideExtraDays style={styles.calendario} theme={{
                arrowColor: '#D21E1F',
                todayTextColor: '#D21E1F',
            }} />
            <View style={{ alignItems: 'center' }}>
                <View style={{ alignSelf: 'center' }}>
                    <ImageBackground source={require('./../../../assets/img/dumbbell.png')} style={styles.plus1} />
                    <Text style={styles.exercTitle}>Sem sessões de treino</Text>
                </View>
            </View>
            </ScrollView>
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
        fontSize: 15,
        alignSelf: 'center'
    },
    programaTitle: {
        fontSize: 16,
        paddingTop: 120,
        fontWeight: 'bold',
    },
    plus1: {
        top: 90,
        height: 60,
        width: 60,
        alignSelf: 'center'
    },
});