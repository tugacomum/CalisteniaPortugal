import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { View } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Program() {
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <ScrollView refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
        <View style={{margin: 20}}>
        <Searchbar
            placeholder="Procurar programas"
            onChangeText={onChangeSearch}
            value={searchQuery}
        /></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    view: {
        margin: 10,
    },
});