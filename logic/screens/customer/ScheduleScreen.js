import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, TextInput, Modal } from 'react-native';
import { Check, MapPin, MapPinned, User, DollarSign, Droplet, ShoppingCart, Package, ArrowLeft, Calendar, Clock, X } from 'lucide-react-native';
import styles from '../../styles/scheduleStyle';

export default function ScheduleScreen({ stations, onBack, onSubmit }) {
  const [selectedStation, setSelectedStation] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [address, setAddress] = useState('Carmen, CDO');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const selectedStationData = stations.find(s => s.id === selectedStation);
  const TRANSACTION_FEE_PER_JUG = 5;

  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);

const PAYMENT_OPTIONS = ['Cash on Delivery', 'GCash', 'Maya'];


  // Generate next 7 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        fullDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      });
    }
    return dates;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 18; hour++) {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      slots.push(`${displayHour}:00 ${period}`);
      if (hour < 18) {
        slots.push(`${displayHour}:30 ${period}`);
      }
    }
    return slots;
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

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
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleSubmit = () => {
    if (!selectedStation || !quantity || !selectedDate || !selectedTime) {
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
      time: `${selectedDate} at ${selectedTime}`,
      scheduled: true
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
            <Text style={styles.headerTitle}>Schedule Delivery</Text>
            <Text style={styles.headerSubtitle}>Book for later</Text>
          </View>
          <View style={styles.headerIcon}>
            <Calendar color="#ffffff" size={24} />
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
              <View style={styles.modalHeaderText}>
                <Text style={styles.modalTitle}>Schedule Order</Text>
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
                  <View style={styles.modalInfoTextContainer}>
                    <Text style={styles.modalInfoLabel}>Water Type</Text>
                    <Text style={styles.modalInfoValue}>{selectedStationData?.waterType || 'Purified Water'}</Text>
                  </View>
                </View>
                <View style={styles.modalInfoRow}>
                  <DollarSign color="#133E87" size={18} />
                  <View style={styles.modalInfoTextContainer}>
                    <Text style={styles.modalInfoLabel}>Price per Gallon</Text>
                    <Text style={styles.modalInfoValue}>₱{selectedStationData?.pricePerGallon}</Text>
                  </View>
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

              {/* Date Selection */}
              {quantity && (
                <>
                  <View style={styles.scheduleSection}>
                    <View style={styles.sectionHeader}>
                      <Calendar color="#133E87" size={20} />
                      <Text style={styles.sectionTitle}>Select Date</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScrollView}>
                      {dates.map((dateItem, index) => (
                        <TouchableOpacity
                          key={index}
                          style={[
                            styles.dateCard,
                            selectedDate === dateItem.fullDate && styles.dateCardActive
                          ]}
                          onPress={() => setSelectedDate(dateItem.fullDate)}
                        >
                          <Text style={[
                            styles.dateDay,
                            selectedDate === dateItem.fullDate && styles.dateDayActive
                          ]}>
                            {dateItem.day}
                          </Text>
                          <Text style={[
                            styles.dateNumber,
                            selectedDate === dateItem.fullDate && styles.dateNumberActive
                          ]}>
                            {dateItem.date}
                          </Text>
                          <Text style={[
                            styles.dateMonth,
                            selectedDate === dateItem.fullDate && styles.dateMonthActive
                          ]}>
                            {dateItem.month}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>

                  {/* Time Selection */}
                  {selectedDate && (
                    <View style={styles.scheduleSection}>
                      <View style={styles.sectionHeader}>
                        <Clock color="#133E87" size={20} />
                        <Text style={styles.sectionTitle}>Select Time</Text>
                      </View>
                      <View style={styles.timeGrid}>
                        {timeSlots.map((time, index) => (
                          <TouchableOpacity
                            key={index}
                            style={[
                              styles.timeCard,
                              selectedTime === time && styles.timeCardActive
                            ]}
                            onPress={() => setSelectedTime(time)}
                          >
                            <Clock 
                              color={selectedTime === time ? "#ffffff" : "#6b7280"} 
                              size={18} 
                            />
                            <Text style={[
                              styles.timeText,
                              selectedTime === time && styles.timeTextActive
                            ]}>
                              {time}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                  )}

                  {/* Scheduled Info Card */}
                  {selectedDate && selectedTime && (
                    <View style={styles.scheduledInfoCard}>
                      <View style={styles.scheduledIconContainer}>
                        <Calendar color="#133E87" size={24} />
                      </View>
                      <View style={styles.scheduledInfo}>
                        <Text style={styles.scheduledLabel}>Scheduled For</Text>
                        <Text style={styles.scheduledValue}>{selectedDate} at {selectedTime}</Text>
                      </View>
                    </View>
                  )}
                </>
              )}

              {/* Order Summary */}
              {quantity && selectedStationData && selectedDate && selectedTime && (
                <View style={styles.summaryCard}>
                  <Text style={styles.summaryTitle}>Order Summary</Text>
                  
                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Quantity</Text>
                    <Text style={styles.summaryValue}>{quantity} gallon(s)</Text>
                  </View>

                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Scheduled For</Text>
                    <Text style={styles.summaryValue}>{selectedDate}</Text>
                  </View>

                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Time</Text>
                    <Text style={styles.summaryValue}>{selectedTime}</Text>
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
            {quantity && address && selectedDate && selectedTime && (
              <View style={styles.modalFooter}>
                <View style={styles.modalTotalContainer}>
                  <Text style={styles.modalTotalLabel}>Total</Text>
                  <Text style={styles.modalTotalAmount}>₱{calculateTotal()}</Text>
                </View>
                <TouchableOpacity 
                  style={styles.modalPlaceOrderButton} 
                  onPress={handleSubmit}
                >
                  <Calendar color="#ffffff" size={20} />
                  <Text style={styles.modalPlaceOrderButtonText}>Schedule Order</Text>
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