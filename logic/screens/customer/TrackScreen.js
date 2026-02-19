import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';

import { Package, Truck, CheckCircle, ShoppingCart, User, MapPinned} from 'lucide-react-native';

import globalStyles from '../../styles/style';
import styles from '../../styles/TrackStyle';

const safeArray = (v) => (Array.isArray(v) ? v : []);

export default function TrackScreen({ orders, setOrders, setHistoryOrders, onBack , onNavigate}) {
  const allOrders = useMemo(() => safeArray(orders), [orders]);
  const statusSteps = ['Pending', 'Preparing', 'In Transit', 'Delivered'];

  const [selectedStatus, setSelectedStatus] = useState('Pending');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);

  const safeOrders = Array.isArray(orders) ? orders : [];

  const filteredOrders = safeOrders.filter(
    (order) => order.status === selectedStatus
  );

  const getOrderStep = (status) => {
    switch (status) {
      case 'Pending': return 1;
      case 'Preparing': return 2;
      case 'In Transit': return 3;
      case 'Delivered': return 4;
      default: return 0;
    }
  };

  const canCancel = (status) =>
    status === 'Pending' || status === 'Preparing';

  const openCancelModal = (order) => {
    setOrderToCancel(order);
    setCancelModalVisible(true);
  };

  const confirmCancel = () => {
    if (!orderToCancel) return;

    // send to history
    setHistoryOrders((prev) => [
      ...safeArray(prev),
      { ...orderToCancel, status: 'Cancelled' },
    ]);

    setOrders((prev) =>
      safeArray(prev).filter((o) => o.id !== orderToCancel.id)
    );

    if (selectedOrder?.id === orderToCancel.id) setSelectedOrder(null);
    setCancelModalVisible(false);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#60a5fa" />

      {/* Cancel Confirmation Modal */}
      <Modal
        visible={cancelModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setCancelModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Cancel order</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to cancel this order?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.noButton]}
                onPress={() => setCancelModalVisible(false)}
              >
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.yesButton]}
                onPress={confirmCancel}
              >
                <Text style={styles.yesText}>Yes, cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Header */}
      <View style={globalStyles.headerr}>
        <TouchableOpacity onPress={onBack} style={globalStyles.backButton}>
          <Text style={globalStyles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Text style={globalStyles.headerTitle}>Track Orders</Text>
        <Text style={globalStyles.headerSubtitle}>
          Monitor your deliveries
        </Text>
      </View>

      <ScrollView
        style={globalStyles.fContainer}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* STEP ROW */}
        <View style={styles.topContainer}>
          <View style={styles.stepRow}>
            <View style={[styles.stepConnector, styles.stepConnectorActive]} />
            {statusSteps.map((step) => {
              const active = step === selectedStatus;

              return (
                <React.Fragment key={step}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      setSelectedStatus(step);
                      setSelectedOrder(null);
                    }}
                    style={[styles.stepItem, active && styles.stepItemActive]}
                  >
                    <View
                      style={[
                        styles.stepCircle,
                        active ? styles.stepCircleActiveBig : styles.stepCircle,
                      ]}
                    >
                      {step === 'In Transit' ? (
                        <Truck
                          color={active ? '#fff' : '#2563eb'}
                          size={active ? 22 : 18}
                        />
                      ) : step === 'Delivered' ? (
                        <CheckCircle
                          color={active ? '#fff' : '#2563eb'}
                          size={active ? 22 : 18}
                        />
                      ) : (
                        <Package
                          color={active ? '#fff' : '#2563eb'}
                          size={active ? 22 : 18}
                        />
                      )}
                    </View>
                    <Text style={[styles.stepLabel, active && styles.stepLabelActiveBig]}>
                      {step}
                    </Text>
                  </TouchableOpacity>
                </React.Fragment>
              );
            })}
          </View>
        </View>

        {/* ORDER LIST */}
        <View style={{ paddingHorizontal: 16 }}>
          {filteredOrders.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>
                No orders in {selectedStatus}
              </Text>
              <Text style={styles.emptyStateSubtext}>
                Orders will appear here after you place them.
              </Text>
            </View>
          ) : (
            filteredOrders.map((order) => {
              const isSelected = selectedOrder?.id === order.id;

              return (
                <TouchableOpacity
                  key={order.id}
                  activeOpacity={0.95}
                  style={[styles.orderCard, isSelected && styles.orderCardSelected]}
                  onPress={() => setSelectedOrder(order)}
                >
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={[
                      styles.statusBadge,
                      order.status === 'Pending' && styles.statusPending,
                      order.status === 'Preparing' && styles.statusPreparing,
                      order.status === 'In Transit' && styles.statusInTransit,
                      order.status === 'Delivered' && styles.statusDelivered,
                    ]}>
                      <Text style={styles.statusText}>{order.status}</Text>
                    </View>
                    <Text style={styles.orderDate}>{order.date || ''}</Text>
                  </View>

                  <View style={{ marginTop: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style={styles.orderId}>Order #{order.id}</Text>
                      <Text style={styles.orderStation}>{order.station}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text style={styles.totalLabel}>Total Amount</Text>
                      <Text style={styles.totalValue}>₱{order.total ?? '0.00'}</Text>
                    </View>
                  </View>

                  {/* DETAILS */}
                  <View style={styles.orderBody}>
                    <Text style={styles.orderLine}>
                      {order.waterType} • {order.qty} gallons
                    </Text>
                    <Text style={styles.orderLineSmall}>
                      Address: {order.address}
                    </Text>
                  </View>
                  
                  <View style={styles.orderDetailsRow}>
                    <Text style={styles.orderDetailsLabel}>Payment:</Text>
<Text style={styles.orderDetailsValue}>{order.paymentMethod}</Text>
                  </View>

                  {/* ACTIONS */}
                  <View style={styles.orderActions}>
                    {canCancel(order.status) && (
                      <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => openCancelModal(order)}
                      >
                        <Text style={styles.cancelButtonText}>Cancel</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
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
