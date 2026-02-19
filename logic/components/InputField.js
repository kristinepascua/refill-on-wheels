import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyle';

const InputField = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder, 
  secureTextEntry = false,
  keyboardType = 'default'
}) => {
  return (
    <View style={{ marginBottom: 15 }}>
      {label && <Text style={[GlobalStyles.text, { marginBottom: 5 }]}>{label}</Text>}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#608bc1',
          borderRadius: 8,
          padding: 12,
          fontSize: 16,
          fontFamily: 'Poppins-Regular',
          backgroundColor: '#fff',
        }}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#999"
      />
    </View>
  );
};

export default InputField;