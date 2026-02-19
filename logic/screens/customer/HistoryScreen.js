import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import globalStyles from '../../styles/style';
import styles from '../../styles/historyStyle';

export default function HistoryScreen({ orders, historyOrders, onBack, onReorder }) {
  const [activeTab, setActiveTab] = useState('All');
  const [successMessage, setSuccessMessage] = useState('');

  const safeOrders = useMemo(() => {
    const activeDelivered = Array.isArray(orders)
      ? orders.filter((o) => o.status === 'Delivered')
      : [];

    const historyCancelled = Array.isArray(historyOrders)
      ? historyOrders.filter((o) => o.status === 'Cancelled')
      : [];

    return [...activeDelivered, ...historyCancelled];
  }, [orders, historyOrders]);

  const filteredOrders = safeOrders.filter((order) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Delivered') return order.status === 'Delivered';
    if (activeTab === 'Cancelled') return order.status === 'Cancelled';
    return true;
  });

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />

      {/* Header */}
      <View style={globalStyles.headerr}>
        <TouchableOpacity onPress={onBack} style={globalStyles.backButton}>
          <Text style={globalStyles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Text style={globalStyles.headerTitle}>Order History</Text>
        <Text style={globalStyles.headerSubtitle}>All your previous orders</Text>
      </View>

      {/* Success Message */}
      {successMessage ? (
        <View style={styles.successMessageContainer}>
          <Text style={styles.successMessageText}>{successMessage}</Text>
        </View>
      ) : null}

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {['All', 'Delivered', 'Cancelled'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, activeTab === tab && styles.tabItemActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabLabel, activeTab === tab && styles.tabLabelActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        {filteredOrders.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No {activeTab.toLowerCase()} orders</Text>
            <Text style={styles.emptyStateSubtext}>Try placing an order first.</Text>
          </View>
        ) : (
          filteredOrders.map((order, index) => (
            <View key={`${order.id}-${index}`} style={styles.orderCard}>
              
              <Text style={styles.orderId}>Order #{order.id}</Text>

              {/* Header row */}
              <View style={styles.orderHeader}>
                <View>
                  <Text style={styles.orderDate}>{order.date}</Text>
                  <Text style={styles.orderStation}>{order.station}</Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,
                    order.status === 'Delivered' && styles.statusDelivered,
                    order.status === 'Cancelled' && styles.statusCancelled,
                  ]}
                >
                  <Text style={styles.statusText}>{order.status}</Text>
                </View>
              </View>

              {/* Body */}
              <View style={styles.orderBody}>
                <Text style={styles.orderLine}>{order.waterType} • {order.qty} gallons</Text>
                <Text style={styles.orderLineSmall}>Delivery Address: {order.address}</Text>
              </View>

              {/* Total */}
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalValue}>₱{order.total}</Text>
              </View>

              <Text style={styles.orderLineSmall}>Payment: {order.paymentMethod}</Text>

              {/* Reorder Button */}
              <TouchableOpacity
                style={styles.reorderButton}
                onPress={() => {
                  onReorder(order);
                  setSuccessMessage(`Order #${order.id} successfully reordered!`);
                  setTimeout(() => setSuccessMessage(''), 2000);
                }}
              >
                <Text style={styles.reorderButtonText}>Reorder</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
