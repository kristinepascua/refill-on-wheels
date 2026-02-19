import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../components/Button';
import { GlobalStyles } from '../../styles/GlobalStyle';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={[GlobalStyles.container, GlobalStyles.background]}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <View>
          <Image
            source={require('../../../assets/logo.png')}
            style= {{ 
          width: 180,
          height: 180,
          borderRadius: 60,
          marginBottom: 20,
          justifyContent: 'center',
          alignItems: 'center',}}
          />
           </View>
        
        <Text style={GlobalStyles.title}>Refill on Wheels</Text>
        <Text style={[GlobalStyles.subtitle, { marginBottom: 40 }]}>
          Guaranteed water delivery with one tap!
        </Text>
        
        <View style={{ width: '100%', paddingHorizontal: 20 }}>
          <Button 
            title="LOG IN" 
            onPress={() => navigation.navigate('login')}
          />
          <Button 
            title="SIGN UP" 
            variant="secondary"
            onPress={() => navigation.navigate('register')}
          />
        </View>
      </View>
      
      {/* Time Display */}
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={GlobalStyles.text}>9:41</Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;