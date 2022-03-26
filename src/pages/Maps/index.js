import React from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from "expo-location";

export default function maps() {
  const [pin, setpin] = React.useState({
    latitude: 0,
    longitude: 0,
  });
  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to acess location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setpin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapview}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          setpin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker
          coordinate={pin}
          draggable={true}
          onDragEnd={(e) => {
            setpin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}>
          <Callout>
            <Text> Teste</Text>
          </Callout>
        </Marker>
      </MapView >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignContent: "center",

  },
  mapview: {

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height 
  },
});