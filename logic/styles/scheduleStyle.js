// styles/scheduleStyle.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },

  // Header
  headerGradient: {
    backgroundColor: '#133E87',
    paddingBottom: 20,
    paddingTop: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#bfdbfe',
  },
  headerIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Progress Indicator (4 steps for schedule)
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff',
    marginBottom: 16,
  },
  progressStep: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  progressCircleActive: {
    backgroundColor: '#133E87',
  },
  progressNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9ca3af',
  },
  progressNumberActive: {
    color: '#ffffff',
  },
  progressLabel: {
    fontSize: 10,
    color: '#6b7280',
    fontWeight: '500',
  },
  progressLine: {
    width: 30,
    height: 2,
    backgroundColor: '#e5e7eb',
    marginHorizontal: 4,
    marginBottom: 24,
  },
  progressLineActive: {
    backgroundColor: '#133E87',
  },

  // Scroll Content
  scrollContent: {
    flex: 1,
  },

  // Section
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
    marginTop: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },

  // Station Cards
  stationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  stationCardActive: {
    borderColor: '#133E87',
    backgroundColor: '#f3e8ff',
  },
  stationCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  stationIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stationEmoji: {
    fontSize: 28,
  },
  stationInfo: {
    flex: 1,
  },
  stationName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 6,
  },
  stationDetails: {
    flexDirection: 'row',
    gap: 12,
  },
  stationDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  stationDetailText: {
    fontSize: 12,
    color: '#6b7280',
  },
  checkIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#133E87',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Water Type Grid
  waterTypeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  waterTypeCard: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ffffff',
    position: 'relative',
  },
  waterTypeCardActive: {
    borderColor: '#133E87',
    backgroundColor: '#f3f4f6',
  },
  waterTypeIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  waterTypeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  waterTypeTextActive: {
    color: '#ffffff',
  },
  waterTypeCheck: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Input Cards
  inputCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  inputIconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
    paddingVertical: 12,
  },
  inputUnit: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 8,
  },

  // Schedule Grid
  scheduleGrid: {
    flexDirection: 'row',
    gap: 12,
  },

  // Scheduled Info Card
  scheduledInfoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    borderWidth: 2,
    borderColor: '#133E87',
  },
  scheduledIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  scheduledInfo: {
    flex: 1,
  },
  scheduledLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  scheduledValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#133E87',
  },

  // Summary Card
  summaryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'right',
    flex: 1,
    marginLeft: 8,
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  },
  summaryRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
  },
  summaryLabelTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  summaryValueTotal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#133E87',
  },

  // Bottom Container
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 10,
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 16,
  },
  totalContainer: {
    flex: 1,
  },
  totalLabel: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#133E87',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  scheduleButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
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
    color: '#133E87',
  },
  navText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#6b7280',
  },
   scheduleSection: {
    marginBottom: 20,
  },
  
  // Date Selection
  dateScrollView: {
    marginTop: 12,
  },
  dateCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    alignItems: 'center',
    minWidth: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  dateCardActive: {
    backgroundColor: '#133E87',
    borderColor: '#133E87',
  },
  dateDay: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: 4,
  },
  dateDayActive: {
    color: '#bfdbfe',
  },
  dateNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  dateNumberActive: {
    color: '#ffffff',
  },
  dateMonth: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },
  dateMonthActive: {
    color: '#bfdbfe',
  },
  
  // Time Selection
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  timeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
    borderColor: '#ffffff',
    minWidth: '30%',
  },
  timeCardActive: {
    backgroundColor: '#133E87',
    borderColor: '#133E87',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  timeTextActive: {
    color: '#ffffff',
  },
  
  // Scheduled Info Card
  scheduledInfoCard: {
    backgroundColor: '#f0fdf4',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#86efac',
  },
  scheduledIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#dcfce7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scheduledInfo: {
    flex: 1,
  },
  scheduledLabel: {
    fontSize: 12,
    color: '#16a34a',
    fontWeight: '500',
    marginBottom: 4,
  },
  scheduledValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#15803d',
  },

  // Modal Styles (same as refillNowStyle)
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#bfdbfe',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  modalHeaderText: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    padding: 20,
  },
  modalInfoCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    gap: 12,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  modalInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  modalInfoTextContainer: {
    flex: 1,
  },
  modalInfoLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  modalInfoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#ffffff',
  },
  modalTotalContainer: {
    flex: 1,
  },
  modalTotalLabel: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
  },
  modalTotalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  modalPlaceOrderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    shadowColor: '#133E87',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  modalPlaceOrderButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

paymentOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.32)',
  justifyContent: 'center',   // centers vertically
  alignItems: 'center',        // centers horizontally
  paddingHorizontal: 26,
},

paymentModal: {
  width: '100%',
  backgroundColor: '#ffffff',
  paddingVertical: 25,
  paddingHorizontal: 22,
  borderRadius: 18,
  elevation: 0,
},

paymentmodalTitle: {
  fontSize: 17,
  fontWeight: '700',
  color: '#0c3875ff',
  marginBottom: 16,
  textAlign: 'center',},

methodOption: {
  backgroundColor: '#e0f2ff',
  borderRadius: 20,
  paddingVertical: 5,
  paddingHorizontal: 5,
  marginBottom: 8,
  borderWidth: 1,
  borderColor: '#95b1edff',
},

methodText: {
  textAlign: 'center',
  fontSize: 13,
  fontWeight: '600',
  color: '#1f2937',
},

closeLabel: {
  marginTop: 10,
  fontSize: 15,
  fontWeight: '600',
  color: '#456cbfff',
  borderColor: '#c5dff5ff',
  borderWidth: 1,
  paddingVertical: 4,
  borderRadius: 12,
  textAlign: 'center',
},

//payment simulation screen styles
paymentScreenBox: {
  width: '90%',
  backgroundColor: '#ffffff',
  paddingVertical: 32,
  paddingHorizontal: 20,
  borderRadius: 22,
  alignItems: 'center',
  elevation: 0,
},

paymentTitle: {
  fontSize: 17,
  fontWeight: '700',
  color: '#1f2937',
  marginBottom: 6,
},

paymentSub: {
  fontSize: 13,
  color: '#6b7280',
  marginBottom: 18,
},

fakeQR: {
  width: '100%',
  paddingVertical: 30,
  paddingHorizontal: 30,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#8eadf0',
  backgroundColor: '#e0f2ff',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 18,
},

qrText: {
  fontSize: 12,
  fontWeight: '600',
  color: '#4a65bd',
  alignItems: 'center',
},

paymentButton: {
  width: '100%',
  backgroundColor: '#54a6d9',
  paddingVertical: 7,
  borderRadius: 12,
  alignItems: 'center',
  marginTop: 5,
},

paymentButtonText: {
  fontSize: 13,
  fontWeight: '700',
  color: '#ffffff',
},

paymentcloseLabel: {
  marginTop: 3,
  fontSize: 14,     
  fontWeight: '700',
  color: '#456cbfff',
  borderColor: '#d7e5f1ff',
  backgroundColor: '#e0f2ff',
  borderWidth: 1,
  paddingVertical: 4,
  paddingHorizontal: 105,
  borderRadius: 12,
  textAlign: 'center',
},

});