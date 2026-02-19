export const stations = [
  {
    id: 1,
    name: 'AquaPure Refill Station',
    distance: '0.4 km',
    pricePerGallon: 40,
    deliveryFee: 10,
    eta: '25–35 mins',
    rating: 4.8,
    waterTypes: ['Purified', 'Alkaline'],
    emoji: '💧'
  },
  {
    id: 2,
    name: 'BlueWave Water Depot',
    distance: '0.7 km',
    pricePerGallon: 38,
    deliveryFee: 15,
    eta: '30–45 mins',
    rating: 4.6,
    waterTypes: ['Purified', 'Mineral'],
    emoji: '🌊'
  },
  {
    id: 3,
    name: 'CrystalClear Hydration Hub',
    distance: '1.2 km',
    pricePerGallon: 42,
    deliveryFee: 10,
    eta: '45–55 mins',
    rating: 4.9,
    waterTypes: ['Alkaline', 'Mineral', 'Purified'],
    emoji: '💎'
  }
];

export const initialOrders = [
  {
    id: 1,
    date: 'Feb 26, 2025',
    station: 'AquaPure Refill Station',
    stationId: 1,
    qty: 2,
    total: 100,
    status: 'Delivered',
    waterType: 'Purified',
    address: 'Carmen, CDO',
    time: '10:30 AM'
  },
  {
    id: 2,
    date: 'Feb 19, 2025',
    station: 'BlueWave Water Depot',
    stationId: 2,
    qty: 1,
    total: 53,
    status: 'Delivered',
    waterType: 'Alkaline',
    address: 'Balulang, CDO',
    time: '9:45 AM'
  }
];