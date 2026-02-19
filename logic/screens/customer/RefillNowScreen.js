import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Modal } from 'react-native';
import { Check, MapPin, MapPinned, User, DollarSign, Droplet, Package, ArrowLeft, ShoppingCart, X } from 'lucide-react-native';
import styles from '../../styles/refillNowStyle';

export default function RefillNowScreen({ stations, onBack, onSubmit }) {
  const [selectedStation, setSelectedStation] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('Carmen, CDO');
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const selectedStationData = stations.find(s => s.id === selectedStation);
  const TRANSACTION_FEE_PER_JUG = 5;

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);

const PAYMENT_OPTIONS = ['COD', 'GCash', 'Maya'];


  // Calculate total in real-time
  const calculateTotal = () => {
    if (!selectedStationData || !quantity) return 0;
    const qty = parseInt(quantity || 0);
    const subtotal = selectedStationData.pricePerGallon * qty;
    const transactionFee = TRANSACTION_FEE_PER_JUG * qty;
    return subtotal + selectedStationData.deliveryFee + transactionFee;
  };

  const handleStationSelect = (stationId) => {
    setSelectedStation(stationId);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
    setQuantity('');
    setAddress('Carmen, CDO');
  };

  const handleSubmit = () => {
    if (!selectedStation || !quantity) {
      alert('Please fill all fields');
      return;
    }

    const station = stations.find(s => s.id === selectedStation);
    const qty = parseInt(quantity);
    const subtotal = station.pricePerGallon * qty;
    const transactionFee = TRANSACTION_FEE_PER_JUG * qty;
    const total = subtotal + station.deliveryFee + transactionFee;

    onSubmit({
      station: station.name,
      stationId: station.id,
      qty,
      total,
      address,
      paymentMethod,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      scheduled: false
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      {/* Header */}
      <View style={styles.headerGradient}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={onBack} style={styles.backButton}>
            <ArrowLeft color="#ffffff" size={24} />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Refill Now</Text>
            <Text style={styles.headerSubtitle}>Rush Order</Text>
          </View>
          <View style={styles.headerIcon}>
            <ShoppingCart color="#ffffff" size={24} />
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Select Station Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MapPin color="#133E87" size={20} />
            <Text style={styles.sectionTitle}>Select Refilling Station</Text>
          </View>
          
          {stations.map((station) => (
            <TouchableOpacity
              key={station.id}
              style={[
                styles.stationCard,
                selectedStation === station.id && styles.stationCardActive
              ]}
              onPress={() => handleStationSelect(station.id)}
            >
              <View style={styles.stationCardContent}>
                <View style={styles.stationIconContainer}>
                  <Text style={styles.stationEmoji}>{station.emoji}</Text>
                </View>
                <View style={styles.stationInfo}>
                  <Text style={styles.stationName}>{station.name}</Text>
                  <View style={styles.stationDetails}>
                    <View style={styles.stationDetailItem}>
                      <Droplet color="#6b7280" size={14} />
                      <Text style={styles.stationDetailText}>{station.waterType || 'Purified Water'}</Text>
                    </View>
                    <View style={styles.stationDetailItem}>
                      <DollarSign color="#6b7280" size={14} />
                      <Text style={styles.stationDetailText}>₱{station.pricePerGallon}/gal</Text>
                    </View>
                    <View style={styles.stationDetailItem}>
                      <MapPin color="#6b7280" size={14} />
                      <Text style={styles.stationDetailText}>{station.distance}</Text>
                    </View>
                  </View>
                </View>
              </View>
              {selectedStation === station.id && (
                <View style={styles.checkIconContainer}>
                  <Check color="#ffffff" size={20} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ height: 80 }} />
      </ScrollView>

      {/* Order Details Modal */}
      <Modal
        visible={showDetailsModal}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalTitle}>Order Details</Text>
                <Text style={styles.modalSubtitle}>{selectedStationData?.name}</Text>
              </View>
              <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                <X color="#6b7280" size={24} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
              {/* Station Info Card */}
              <View style={styles.modalInfoCard}>
                <View style={styles.modalInfoRow}>
                  <Droplet color="#133E87" size={18} />
                  <Text style={styles.modalInfoLabel}>Water Type:</Text>
                  <Text style={styles.modalInfoValue}>{selectedStationData?.waterType || 'Purified Water'}</Text>
                </View>
                <View style={styles.modalInfoRow}>
                  <DollarSign color="#133E87" size={18} />
                  <Text style={styles.modalInfoLabel}>Price:</Text>
                  <Text style={styles.modalInfoValue}>₱{selectedStationData?.pricePerGallon}/gallon</Text>
                </View>
              </View>

              {/* Input Fields */}
              <View style={styles.inputCard}>
                <Text style={styles.inputLabel}>Quantity (gallon(s))</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <Package color="#6b7280" size={20} />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter quantity"
                    placeholderTextColor="#9ca3af"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={setQuantity}
                  />
                  <Text style={styles.inputUnit}>gal</Text>
                </View>
              </View>

              <View style={styles.inputCard}>
                <Text style={styles.inputLabel}>Delivery Address</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.inputIconContainer}>
                    <MapPin color="#6b7280" size={20} />
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter delivery address"
                    placeholderTextColor="#9ca3af"
                    value={address}
                    onChangeText={setAddress}
                    multiline
                  />
                </View>
              </View>

              {/* Order Summary */}
              {quantity && selectedStationData && (
                <View style={styles.summaryCard}>
                  <Text style={styles.summaryTitle}>Order Summary</Text>
                  
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Quantity</Text>
                    <Text style={styles.summaryValue}>{quantity} gallon(s)</Text>
                  </View>
                  
                  <View style={styles.summaryDivider} />
                  
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Price per Gallon</Text>
                    <Text style={styles.summaryValue}>₱{selectedStationData.pricePerGallon}</Text>
                  </View>
                  
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Subtotal</Text>
                    <Text style={styles.summaryValue}>
                      ₱{selectedStationData.pricePerGallon * parseInt(quantity || 0)}
                    </Text>
                  </View>
                  
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Transaction Fee ({quantity} jug{parseInt(quantity) !== 1 ? 's' : ''})</Text>
                    <Text style={styles.summaryValue}>₱{TRANSACTION_FEE_PER_JUG * parseInt(quantity || 0)}</Text>
                  </View>
                  
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Delivery Fee</Text>
                    <Text style={styles.summaryValue}>₱{selectedStationData.deliveryFee}</Text>
                  </View>

                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Payment Method</Text>

                    <TouchableOpacity
                      style={styles.paymentSelector}
                      onPress={() => setShowPaymentModal(true)}
                    >
                      <Text style={styles.paymentValue}>{paymentMethod}</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.summaryDivider} />
                  
                  <View style={styles.summaryRowTotal}>
                    <Text style={styles.summaryLabelTotal}>Total Amount</Text>
                    <Text style={styles.summaryValueTotal}>₱{calculateTotal()}</Text>
                  </View>
              
                </View>
              )}

{/* PAYMENT METHOD MODAL */}
<Modal visible={showPaymentModal} transparent animationType="fade">
  <View style={styles.paymentOverlay}>
    <View style={styles.paymentModal}>
      <Text style={styles.paymentmodalTitle}>Choose Payment Method</Text>

      {PAYMENT_OPTIONS.map(method => (
        <TouchableOpacity
          key={method}
          style={styles.methodOption}
          onPress={() => {
            setPaymentMethod(method);
            setShowPaymentModal(false);

            if (method !== 'COD') {
              setShowPaymentScreen(true);
            }
          }}
        >
          <Text style={styles.methodText}>{method}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => setShowPaymentModal(false)}>
        <Text style={styles.closeLabel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

{/* PAYMENT SIMULATION SCREEN */}
<Modal visible={showPaymentScreen} transparent animationType="fade">
  <View style={styles.paymentOverlay}>
    <View style={styles.paymentScreenBox}>
      <Text style={styles.paymentTitle}>
        {paymentMethod === 'GCash' ? 'GCash Payment' : 'Maya Payment'}
      </Text>

      
      <View style={styles.fakeQR}>
        <Text style={styles.qrText}>
          {paymentMethod} will deduct this total amount from your account.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => {
          setShowPaymentScreen(false);
        }}
      >
        <Text style={styles.paymentButtonText}>Pay</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setShowPaymentScreen(false)}
        style={{ marginTop: 10 }}
      >
        <Text style={styles.paymentcloseLabel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

              <View style={{ height: 100 }} />
            </ScrollView>

            {/* Modal Footer Button */}
            {quantity && address && (
              <View style={styles.modalFooter}>
                <View style={styles.modalTotalContainer}>
                  <Text style={styles.modalTotalLabel}>Total</Text>
                  <Text style={styles.modalTotalAmount}>₱{calculateTotal()}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.modalPlaceOrderButton} 
                  onPress={handleSubmit}
                >
                  <ShoppingCart color="#ffffff" size={20} />
                  <Text style={styles.modalPlaceOrderButtonText}>Place Order</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('browse')}>
          <ShoppingCart color="#6b7280" size={24} />
          <Text style={styles.navText}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('track')}>
          <MapPinned color="#6b7280" size={24} />
          <Text style={styles.navText}>Track</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => onNavigate('profile')}>
          <User color="#6b7280" size={24} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}