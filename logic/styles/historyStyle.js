import { StyleSheet } from 'react-native';

export default StyleSheet.create({

//tabs
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  tabItem: {
    flex: 1,
    paddingVertical: 5,
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
  },
  tabItemActive: {
    backgroundColor: '#133E87',
  },
  tabLabel: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '600',
  },
  tabLabelActive: {
    color: '#ffffffff',
    fontWeight: '700',
  },

//empty state
  emptyState: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#1e293b',
    fontWeight: '700',
  },
  emptyStateSubtext: {
    marginTop: 6,
    fontSize: 13,
    color: '#64748b',
  },

//order card
  orderCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 17,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },

  orderId: {
  fontSize: 16,
  fontWeight: '700',
  color: '#0f172a',
  marginBottom: 6, 
},

  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  orderDate: {
    fontSize: 13,
    color: '#475569',
    marginTop: 7,
  },

  orderStation: {
    fontSize: 15,
    color: '#0f172a',
    fontWeight: '700',
    marginTop: 2,
  },

  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 14,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1e293b',
  },

  statusDelivered: { backgroundColor: '#dcfce7' },
  statusCancelled: { backgroundColor: '#fee2e2' },
  statusPending: { backgroundColor: '#fef3c7' },
  statusInTransit: { backgroundColor: '#dbeafe' },

//order body
  orderBody: {
    marginTop: 15,
  },
  orderLine: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
  },
  orderLineSmall: {
    fontSize: 13,
    color: '#475569',
    marginTop: 3,
  },

//row
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#60a5fa',
  },
  totalLabel: {
    fontSize: 14,
    color: '#475569',
  },
  totalValue: {
    fontSize: 17,
    fontWeight: '800',
    color: '#0f172a',
  },

//reorder
  reorderButton: {
    marginTop: 15,
    backgroundColor: '#133E87',
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  reorderButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },

  successMessageContainer: {
  position: 'absolute',
  top: 300,
  left: '10%',
  right: '10%',
  backgroundColor: '#046ff3ff',
  padding: 10,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  shadowColor: '#15a3c0ff',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.7,
  shadowRadius: 8,
  elevation: 6,
  zIndex: 999,
},
successMessageText: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
},

});
