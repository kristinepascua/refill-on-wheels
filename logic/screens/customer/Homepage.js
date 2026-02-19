import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MapPin, Clock, Star, Calendar, History, ShoppingCart, User, MapPinned, Bell, Droplet } from 'lucide-react-native';
import styles from '../../styles/homepageStyle';

export default function Homepage({ orders = [], stations = [], onNavigate = () => {}, onReorder = () => {} }) {
  const userLocation = "Carmen, Cagayan de Oro City";
  const recentOrders = orders.slice(0, 3);

  const sampleStations = stations.length ? stations : [
    {
      id: 1,
      name: "AquaPure Station",
      emoji: "💧",
      distance: "0.5 km",
      pricePerGallon: 25,
      deliveryFee: 20,
      eta: "15-20 min",
      rating: 4.8,
      waterTypes: ['Purified', 'Alkaline']
    },
    {
      id: 2,
      name: "Crystal Clear Water",
      emoji: "🌊",
      distance: "1.2 km",
      pricePerGallon: 23,
      deliveryFee: 25,
      eta: "20-25 min",
      rating: 4.6,
      waterTypes: ['Purified', 'Mineral']
    }
  ];

  const sampleOrders = recentOrders.length ? recentOrders : [
    {
      id: 1,
      date: "Nov 14, 2025",
      station: "AquaPure Station",
      qty: 5,
      total: 145,
      status: "Delivered"
    },
    {
      id: 2,
      date: "Nov 10, 2025",
      station: "Crystal Clear Water",
      qty: 3,
      total: 94,
      status: "Delivered"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />
      
      {/* Simple Clean Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.greeting}>Hello! 👋</Text>
            <Text style={styles.userName}>Juan Dela Cruz</Text>
          </View>
          <TouchableOpacity style={styles.notificationBtn}>
            <Bell color="#ffffff" size={22} />
          </TouchableOpacity>
        </View>

        <View style={styles.locationBar}>
          <MapPin color="#ffffff" size={16} />
          <Text style={styles.locationText}>{userLocation}</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Quick Action Buttons */}
        <View style={styles.quickActions}>
          <TouchableOpacity 
            style={styles.actionBtn} 
            onPress={() => onNavigate('refillNow')}
          >
            <View style={styles.actionIcon}>
              <ShoppingCart color="#133E87" size={24} />
            </View>
            <Text style={styles.actionText}>Refill Now</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionBtn} 
            onPress={() => onNavigate('schedule')}
          >
            <View style={styles.actionIcon}>
              <Calendar color="#133E87" size={24} />
            </View>
            <Text style={styles.actionText}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionBtn} 
            onPress={() => onNavigate('history')}
          >
            <View style={styles.actionIcon}>
              <History color="#133E87" size={24} />
            </View>
            <Text style={styles.actionText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Nearby Stations */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nearby Stations</Text>
            <TouchableOpacity onPress={() => onNavigate('browse')}>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          {sampleStations.map((station) => (
            <View key={station.id} style={styles.stationCard}>
              <View style={styles.stationTop}>
                <View style={styles.stationLeft}>
                  <View style={styles.emojiBox}>
                    <Text style={styles.emoji}>{station.emoji}</Text>
                  </View>
                  <View>
                    <Text style={styles.stationName}>{station.name}</Text>
                    <View style={styles.distanceBox}>
                      <MapPin color="#6b7280" size={12} />
                      <Text style={styles.distance}>{station.distance}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.rating}>
                  <Star color="#fbbf24" fill="#fbbf24" size={14} />
                  <Text style={styles.ratingText}>{station.rating}</Text>
                </View>
              </View>

              <View style={styles.divider} />

              <View style={styles.stationInfo}>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Price</Text>
                  <Text style={styles.infoValue}>₱{station.pricePerGallon}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>Delivery</Text>
                  <Text style={styles.infoValue}>₱{station.deliveryFee}</Text>
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.infoLabel}>ETA</Text>
                  <Text style={styles.infoValue}>{station.eta}</Text>
                </View>
              </View>

              <View style={styles.stationBtns}>
                <TouchableOpacity 
                  style={styles.orderBtn} 
                  onPress={() => onNavigate('refillNow')}
                >
                  <ShoppingCart color="#ffffff" size={18} />
                  <Text style={styles.orderBtnText}>Order Now</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.scheduleBtn} 
                  onPress={() => onNavigate('schedule')}
                >
                  <Clock color="#133E87" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Recent Orders */}
        {sampleOrders.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Recent Orders</Text>
              <TouchableOpacity onPress={() => onNavigate('history')}>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>

            {sampleOrders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <View style={styles.orderTop}>
                  <View>
                    <Text style={styles.orderStation}>{order.station}</Text>
                    <Text style={styles.orderDate}>{order.date}</Text>
                  </View>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{order.status}</Text>
                  </View>
                </View>

                <View style={styles.orderInfo}>
                  <View style={styles.orderInfoItem}>
                    <Text style={styles.orderLabel}>Quantity</Text>
                    <Text style={styles.orderValue}>{order.qty} gal</Text>
                  </View>
                  <View style={styles.orderInfoItem}>
                    <Text style={styles.orderLabel}>Total</Text>
                    <Text style={styles.orderPrice}>₱{order.total}</Text>
                  </View>
                </View>

                <TouchableOpacity 
                  style={styles.reorderBtn} 
                  onPress={() => onReorder(order)}
                >
                  <Text style={styles.reorderText}>Reorder</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Nav */}
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