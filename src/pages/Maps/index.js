import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import MapView, { Callout, Marker, Circle } from 'react-native-maps';
import * as Location from "expo-location";
import BottomSheet from "react-native-gesture-bottom-sheet";
import 'react-native-gesture-handler';
import { useRef } from 'react';

export default function maps() {
  const bottomSheet = useRef();
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
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={300} >
        <View><Text>teste</Text></View>
      </BottomSheet>
      <MapView
        style={styles.mapview}
        initialRegion={{
          latitude: 40.657,
          longitude: -7.914,
          latitudeDelta: 0.05,
          longitudeDelta: 0.005,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          setpin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        {/* Nossa loxalização */}
        <Marker
          coordinate={pin}
          onDragEnd={(e) => {
            setpin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>Você</Text>
          </Callout>
        </Marker>
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet.current.show()}
          coordinate={{
            latitude: 40.6556,
            longitude: -7.9155,
            latitudeDelta: 0.05,
            longitudeDelta: 0.005,
          }}
          draggable={true}
        >
          <Callout>
            <Text> Parque Aquilino Ribeiro </Text>
          </Callout>
        </Marker>
        <Circle
          center={{ latitude: 40.6556, longitude: -7.9155 }}
          radius={100}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet.current.show()}
          coordinate={{
            latitude: 40.65780,
            longitude: -7.9001,
            latitudeDelta: 0.05,
            longitudeDelta: 0.005,
          }}
          draggable={true}
        >
          <Callout>
            <Text> Parque do Fontelo </Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: 40.65780,
            longitude: -7.9001
          }}
          radius={300}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet.current.show()}
          coordinate={{
            latitude: 40.6655,
            longitude: -7.9032,
            latitudeDelta: 0.05,
            longitudeDelta: 0.005,
          }}
          draggable={true}
        >
          <Callout>
            <Text> Parque de Santiago</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: 40.6655,
            longitude: -7.9032
          }}
          radius={250}
        />
        {/* Jardim  */}
        <Marker
          onPress={() => bottomSheet.current.show()}
          coordinate={{
            latitude: 40.6569,
            longitude: -7.92666,
            latitudeDelta: 0.05,
            longitudeDelta: 0.005,
          }}
          draggable={true}
        >
          <Callout>
            <Text> Jardim Rua Quinta do Bosque</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: 40.6569,
            longitude: -7.92666
          }}
          radius={50}
        />
        {/* Parques */}
        <Marker
          onPress={() => bottomSheet.current.show()}
          coordinate={{
            latitude: 40.66289,
            longitude: -7.9219915,
            latitudeDelta: 0.05,
            longitudeDelta: 0.005,
          }}
          draggable={true}>
          <Callout>
            <Text> Parque Linear do Rio Pavia</Text>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: 40.66289,
            longitude: -7.9219915
          }}
          radius={100}/>
      </MapView>
    </View>

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
    height: Dimensions.get("window").height,
  }
});