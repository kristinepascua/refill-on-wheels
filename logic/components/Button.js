import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyle';

const Button = ({ title, onPress, variant = 'primary', style }) => {
  const buttonStyle = variant === 'primary' 
    ? GlobalStyles.buttonPrimary 
    : GlobalStyles.buttonSecondary;

  return (
    <TouchableOpacity 
      style={[buttonStyle, style]} 
      onPress={onPress}
    >
      <Text style={GlobalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;