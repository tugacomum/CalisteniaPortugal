import React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function Program() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{margin: 20}}>
        <Searchbar
            placeholder="Procurar programas"
            onChangeText={onChangeSearch}
            value={searchQuery}
        /></View>
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