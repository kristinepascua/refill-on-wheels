import React, { useState } from 'react';
import MapComponent from '../../components/MapComponent';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Modal,
  Switch,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import {
  User,
  Home,
  Phone,
  Mail,
  Key,
  Edit3,
  CreditCard,
  Trash2,
  Check,
  Plus,
  Star,
  Wallet,
  ShoppingCart,
  MapPinned,
} from 'lucide-react-native';

import globalStyles from '../../styles/style';
import profileStyles from '../../styles/ProfileStyle';

//avatar
const AVATAR_IMAGES = [
  require('../../../assets/avatar1.jpg'),
  require('../../../assets/avatar2.jpg'),
  require('../../../assets/avatar3.jpg'),
];

//emoji fallback
const EMOJI_FALLBACK = ['🥺', '😜', '😊'];

export default function ProfileScreen({ onBack, onNavigate }) {
  //User info
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [userName, setUserName] = useState('Juan Dela Cruz');
  const [email, setEmail] = useState('juan.delacruz@email.com');
  const [phone, setPhone] = useState('+63 912 345 6789');

  //Stats
  const [rating] = useState(4.8);
  const [reviewsCount] = useState(23);
  const [totalOrders, setTotalOrders] = useState(42);
  const [points, setPoints] = useState(120);

  //Addresses
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      block: 'Zone 3, Kauswagan',
      barangay: 'Kauswagan',
      city: 'Cagayan de Oro City',
      isDefault: true,
      latitude: 8.4799,
      longitude: 124.6434,
    },
  ]);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [tempBlock, setTempBlock] = useState('');
  const [tempBarangay, setTempBarangay] = useState('');
  const [tempLat, setTempLat] = useState(8.4799);
  const [tempLong, setTempLong] = useState(124.6434);

  //Edit profile
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [tempName, setTempName] = useState('');
  const [tempPhone, setTempPhone] = useState('');
  const [tempEmail, setTempEmail] = useState('');

  //Password
  const [passwordModalVisible, setPasswordModalVisible] = useState(false);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');

  //Payment method
  const [paymentMethod, setPaymentMethod] = useState('GCash');
  const [paymentDropdownVisible, setPaymentDropdownVisible] = useState(false);
  const [linkModalVisible, setLinkModalVisible] = useState(false);
  const [linkingFor, setLinkingFor] = useState(null);
  const [linkName, setLinkName] = useState('');
  const [linkPhone, setLinkPhone] = useState('');

  // Preferences
  const [smsNotif, setSmsNotif] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [deliveryNotif, setDeliveryNotif] = useState(true);
  const [savePaymentInfo, setSavePaymentInfo] = useState(false);

  //Avatar picke
  const [avatarPickerVisible, setAvatarPickerVisible] = useState(false);

  //Helpers
  const openEditProfile = () => {
    setTempName(userName);
    setTempPhone(phone);
    setTempEmail(email);
    setEditModalVisible(true);
  };

  const saveProfile = () => {
    if (!tempName.trim() || !tempEmail.trim()) {
      Alert.alert('Missing fields', 'Please provide your name and email.');
      return;
    }
    setUserName(tempName);
    setPhone(tempPhone);
    setEmail(tempEmail);
    setEditModalVisible(false);
  };

  const openAddAddress = () => {
    setEditingAddress(null);
    setTempBlock('');
    setTempBarangay('');
    setTempLat(8.4799);
    setTempLong(124.6434);
    setAddressModalVisible(true);
  };

  const openEditAddress = (addr) => {
    setEditingAddress(addr);
    setTempBlock(addr.block);
    setTempBarangay(addr.barangay);
    setTempLat(addr.latitude);
    setTempLong(addr.longitude);
    setAddressModalVisible(true);
  };

  const saveAddress = () => {
    if (!tempBlock.trim() || !tempBarangay.trim()) {
      Alert.alert('Missing fields', 'Please fill Block/Street and Barangay.');
      return;
    }
    if (editingAddress) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editingAddress.id
            ? { ...a, block: tempBlock, barangay: tempBarangay, latitude: tempLat, longitude: tempLong }
            : a
        )
      );
    } else {
      const newAddr = {
        id: addresses.length + 1,
        block: tempBlock,
        barangay: tempBarangay,
        city: 'Cagayan de Oro City',
        isDefault: addresses.length === 0,
        latitude: tempLat,
        longitude: tempLong,
      };
      setAddresses((prev) => [newAddr, ...prev]);
    }
    setAddressModalVisible(false);
  };

  const setDefaultAddress = (id) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, isDefault: a.id === id })));
  };

  const removeAddress = (id) => {
    if (addresses.length <= 1) {
      Alert.alert('Cannot remove', 'You must have at least one address.');
      return;
    }
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const savePassword = () => {
    setOldPass('');
    setNewPass('');
    setPasswordModalVisible(false);
  };

  const openLinkModal = (method) => {
    setLinkingFor(method);
    setLinkName('');
    setLinkPhone('');
    setLinkModalVisible(true);
  };

  const saveLink = () => {
    setPaymentMethod(linkingFor);
    setLinkModalVisible(false);
    setPaymentDropdownVisible(false);
  };

  const renderAddressText = (a) => `${a.block}\n${a.barangay}, ${a.city}`;

  return (
    <SafeAreaView style={globalStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2563eb" />

      <View style={globalStyles.headerr}>
        <TouchableOpacity onPress={onBack} style={globalStyles.backButton}>
          <Text style={globalStyles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Text style={globalStyles.headerTitle}>Profile</Text>
        <Text style={globalStyles.headerSubtitle}>Manage your account</Text>
      </View>

      <ScrollView style={profileStyles.formContainer} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* PROFILE HEADER */}
        <View style={profileStyles.profileHeader}>
          <TouchableOpacity style={profileStyles.profileAvatar} onPress={() => setAvatarPickerVisible(true)}>
            {/* try to render local image; fallback to emoji */}
            {AVATAR_IMAGES[avatarIndex] ? (
              <Image source={AVATAR_IMAGES[avatarIndex]} style={profileStyles.avatarImage} />
            ) : (
              <Text style={profileStyles.avatarEmoji}>{EMOJI_FALLBACK[avatarIndex] || '🙂'}</Text>
            )}
          </TouchableOpacity>

          <View style={profileStyles.nameRow}>
            <Text style={profileStyles.profileName}>{userName}</Text>
            <TouchableOpacity style={profileStyles.quickEditBtn} onPress={openEditProfile}>
              <Edit3 size={18} color="#2563eb" />
            </TouchableOpacity>
          </View>

          <View style={profileStyles.statsRow}>
            <View style={profileStyles.statCard}>
              <Star size={18} color="#fbbf24" />
              <Text style={profileStyles.statValue}>{rating.toFixed(1)}</Text>
              <Text style={profileStyles.statLabel}>{reviewsCount} reviews</Text>
            </View>

            <View style={profileStyles.statCard}>
              <CreditCard size={18} color="#2563eb" />
              <Text style={profileStyles.statValue}>{totalOrders}</Text>
              <Text style={profileStyles.statLabel}>orders</Text>
            </View>

            <View style={profileStyles.statCard}>
              <Wallet size={18} color="#10b981" />
              <Text style={profileStyles.statValue}>{points}</Text>
              <Text style={profileStyles.statLabel}>points</Text>
            </View>
          </View>
        </View>

        {/* ACCOUNT INFO (includes payment) */}
        <View style={profileStyles.section}>
          <Text style={profileStyles.sectionTitle}>Account Information</Text>

          <View style={profileStyles.card}>
            {/* Name */}
            <View style={profileStyles.infoRow}>
              <View style={profileStyles.infoLeft}>
                <User size={18} color="#6b7280" />
              </View>
              <View style={profileStyles.infoRight}>
                <Text style={profileStyles.infoLabel}>Name</Text>
                <Text style={profileStyles.infoValue}>{userName}</Text>
              </View>
            </View>

            {/* Phone */}
            <View style={profileStyles.infoRow}>
              <View style={profileStyles.infoLeft}>
                <Phone size={18} color="#6b7280" />
              </View>
              <View style={profileStyles.infoRight}>
                <Text style={profileStyles.infoLabel}>Phone</Text>
                <Text style={profileStyles.infoValue}>{phone}</Text>
              </View>
            </View>

            {/* Email */}
            <View style={profileStyles.infoRow}>
              <View style={profileStyles.infoLeft}>
                <Mail size={18} color="#6b7280" />
              </View>
              <View style={profileStyles.infoRight}>
                <Text style={profileStyles.infoLabel}>Email</Text>
                <Text style={profileStyles.infoValue}>{email}</Text>
              </View>
            </View>

            {/* Payment (arrow left, label right) */}
            <TouchableOpacity style={profileStyles.infoRowTouchable} onPress={() => setPaymentDropdownVisible(true)}>
              <View style={profileStyles.infoLeft}>
                <Text style={profileStyles.paymentArrow}>▾</Text>
              </View>
              <View style={profileStyles.infoRight}>
                <Text style={profileStyles.infoLabel}>Preferred payment</Text>
                <Text style={profileStyles.infoValue}>{paymentMethod}</Text>
              </View>
            </TouchableOpacity>

            {/* Change password - same font/size style */}
            <TouchableOpacity style={profileStyles.infoRowTouchable} onPress={() => setPasswordModalVisible(true)}>
              <View style={profileStyles.infoLeft}>
                <Key size={18} color="#2563eb" />
              </View>
              <View style={profileStyles.infoRight}>
                <Text style={profileStyles.infoLabel}>Change password</Text>
                <Text style={[profileStyles.infoValue, { color: '#2563eb' }]}>Update</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* DELIVERY ADDRESSES */}
        <View style={profileStyles.section}>
          <View style={profileStyles.sectionHeader}>
            <Text style={profileStyles.sectionTitle}>Delivery Addresses</Text>
            <TouchableOpacity style={profileStyles.iconAddBtn} onPress={openAddAddress}>
              <Plus size={18} color="#fff" />
            </TouchableOpacity>
          </View>

          {addresses.map((addr) => (
            <View key={addr.id} style={profileStyles.addressCard}>
              <View style={profileStyles.addressRow}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                  <Home size={22} color="#2563eb" />
                  <View style={{ marginLeft: 10 }}>
                    <Text style={profileStyles.addressText}>{addr.block}</Text>
                    <Text style={profileStyles.addressSub}>{addr.barangay}, {addr.city}</Text>
                  </View>
                </View>

                <View style={profileStyles.addressActionsRight}>
                  {/* default badge top-right */}
                  {addr.isDefault ? (
                    <View style={profileStyles.defaultBadge}>
                      <Text style={profileStyles.defaultText}>Default</Text>
                    </View>
                  ) : null}

                  <TouchableOpacity onPress={() => openEditAddress(addr)} style={profileStyles.iconOnlyBtn}>
                    <Edit3 size={18} color="#2563eb" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* small 'Make default' link if not default (cleaner) */}
              {!addr.isDefault && (
                <View style={{ marginTop: 8, flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => setDefaultAddress(addr.id)} style={profileStyles.makeDefaultLink}>
                    <Text style={profileStyles.makeDefaultText}>Make default</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* PREFERENCES */}
        <View style={profileStyles.section}>
          <Text style={profileStyles.sectionTitle}>Preferences</Text>

          <View style={profileStyles.preferencesCard}>
            <View style={profileStyles.preferenceRow}>
              <Text style={profileStyles.preferenceLabel}>Save payment info</Text>
              <Switch value={savePaymentInfo} onValueChange={setSavePaymentInfo} />
            </View>

            <View style={profileStyles.preferenceRow}>
              <Text style={profileStyles.preferenceLabel}>SMS Notifications</Text>
              <Switch value={smsNotif} onValueChange={setSmsNotif} />
            </View>

            <View style={profileStyles.preferenceRow}>
              <Text style={profileStyles.preferenceLabel}>Email Notifications</Text>
              <Switch value={emailNotif} onValueChange={setEmailNotif} />
            </View>

            <View style={profileStyles.preferenceRow}>
              <Text style={profileStyles.preferenceLabel}>App Delivery Notifications</Text>
              <Switch value={deliveryNotif} onValueChange={setDeliveryNotif} />
            </View>
          </View>
        </View>

        {/* LOGOUT (redesign) */}
        <TouchableOpacity style={profileStyles.logoutBtn} onPress={() => onNavigate('welcome')}>
          <Text style={profileStyles.logoutText}>Log out</Text>
        </TouchableOpacity>

        <View style={{ height: 36 }} />
      </ScrollView>

      {/* AVATAR PICKER (images from assets) */}
      <Modal visible={avatarPickerVisible} transparent animationType="fade">
        <View style={profileStyles.modalOverlay}>
          <View style={profileStyles.avatarModal}>
            <Text style={profileStyles.modalTitle}>Choose Avatar</Text>

            <FlatList
              data={AVATAR_IMAGES.length ? AVATAR_IMAGES : EMOJI_FALLBACK}
              keyExtractor={(_, i) => String(i)}
              numColumns={4}
              contentContainerStyle={{ alignItems: 'center' }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={profileStyles.avatarOption}
                  onPress={() => {
                    // if actual images exist use them, else fallback to emoji
                    if (AVATAR_IMAGES.length) {
                      setAvatarIndex(index);
                    } else {
                      setAvatarIndex(index);
                    }
                    setAvatarPickerVisible(false);
                  }}
                >
                  {typeof item === 'number' ? (
                    <Image source={item} style={profileStyles.avatarImageOption} />
                  ) : (
                    <Text style={profileStyles.avatarEmojiLarge}>{item}</Text>
                  )}
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity style={[profileStyles.dropdownClose, { marginTop: 12 }]} onPress={() => setAvatarPickerVisible(false)}>
              <Text style={profileStyles.dropdownCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* EDIT PROFILE MODAL */}
      <Modal visible={editModalVisible} transparent animationType="fade">
        <View style={profileStyles.modalOverlay}>
          <View style={profileStyles.modalContent}>
            <Text style={profileStyles.modalTitle}>Edit Profile</Text>

            <TextInput style={profileStyles.input} value={tempName} onChangeText={setTempName} placeholder="Full Name" />
            <TextInput style={profileStyles.input} value={tempEmail} onChangeText={setTempEmail} placeholder="Email" keyboardType="email-address" />
            <TextInput style={profileStyles.input} value={tempPhone} onChangeText={setTempPhone} placeholder="Phone Number" keyboardType="phone-pad" />

            <View style={profileStyles.modalButtons}>
              <TouchableOpacity style={profileStyles.cancelBtn} onPress={() => setEditModalVisible(false)}>
                <Text style={profileStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={profileStyles.saveBtn} onPress={saveProfile}>
                <Text style={profileStyles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* CHANGE PASSWORD MODAL */}
      <Modal visible={passwordModalVisible} transparent animationType="fade">
        <View style={profileStyles.modalOverlay}>
          <View style={profileStyles.modalContent}>
            <Text style={profileStyles.modalTitle}>Change Password</Text>

            <TextInput style={profileStyles.input} value={oldPass} onChangeText={setOldPass} secureTextEntry placeholder="Old Password" />
            <TextInput style={profileStyles.input} value={newPass} onChangeText={setNewPass} secureTextEntry placeholder="New Password" />

            <View style={profileStyles.modalButtons}>
              <TouchableOpacity style={profileStyles.cancelBtn} onPress={() => setPasswordModalVisible(false)}>
                <Text style={profileStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={profileStyles.saveBtn} onPress={savePassword}>
                <Text style={profileStyles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* ADDRESS MODAL + MAP (delete only allowed here if >1) */}
      <Modal visible={addressModalVisible} transparent animationType="fade">
        <View style={profileStyles.modalOverlay}>
          <View style={profileStyles.addressModal}>
            <Text style={profileStyles.modalTitle}>{editingAddress ? 'Edit Address' : 'Add Address'}</Text>

            <TextInput style={profileStyles.input} placeholder="Block / Street" value={tempBlock} onChangeText={setTempBlock} />
            <TextInput style={profileStyles.input} placeholder="Barangay" value={tempBarangay} onChangeText={setTempBarangay} />

            <Text style={profileStyles.mapLabel}>Pin Location on Map</Text>

            <MapComponent
  tempLat={tempLat}
  tempLong={tempLong}
  setTempLat={setTempLat}
  setTempLong={setTempLong}
  style={profileStyles.map}
/>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>
              {editingAddress && addresses.length > 1 ? (
                <TouchableOpacity
                  style={[profileStyles.cancelBtn, { backgroundColor: '#fee2e2' }]}
                  onPress={() => {
                    Alert.alert('Delete address', 'Remove this address?', [
                      { text: 'Cancel', style: 'cancel' },
                      {
                        text: 'Delete',
                        style: 'destructive',
                        onPress: () => {
                          removeAddress(editingAddress.id);
                          setAddressModalVisible(false);
                        },
                      },
                    ]);
                  }}
                >
                  <Text style={[profileStyles.cancelText, { color: '#b91c1c' }]}>Delete</Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}

              <View style={{ flexDirection: 'row', gap: 8 }}>
                <TouchableOpacity style={profileStyles.cancelBtn} onPress={() => setAddressModalVisible(false)}>
                  <Text style={profileStyles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={profileStyles.saveBtn} onPress={saveAddress}>
                  <Text style={profileStyles.saveText}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* PAYMENT DROPDOWN MODAL */}
      <Modal visible={paymentDropdownVisible} transparent animationType="fade">
        <View style={profileStyles.modalOverlay}>
          <View style={profileStyles.dropdownModal}>
            {['GCash', 'Maya', 'Cash on Delivery'].map((m) => (
              <TouchableOpacity
                key={m}
                style={profileStyles.dropdownItem}
                onPress={() => {
                  if (m === 'GCash' || m === 'Maya') {
                    setPaymentDropdownVisible(false);
                    openLinkModal(m);
                  } else {
                    setPaymentMethod(m);
                    setPaymentDropdownVisible(false);
                  }
                }}
              >
                <Text style={profileStyles.dropdownText}>{m}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={[profileStyles.dropdownClose]} onPress={() => setPaymentDropdownVisible(false)}>
              <Text style={profileStyles.dropdownCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* PAYMENT LINK MODAL */}
      <Modal visible={linkModalVisible} transparent animationType="fade">
        <View style={profileStyles.modalOverlay}>
          <View style={profileStyles.modalContent}>
            <Text style={profileStyles.modalTitle}>Link {linkingFor}</Text>

            <TextInput style={profileStyles.input} placeholder="Account Name" value={linkName} onChangeText={setLinkName} />
            <TextInput style={profileStyles.input} placeholder="Mobile Number" value={linkPhone} onChangeText={setLinkPhone} />

            <View style={profileStyles.modalButtons}>
              <TouchableOpacity style={profileStyles.cancelBtn} onPress={() => setLinkModalVisible(false)}>
                <Text style={profileStyles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={profileStyles.saveBtn} onPress={saveLink}>
                <Text style={profileStyles.saveText}>Link</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={globalStyles.bottomNav}>
        <TouchableOpacity style={globalStyles.navItem} onPress={() => onNavigate('browse')}>
          <ShoppingCart color="#6b7280" size={24} />
          <Text style={globalStyles.navText}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.navItem} onPress={() => onNavigate('track')}>
          <MapPinned color="#6b7280" size={24} />
          <Text style={globalStyles.navText}>Track</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.navItem} onPress={() => onNavigate('profile')}>
          <User color="#6b7280" size={24} />
          <Text style={globalStyles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
