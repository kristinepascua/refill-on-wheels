import React from 'react';
import MapView, { Marker } from 'react-native-maps';

export default function MapComponent({ tempLat, tempLong, setTempLat, setTempLong, style }) {
  return (
    <MapView
      style={style}
      initialRegion={{
        latitude: tempLat,
        longitude: tempLong,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        coordinate={{
          latitude: tempLat,
          longitude: tempLong,
        }}
        draggable
        onDragEnd={(e) => {
          setTempLat(e.nativeEvent.coordinate.latitude);
          setTempLong(e.nativeEvent.coordinate.longitude);
        }}
      />
    </MapView>
  );
}
