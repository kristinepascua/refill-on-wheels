import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Clock, MapPin, Star, Package, TrendingUp, DollarSign, Users, CheckCircle, XCircle, Truck, User } from 'lucide-react-native';
import styles from '../../styles/admindStyle';

// Sample hardcoded orders for demonstration
const sampleOrders = [
  {
    id: 1,
    customerName: 'Juan Dela Cruz',
    station: 'AquaPure Station',
    stationId: 1,
    waterType: 'Purified Water',
    qty: 5,
    total: 180,
    address: 'Brgy. Carmen, Cagayan de Oro City',
    time: '10:30 AM',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Pending',
    scheduled: false
  },
  {
    id: 2,
    customerName: 'Maria Santos',
    station: 'AquaPure Station',
    stationId: 1,
    waterType: 'Purified Water',
    qty: 3,
    total: 123,
    address: 'Kauswagan, Cagayan de Oro City',
    time: '2:15 PM',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Preparing',
    scheduled: false
  },
  {
    id: 3,
    customerName: 'Pedro Gonzales',
    station: 'AquaPure Station',
    stationId: 1,
    waterType: 'Purified Water',
    qty: 10,
    total: 335,
    address: 'Balulang, Cagayan de Oro City',
    time: '11:00 AM',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'In Transit',
    scheduled: false
  },
  {
    id: 4,
    customerName: 'Anna Reyes',
    station: 'AquaPure Station',
    stationId: 1,
    waterType: 'Purified Water',
    qty: 8,
    total: 275,
    address: 'Gusa, Cagayan de Oro City',
    time: '9:45 AM',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Delivered',
    scheduled: false
  },
  {
    id: 5,
    customerName: 'Roberto Cruz',
    station: 'AquaPure Station',
    stationId: 1,
    waterType: 'Purified Water',
    qty: 6,
    total: 215,
    address: 'Bulua, Cagayan de Oro City',
    time: '3:00 PM',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    status: 'Pending',
    scheduled: false
  }
];

export default function AdminDashboard({ orders = sampleOrders, setOrders, adminData }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [localOrders, setLocalOrders] = useState(orders);

  // Use local orders state if setOrders is not provided
  const currentOrders = setOrders ? orders : localOrders;
  const updateOrders = setOrders || setLocalOrders;

  // Filter orders to only show orders for THIS station
  const myStationOrders = adminData 
    ? currentOrders.filter(order => order.station === adminData.stationName)
    : currentOrders;

  const stats = {
    todayOrders: myStationOrders.filter(o => o.date === new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })).length,
    pendingOrders: myStationOrders.filter(o => o.status === 'Pending').length,
    totalRevenue: myStationOrders.reduce((sum, o) => o.status === 'Delivered' ? sum + o.total : sum, 0),
    activeCustomers: new Set(myStationOrders.map(o => o.customerName)).size
  };

  const handleAcceptOrder = (orderId) => {
    updateOrders(currentOrders.map(order => 
      order.id === orderId ? { ...order, status: 'Preparing' } : order
    ));
  };

  const handleDeclineOrder = (orderId) => {
    updateOrders(currentOrders.filter(order => order.id !== orderId));
  };

  const handleMarkInTransit = (orderId) => {
    updateOrders(currentOrders.map(order => 
      order.id === orderId ? { ...order, status: 'In Transit' } : order
    ));
  };

  const handleMarkDelivered = (orderId) => {
    updateOrders(currentOrders.map(order => 
      order.id === orderId ? { ...order, status: 'Delivered' } : order
    ));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return styles.statusBadgePending;
      case 'Preparing':
        return styles.statusBadgePreparing;
      case 'In Transit':
        return styles.statusBadgeInTransit;
      case 'Delivered':
        return styles.statusBadgeDelivered;
      default:
        return styles.statusBadgePending;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending':
        return <Clock color="#f59e0b" size={16} />;
      case 'Preparing':
        return <Package color="#3b82f6" size={16} />;
      case 'In Transit':
        return <Truck color="#8b5cf6" size={16} />;
      case 'Delivered':
        return <CheckCircle color="#10b981" size={16} />;
      default:
        return <Clock color="#f59e0b" size={16} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1e40af" />
      
      {/* Gradient Header */}
      <View style={styles.headerGradient}>
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>Refill On Wheels</Text>
              <Text style={styles.headerSubtitle}>Admin Dashboard</Text>
            </View>
            <View style={styles.headerBadge}>
              <View style={styles.onlineIndicator} />
              <Text style={styles.onlineText}>Online</Text>
            </View>
          </View>
          
          <View style={styles.stationInfoBar}>
            <MapPin color="#bfdbfe" size={18} />
            <Text style={styles.stationName}>{adminData?.stationName || 'AquaPure Station'}</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Stats Cards with Modern Design */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Today's Overview</Text>
          <View style={styles.statsGrid}>
            {/* Total Orders Card */}
            <View style={[styles.statCard, styles.statCardBlue]}>
              <View style={styles.statIconContainer}>
                <Package color="#2563eb" size={24} />
              </View>
              <View style={styles.statContent}>
                <Text style={styles.statValue}>{stats.todayOrders}</Text>
                <Text style={styles.statLabel}>Today's Orders</Text>
              </View>
            </View>

            {/* Pending Orders Card */}
            <View style={[styles.statCard, styles.statCardOrange]}>
              <View style={styles.statIconContainer}>
                <Clock color="#f97316" size={24} />
              </View>
              <View style={styles.statContent}>
                <Text style={styles.statValue}>{stats.pendingOrders}</Text>
                <Text style={styles.statLabel}>Pending</Text>
              </View>
            </View>

            {/* Revenue Card */}
            <View style={[styles.statCard, styles.statCardGreen]}>
              <View style={styles.statIconContainer}>
                <DollarSign color="#16a34a" size={24} />
              </View>
              <View style={styles.statContent}>
                <Text style={styles.statValue}>₱{stats.totalRevenue}</Text>
                <Text style={styles.statLabel}>Revenue</Text>
              </View>
            </View>

            {/* Customers Card */}
            <View style={[styles.statCard, styles.statCardPurple]}>
              <View style={styles.statIconContainer}>
                <Users color="#9333ea" size={24} />
              </View>
              <View style={styles.statContent}>
                <Text style={styles.statValue}>{stats.activeCustomers}</Text>
                <Text style={styles.statLabel}>Customers</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Station Information Card */}
        {adminData && (
          <View style={styles.stationSection}>
            <Text style={styles.sectionTitle}>Your Station Details</Text>
            <View style={styles.stationCard}>
              <View style={styles.stationHeader}>
                <View style={styles.stationIconLarge}>
                  <Text style={styles.stationEmoji}>💧</Text>
                </View>
                <View style={styles.stationHeaderInfo}>
                  <Text style={styles.stationNameLarge}>{adminData.stationName}</Text>
                  <Text style={styles.stationOwner}>Owner: {adminData.ownerName}</Text>
                  <View style={styles.ratingBadge}>
                    <Star color="#fbbf24" fill="#fbbf24" size={14} />
                    <Text style={styles.ratingText}>4.8</Text>
                  </View>
                </View>
              </View>

              <View style={styles.stationDivider} />

              <View style={styles.stationDetailsGrid}>
                <View style={styles.stationDetailItem}>
                  <MapPin color="#6b7280" size={18} />
                  <View style={styles.stationDetailContent}>
                    <Text style={styles.stationDetailLabel}>Location</Text>
                    <Text style={styles.stationDetailValue}>{adminData.address}</Text>
                  </View>
                </View>

                <View style={styles.stationDetailItem}>
                  <DollarSign color="#6b7280" size={18} />
                  <View style={styles.stationDetailContent}>
                    <Text style={styles.stationDetailLabel}>Price per Gallon</Text>
                    <Text style={styles.stationDetailValue}>₱{adminData.pricePerGallon}</Text>
                  </View>
                </View>

                <View style={styles.stationDetailItem}>
                  <Truck color="#6b7280" size={18} />
                  <View style={styles.stationDetailContent}>
                    <Text style={styles.stationDetailLabel}>Delivery Fee</Text>
                    <Text style={styles.stationDetailValue}>₱{adminData.deliveryFee}</Text>
                  </View>
                </View>

                <View style={styles.stationDetailItem}>
                  <Package color="#6b7280" size={18} />
                  <View style={styles.stationDetailContent}>
                    <Text style={styles.stationDetailLabel}>Water Types</Text>
                    <View style={styles.waterTypesContainer}>
                      {adminData.waterTypes.map((type, index) => (
                        <View key={index} style={styles.waterTypeBadge}>
                          <Text style={styles.waterTypeText}>{type}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Orders Section - Showing orders for THIS station */}
        <View style={styles.ordersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Your Orders</Text>
            <View style={styles.orderCountBadge}>
              <Text style={styles.orderCountText}>{myStationOrders.length}</Text>
            </View>
          </View>

          {myStationOrders.length === 0 ? (
            <View style={styles.emptyStateCard}>
              <Package color="#9ca3af" size={60} />
              <Text style={styles.emptyStateTitle}>No Orders Yet</Text>
              <Text style={styles.emptyStateText}>Orders from customers will appear here</Text>
            </View>
          ) : (
            myStationOrders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                {/* Order Header */}
                <View style={styles.orderCardHeader}>
                  <View style={styles.orderIdContainer}>
                    <Text style={styles.orderIdLabel}>ORDER</Text>
                    <Text style={styles.orderIdValue}>#{order.id.toString().padStart(4, '0')}</Text>
                  </View>
                  <View style={[styles.statusBadgeNew, getStatusStyle(order.status)]}>
                    {getStatusIcon(order.status)}
                    <Text style={styles.statusTextNew}>{order.status}</Text>
                  </View>
                </View>

                {/* Customer Info */}
                <View style={styles.customerInfoSection}>
                  <View style={styles.customerIconContainer}>
                    <User color="#133E87" size={20} />
                  </View>
                  <View style={styles.customerInfoContent}>
                    <Text style={styles.customerLabel}>Customer</Text>
                    <Text style={styles.customerName}>{order.customerName}</Text>
                  </View>
                </View>

                {/* Order Details Grid */}
                <View style={styles.orderDetailsGrid}>
                  <View style={styles.orderDetailRow}>
                    <Text style={styles.orderDetailLabelNew}>Delivery Address</Text>
                    <Text style={styles.orderDetailValueNew}>{order.address}</Text>
                  </View>
                  <View style={styles.orderDetailRow}>
                    <Text style={styles.orderDetailLabelNew}>Water Type</Text>
                    <View style={styles.waterTypeInline}>
                      <Text style={styles.orderDetailValueNew}>{order.waterType}</Text>
                    </View>
                  </View>
                  <View style={styles.orderDetailRow}>
                    <Text style={styles.orderDetailLabelNew}>Quantity</Text>
                    <Text style={styles.orderDetailValueNew}>{order.qty} gallons</Text>
                  </View>
                  <View style={styles.orderDetailRow}>
                    <Text style={styles.orderDetailLabelNew}>Delivery Time</Text>
                    <Text style={styles.orderDetailValueNew}>{order.time}</Text>
                  </View>
                  <View style={styles.orderDetailRow}>
                    <Text style={styles.orderDetailLabelNew}>Total Amount</Text>
                    <Text style={styles.orderTotalValue}>₱{order.total}</Text>
                  </View>
                </View>

                {/* Action Buttons */}
                {order.status === 'Pending' && (
                  <View style={styles.orderActionsNew}>
                    <TouchableOpacity 
                      style={styles.acceptButtonNew} 
                      onPress={() => handleAcceptOrder(order.id)}
                    >
                      <CheckCircle color="#ffffff" size={18} />
                      <Text style={styles.acceptButtonTextNew}>Accept Order</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.declineButtonNew}
                      onPress={() => handleDeclineOrder(order.id)}
                    >
                      <XCircle color="#ef4444" size={18} />
                      <Text style={styles.declineButtonTextNew}>Decline</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {order.status === 'Preparing' && (
                  <TouchableOpacity 
                    style={styles.actionButtonPrimary}
                    onPress={() => handleMarkInTransit(order.id)}
                  >
                    <Truck color="#ffffff" size={18} />
                    <Text style={styles.actionButtonText}>Out for Delivery</Text>
                  </TouchableOpacity>
                )}

                {order.status === 'In Transit' && (
                  <TouchableOpacity 
                    style={styles.actionButtonSuccess}
                    onPress={() => handleMarkDelivered(order.id)}
                  >
                    <CheckCircle color="#ffffff" size={18} />
                    <Text style={styles.actionButtonText}>Mark as Completed</Text>
                  </TouchableOpacity>
                )}

                {order.status === 'Delivered' && (
                  <View style={styles.completedBadge}>
                    <CheckCircle color="#10b981" size={18} />
                    <Text style={styles.completedText}>Order Completed</Text>
                  </View>
                )}
              </View>
            ))
          )}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsSection}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionBtn}>
              <View style={styles.quickActionIconBlue}>
                <TrendingUp color="#2563eb" size={28} />
              </View>
              <Text style={styles.quickActionLabel}>Analytics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionBtn}>
              <View style={styles.quickActionIconPurple}>
                <Package color="#9333ea" size={28} />
              </View>
              <Text style={styles.quickActionLabel}>Inventory</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 200 }} />
      </ScrollView>
    </SafeAreaView>
  );
}