import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { ShoppingCart, Clock, Star, Filter, MapPinned, User } from 'lucide-react-native';
import styles from '../../styles/style';

export default function BrowseScreen({ stations, onBack, onNavigate }) {
  const [filterType, setFilterType] = useState('All');

  const filteredStations = filterType === 'All' 
    ? stations 
    : stations.filter(s => s.waterTypes.includes(filterType));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />
      
      <View style={styles.headerr}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Browse Stations</Text>
        <Text style={styles.headerSubtitle}>Find your preferred station</Text>
      </View>

      <View style={styles.filterContainer}>
        <View style={styles.filterHeader}>
          <Filter color="#133E87" size={20} />
          <Text style={styles.filterTitle}>Filter by Water Type</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {['All', 'Purified', 'Alkaline', 'Mineral'].map((type) => (
            <TouchableOpacity
              key={type}
              style={[
                styles.filterChip,
                filterType === type && styles.filterChipActive
              ]}
              onPress={() => setFilterType(type)}
            >
              <Text style={[
                styles.filterChipText,
                filterType === type && styles.filterChipTextActive
              ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {filteredStations.map((station) => (
          <View key={station.id} style={styles.stationCard}>
            <View style={styles.stationContent}>
              <View style={styles.stationIcon}>
                <Text style={styles.stationEmoji}>{station.emoji}</Text>
              </View>

              <View style={styles.stationInfo}>
                <Text style={styles.stationName}>{station.name}</Text>
                <Text style={styles.stationDistance}>Distance: {station.distance}</Text>
                
                <View style={styles.stationDetails}>
                  <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Price per Gallon:</Text> ₱{station.pricePerGallon}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Delivery Fee:</Text> ₱{station.deliveryFee}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>ETA:</Text> {station.eta}
                  </Text>
                  <Text style={styles.detailText}>
                    <Text style={styles.detailLabel}>Water Types:</Text> {station.waterTypes.join(', ')}
                  </Text>
                </View>
                
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingLabel}>Rating:</Text>
                  <Star color="#fbbf24" fill="#fbbf24" size={16} />
                  <Text style={styles.ratingText}>{station.rating}</Text>
                </View>
              </View>

              <View style={styles.stationActions}>
                <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('refillNow')}>
                  <ShoppingCart color="#2563eb" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate('schedule')}>
                  <Clock color="#2563eb" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={{ height: 50 }} />
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
