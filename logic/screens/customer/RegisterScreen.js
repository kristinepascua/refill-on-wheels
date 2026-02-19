import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { GlobalStyles } from '../../styles/GlobalStyle';

const RegisterScreen = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    barangay: '',
    contactNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    console.log('Registration data:', formData);

    // Navigate manually to Login screen
    onNavigate('login');
  };

  return (
    <View style={[GlobalStyles.container, GlobalStyles.background]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.title}>CREATE YOUR ACCOUNT</Text>
          <Text style={[GlobalStyles.subtitle, { marginBottom: 30 }]}>
            Start your notice delivery journey with us!
          </Text>
          
          <InputField label="First Name" value={formData.firstName} onChangeText={(value) => handleChange('firstName', value)} placeholder="Enter your first name" />
          <InputField label="Last Name" value={formData.lastName} onChangeText={(value) => handleChange('lastName', value)} placeholder="Enter your last name" />
          <InputField label="Address" value={formData.address} onChangeText={(value) => handleChange('address', value)} placeholder="Enter your complete address" />
          <InputField label="Contact Number" value={formData.contactNumber} keyboardType="phone-pad" onChangeText={(value) => handleChange('contactNumber', value)} placeholder="Enter your phone number" />
          <InputField label="Email" value={formData.email} keyboardType="email-address" onChangeText={(value) => handleChange('email', value)} placeholder="Enter your email" />
          <InputField label="Password" value={formData.password} secureTextEntry onChangeText={(value) => handleChange('password', value)} placeholder="Create a password" />
          
          <Button title="SIGN UP" onPress={handleSignUp} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Text style={GlobalStyles.text}>Already have an account? </Text>
            <TouchableOpacity onPress={() => onNavigate('login')}>
              <Text style={[GlobalStyles.text, { color: '#133e87', fontFamily: 'Poppins-SemiBold' }]}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={GlobalStyles.text}>9:41</Text>
      </View>
    </View>
  );
};

export default RegisterScreen;
