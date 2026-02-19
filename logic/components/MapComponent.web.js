import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapComponent({ tempLat, tempLong, style }) {
  return (
    <View style={style}>
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: `https://www.google.com/maps?q=${tempLat},${tempLong}&z=15&output=embed`,
        }}
      />
    </View>
  );
}
