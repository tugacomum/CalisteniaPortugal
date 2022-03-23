import MapView from 'react-native-maps';
import React from 'react'
import { StyleSheet } from 'react-native';

export default function maps() {
    return (
      <MapView
            initialRegion = {{
                latitude: 40.654998,
                longitude: -7.916765, 
                latidudeDelta: 0.0042,
                longitudeDelta: 0.0031, 
            }}
            style={styles.mapview}
      /> 
    );
}

const styles = StyleSheet.create({
   mapview: {
    position: 'absolute',
    top:0,
    left:0, 
    bottom:0, 
    right:0, 
   }, 
});