// Lab 6 - Task 2 Compliance: Adapted Web Login to Mobile Layout

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { GlobalStyles } from '../../styles/GlobalStyle';

const LoginScreen = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic here
    console.log('Login attempted with:', { email, password });
    // After successful login, navigate to Order screen
    onNavigate('home');
  };

  return (
    <View style={[GlobalStyles.container, GlobalStyles.background]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={GlobalStyles.cardd}>
          <Text style={GlobalStyles.title}>WELCOME BACK!</Text>
          <Text style={[GlobalStyles.subtitle, { marginBottom: 30 }]}>LOG IN</Text>
          
          <InputField
            label="Email or Phone Number"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email or phone"
            keyboardType="email-address"
          />
          
          <InputField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
          
          <Button title="LOG IN" onPress={handleLogin} />
          
          <TouchableOpacity style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={[GlobalStyles.text, { color: '#133e87' }]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Text style={GlobalStyles.text}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => onNavigate('register')}>
              <Text style={[GlobalStyles.text, { color: '#133e87', fontFamily: 'Poppins-SemiBold' }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Time Display */}
      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={GlobalStyles.text}>9:41</Text>
      </View>
    </View>
  );
};

export default LoginScreen;