import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  topContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },

  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    paddingVertical: 20,
  },

  //line
  stepConnector: {
    position: 'absolute',
    top: 50,
    left: 30,
    right: 30,
    height: 3,
    backgroundColor: '#2759a3ff',
    borderRadius: 2,
    zIndex: -1,
  },
  stepConnectorActive: {
    backgroundColor: '#003dc0ff',
  },

  //steps
  stepItem: {
    alignItems: 'center',
    width: 70,
  },

  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#003dc0ff',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepCircleActiveBig: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#2e93ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepLabel: {
    marginTop: 10,
    fontSize: 12,
    color: '#000c25ff',
    textAlign: 'center',
  },

  stepLabelActiveBig: {
    color: '#080808ff',
    fontWeight: '800',
    fontSize: 14,
  },

  emptyState: {
    marginTop: 40,
    alignItems: 'center',
  },

  emptyStateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
  },

  emptyStateSubtext: {
    fontSize: 14,
    marginTop: 4,
    color: '#6b7280',
  },

  //order card styles
  orderCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    elevation: 3,
  },

 orderCardSelected: {
  borderWidth: 2,
  borderColor: '#02abff',
  shadowColor: '#02ffccff',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.8,
  shadowRadius: 10,
  elevation: 8,
},

  statusBadge: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 20,
  },

  statusPending: {
    backgroundColor: '#f9f1c2ff',
  },

  statusPreparing: {
    backgroundColor: '#fca5a5',
  },

  statusInTransit: {
    backgroundColor: '#93c5fd',
  },

  statusDelivered: {
    backgroundColor: '#86efac',
  },

  statusText: {
    fontWeight: '500',
    color: '#1f2937',
  },

  orderDate: {
    fontSize: 12,
    color: '#6b7280',
  },

  orderId: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1f2937',
  },

  orderStation: {
    fontSize: 14,
    color: '#6b7280',
  },

  totalLabel: {
    fontSize: 12,
    color: '#6b7280',
  },

  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#002b9fff',
  },

  orderBody: {
    marginTop: 15,
  },

  orderLine: {
    fontSize: 14,
    color: '#1f2937',
  },

  orderLineSmall: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
  },

  orderActions: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  //cancel button
  cancelButton: {
    backgroundColor: '#f66a6aff',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
  },

  cancelButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

//modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 5,
    marginHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  noButton: { backgroundColor: '#ddd' },
  yesButton: {
    backgroundColor: '#fa6262ff',
    shadowColor: '#ff4d4d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 8,
    elevation: 5,
  },
  noText: { color: '#333', fontWeight: 'bold' },
  yesText: { color: '#fff', fontWeight: 'bold' },

    bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 2,
    borderTopColor: '#e5e7eb',
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },
  navTextActive: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2563eb',
  },
  navText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6b7280',
  },
});
