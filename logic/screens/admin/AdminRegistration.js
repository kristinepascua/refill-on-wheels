import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Modal } from 'react-native';
import { Building, MapPin, Phone, Mail, User, DollarSign, X, CheckCircle, FileText } from 'lucide-react-native';
import styles from '../../styles/adminStyle';

export default function AdminRegistration({ onRegister }) {
  const [formData, setFormData] = useState({
    stationName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    pricePerGallon: '',
    deliveryFee: '',
    waterTypes: []
  });
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const toggleWaterType = (type) => {
    if (formData.waterTypes.includes(type)) {
      setFormData({
        ...formData,
        waterTypes: formData.waterTypes.filter(t => t !== type)
      });
    } else {
      setFormData({
        ...formData,
        waterTypes: [...formData.waterTypes, type]
      });
    }
  };

  const handleSubmit = () => {
    if (!formData.stationName || !formData.ownerName || !formData.email || 
        !formData.phone || !formData.address || !formData.pricePerGallon || 
        !formData.deliveryFee || formData.waterTypes.length === 0) {
      alert('Please fill all fields');
      return;
    }
    // Show terms and conditions modal
    setShowTermsModal(true);
  };

  const handleAgreeAndRegister = () => {
    if (!agreedToTerms) {
      alert('Please accept the terms and conditions to continue');
      return;
    }
    setShowTermsModal(false);
    onRegister(formData);
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" backgroundColor='#608BC1'/>
      <View style={styles.headerr}>
        <Image
          style={styles.headerImage}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.headerTitle}>Partner Registration</Text>
        <Text style={styles.headerSubtitle}>Join Refill On Wheels!</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 250 }} style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Station Name</Text>
            <View style={styles.inputContainer}>
              <Building color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter station name"
                placeholderTextColor="#133E87"
                value={formData.stationName}
                onChangeText={(text) => setFormData({...formData, stationName: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Owner Name</Text>
            <View style={styles.inputContainer}>
              <User color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter owner name"
                placeholderTextColor="#133E87"
                value={formData.ownerName}
                onChangeText={(text) => setFormData({...formData, ownerName: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Email</Text>
            <View style={styles.inputContainer}>
              <Mail color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter email"
                placeholderTextColor="#133E87"
                keyboardType="email-address"
                value={formData.email}
                onChangeText={(text) => setFormData({...formData, email: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Phone</Text>
            <View style={styles.inputContainer}>
              <Phone color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter phone number"
                placeholderTextColor="#133E87"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(text) => setFormData({...formData, phone: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Address</Text>
            <View style={styles.inputContainer}>
              <MapPin color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter station address"
                placeholderTextColor="#133E87"
                value={formData.address}
                onChangeText={(text) => setFormData({...formData, address: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Price per Gallon (₱)</Text>
            <View style={styles.inputContainer}>
              <DollarSign color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter price"
                placeholderTextColor="#133E87"
                keyboardType="numeric"
                value={formData.pricePerGallon}
                onChangeText={(text) => setFormData({...formData, pricePerGallon: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Delivery Fee (₱) (per kilometer)</Text>
            <View style={styles.inputContainer}>
              <DollarSign color="#6b7280" size={20} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Enter delivery fee"
                placeholderTextColor="#133E87"
                keyboardType="numeric"
                value={formData.deliveryFee}
                onChangeText={(text) => setFormData({...formData, deliveryFee: text})}
              />
            </View>
          </View>

          <View style={styles.formSection}>
            <Text style={styles.formLabel}>Water Types Available</Text>
            <View style={styles.waterTypeContainer}>
              {['Purified', 'Alkaline', 'Mineral'].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.waterTypeChip,
                    formData.waterTypes.includes(type) && styles.waterTypeChipActive
                  ]}
                  onPress={() => toggleWaterType(type)}
                >
                  <Text style={[
                    styles.waterTypeChipText,
                    formData.waterTypes.includes(type) && styles.waterTypeChipTextActive
                  ]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Continue to Terms</Text>
          </TouchableOpacity>

          <View style={{ height: 50 }} />
        </View>
      </ScrollView>

      {/* Terms and Conditions Modal */}
      <Modal
        visible={showTermsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowTermsModal(false)}
      >
        <View style={styles.termsModalOverlay}>
          <View style={styles.termsModalContainer}>
            {/* Modal Header */}
            <View style={styles.termsModalHeader}>
              <View style={styles.termsHeaderLeft}>
                <FileText color="#133E87" size={24} />
                <View style={styles.termsHeaderText}>
                  <Text style={styles.termsModalTitle}>Terms & Agreement</Text>
                  <Text style={styles.termsModalSubtitle}>Partner Registration</Text>
                </View>
              </View>
              <TouchableOpacity 
                onPress={() => setShowTermsModal(false)} 
                style={styles.termsCloseButton}
              >
                <X color="#6b7280" size={24} />
              </TouchableOpacity>
            </View>

            {/* Terms Content */}
            <ScrollView style={styles.termsContent} showsVerticalScrollIndicator={false}>
              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>1. Partnership Agreement</Text>
                <Text style={styles.termsText}>
                  By registering as a partner with Refill On Wheels, you agree to provide water refilling services to customers through our platform. You acknowledge that you operate an independent water refilling station and will maintain all necessary permits and certifications required by local authorities.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>2. Service Standards</Text>
                <Text style={styles.termsText}>
                  You agree to maintain high-quality water standards, ensure timely delivery of orders, and provide excellent customer service. All water must meet local health and safety regulations. You must notify customers immediately of any delays or issues with their orders.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>3. Pricing and Payments</Text>
                <Text style={styles.termsText}>
                  You have full control over your pricing structure including price per gallon and delivery fees. Refill On Wheels will collect a platform fee of 10% from each completed transaction. Payments will be processed and transferred to your account within 7 business days.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>4. Order Fulfillment</Text>
                <Text style={styles.termsText}>
                  You must fulfill all accepted orders within the agreed timeframe. For "Refill Now" orders, delivery should be completed within 2 hours. For scheduled deliveries, you must arrive within the specified time window. Failure to fulfill orders may result in penalties or account suspension.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>5. Quality Assurance</Text>
                <Text style={styles.termsText}>
                  All water supplied must be properly purified and safe for consumption. You must maintain proper equipment, conduct regular testing, and keep records of water quality checks. Any customer complaints regarding water quality will be investigated.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>6. Insurance and Liability</Text>
                <Text style={styles.termsText}>
                  You are responsible for maintaining appropriate business insurance and liability coverage. Refill On Wheels is not liable for any damages, injuries, or losses arising from your water refilling services. You agree to indemnify and hold harmless Refill On Wheels from any claims.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>7. Account Termination</Text>
                <Text style={styles.termsText}>
                  Either party may terminate this partnership with 30 days written notice. Refill On Wheels reserves the right to immediately suspend or terminate your account for violations of terms, fraud, repeated customer complaints, or failure to maintain quality standards.
                </Text>
              </View>

              <View style={styles.termsSection}>
                <Text style={styles.termsSectionTitle}>8. Data Privacy</Text>
                <Text style={styles.termsText}>
                  You agree to protect customer information and use it only for order fulfillment. Customer data must not be shared with third parties or used for marketing without explicit consent. You must comply with all applicable data protection laws.
                </Text>
              </View>

              <View style={styles.termsHighlight}>
                <CheckCircle color="#16a34a" size={20} />
                <Text style={styles.termsHighlightText}>
                  By accepting these terms, you confirm that you have read, understood, and agree to comply with all the terms and conditions outlined above.
                </Text>
              </View>

              <View style={{ height: 20 }} />
            </ScrollView>

            {/* Agreement Checkbox */}
            <View style={styles.termsAgreementSection}>
              <TouchableOpacity 
                style={styles.checkboxContainer}
                onPress={() => setAgreedToTerms(!agreedToTerms)}
              >
                <View style={[
                  styles.checkbox,
                  agreedToTerms && styles.checkboxActive
                ]}>
                  {agreedToTerms && <CheckCircle color="#ffffff" size={20} />}
                </View>
                <Text style={styles.checkboxLabel}>
                  I have read and agree to the Terms & Conditions
                </Text>
              </TouchableOpacity>
            </View>

            {/* Action Buttons */}
            <View style={styles.termsModalFooter}>
              <TouchableOpacity 
                style={styles.termsDeclineButton}
                onPress={() => setShowTermsModal(false)}
              >
                <Text style={styles.termsDeclineButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[
                  styles.termsAcceptButton,
                  !agreedToTerms && styles.termsAcceptButtonDisabled
                ]}
                onPress={handleAgreeAndRegister}
                disabled={!agreedToTerms}
              >
                <Text style={styles.termsAcceptButtonText}>Accept & Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}