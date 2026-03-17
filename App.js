// ==========================================
// LAB 6 COMPLIANCE: MOBILE UI ADAPTATION
// Task 1: Project initialized as refill_mobile
// Task 4: Layout designed with Flexbox & Vertical Scrolling
// ==========================================

import React, { useState } from 'react';
import { useFonts } from "expo-font";
import Homepage from './logic/screens/customer/Homepage';
import RefillNowScreen from './logic/screens/customer/RefillNowScreen';
import ScheduleScreen from './logic/screens/customer/ScheduleScreen';
import HistoryScreen from './logic/screens/customer/HistoryScreen';
import BrowseScreen from './logic/screens/customer/BrowseScreen';
import TrackScreen from './logic/screens/customer/TrackScreen';
import ProfileScreen from './logic/screens/customer/ProfileScreen';
import LoginScreen from './logic/screens/customer/LoginScreen';
import RegisterScreen from './logic/screens/customer/RegisterScreen';
import WelcomeScreen from './logic/screens/customer/WelcomeScreen';
import AdminRegistration from './logic/screens/admin/AdminRegistration';
import AdminDashboard from './logic/screens/admin/AdminDashboard';
import { stations, initialOrders } from './logic/data/mockData';

const sampleCustomerOrders = [
  {
    id: 1,
    customerName: 'john doe',
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

export default function App() {
  // Toggle between 'customer' or 'admin'
  const [userType, setUserType] = useState('customer'); // Set to 'admin' to see dashboard
  
  // Option 1: Skip registration - Set to true to see dashboard immediately
  const [isAdminRegistered, setIsAdminRegistered] = useState(false);
  
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [orders, setOrders] = useState(sampleCustomerOrders);
  const [currentOrder, setCurrentOrder] = useState(null);
  
  // Option 1: Default admin data - Dashboard will show immediately with sample orders
  const [adminData, setAdminData] = useState({
    stationName: 'AquaPure Station',
    ownerName: 'John Doe',
    email: 'john@aquapure.com',
    phone: '0912-345-6789',
    address: 'Carmen, Cagayan de Oro City',
    pricePerGallon: 30,
    deliveryFee: 25,
    waterTypes: ['Purified', 'Alkaline', 'Mineral']
  });
  
  const [historyOrders, setHistoryOrders] = useState([]);

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "Cinzel-Regular": require("./assets/fonts/Cinzel/static/Cinzel-Regular.ttf"),
    "Cinzel-Bold": require("./assets/fonts/Cinzel/static/Cinzel-Bold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  // Admin Registration Handler
  const handleAdminRegister = (data) => {
    setAdminData({
      ...data,
      stationName: 'AquaPure Station' // Ensure station name matches sample orders
    });
    setIsAdminRegistered(true);
    setCurrentScreen('dashboard');
  };

  // Handle Order Submission (Customer places order)
  const handleOrderSubmit = (orderData) => {
    const newOrder = {
      id: orders.length + 1,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      ...orderData,
      status: 'Pending'
    };
    setOrders([newOrder, ...orders]);
    setCurrentOrder(newOrder);
    setCurrentScreen('home');
  };

  // Handle Reorder
  const handleReorder = (order) => {
    const newOrder = {
      ...order,
      id: orders.length + 1,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Pending',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };
    setOrders([newOrder, ...orders]);
    setCurrentOrder(newOrder);
  };

  // Screen Router
  const renderScreen = () => {
    // ADMIN VIEW
    if (userType === 'admin') {
      if (!isAdminRegistered) {
        return <AdminRegistration onRegister={handleAdminRegister} />;
      }
      return <AdminDashboard orders={orders} setOrders={setOrders} adminData={adminData} />;
    }

    // CUSTOMER VIEW
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen navigation={{ navigate: setCurrentScreen }} />;
      
      case 'login':
        return <LoginScreen onNavigate={setCurrentScreen} />;
      
      case 'register':
        return <RegisterScreen onNavigate={setCurrentScreen} />;
      
      case 'home':
        return <Homepage 
          orders={orders} 
          stations={stations}
          onNavigate={setCurrentScreen}
          onReorder={handleReorder}
        />;
      
      case 'refillNow':
        return <RefillNowScreen 
          stations={stations}
          onBack={() => setCurrentScreen('home')}
          onSubmit={handleOrderSubmit}
        />;
      
      case 'schedule':
        return <ScheduleScreen 
          stations={stations}
          onBack={() => setCurrentScreen('home')}
          onSubmit={handleOrderSubmit}
        />;
      
      case 'history':
        return <HistoryScreen 
          orders={orders}
          historyOrders={historyOrders}
          onBack={() => setCurrentScreen('home')}
          onReorder={handleReorder}
        />;
      
      case 'browse':
        return <BrowseScreen 
          stations={stations}
          onBack={() => setCurrentScreen('home')}
          onNavigate={setCurrentScreen}
        />;
      
      case 'track':
        return <TrackScreen
          orders={orders}
          currentOrder={currentOrder}
          setOrders={setOrders}
          setHistoryOrders={setHistoryOrders}
          onBack={() => setCurrentScreen('home')}
          onNavigate={setCurrentScreen}
        />;
      
      case 'profile':
        return <ProfileScreen 
          onBack={() => setCurrentScreen('home')}
          onNavigate={() => setCurrentScreen('welcome')} 
        />;
      
      default:
        return <WelcomeScreen navigation={{ navigate: setCurrentScreen }} />;
    }
  };

  return renderScreen();
}