// ========================================
// FILE: styles/styles.js
// ========================================
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Container & Layout
  container: {
    flex: 1,
    backgroundColor: '#CBDCEB',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },

  // Header
  headerr: {
    backgroundColor: '#133E87',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    backgroundColor: '#133E87',
    paddingHorizontal: 20,
    paddingVertical: 20,
    height: 390,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 15,
  },
  headerImage: {
    marginLeft: -70,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#CBDCEB',
    textAlign: 'center',
  },
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
  },
  headerLocationText: {
    color: '#ffffff',
    fontSize: 14,
  },
  locationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#133E87',
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
    gap: 8,
  },
  locationText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    zIndex: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  // Sections
  section: {
    marginTop: 50,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  sectionTitleDark: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  viewAllText: {
    color: '#ffffff',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  viewAllLink: {
    color: '#2563eb',
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  // Quick Actions
  sections: {
    marginTop: -60,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    padding: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderColor: '#CBDCEB',
    borderWidth: 5,
  },
  actionIconContainer: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  actionButtonText: {
    color: '#1f2937',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    marginTop: -5,
  },

  // Station Cards
  stationCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  stationContent: {
    flexDirection: 'row',
    gap: 16,
  },
  stationIcon: {
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stationEmoji: {
    fontSize: 36,
  },
  stationInfo: {
    flex: 1,
  },
  stationName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  stationDistance: {
    fontSize: 11,
    color: '#6b7280',
    marginBottom: 8,
  },
  stationDetails: {
    gap: 4,
  },
  detailText: {
    fontSize: 11,
    color: '#374151',
  },
  detailLabel: {
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  ratingLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  stationActions: {
    gap: 8,
  },
  iconButton: {
    backgroundColor: '#dbeafe',
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Orders
  ordersContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    marginBottom: -60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  ordersTitleDark: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  orderCard: {
    backgroundColor: '#608BC1',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#bfdbfe',
    marginBottom: 12,
  },
  adminOrderCard: {
    backgroundColor: '#eff6ff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#bfdbfe',
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  orderHeaderLeft: {
    flex: 1,
  },
  orderInfo: {
    flex: 1,
  },
  orderId: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  orderDate: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  orderCustomer: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  orderStation: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 4,
  },
  statusBadge: {
    backgroundColor: '#d1fae5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusBadgePending: {
    backgroundColor: '#fed7aa',
  },
  statusBadgeInTransit: {
    backgroundColor: '#bfdbfe',
  },
  statusBadgeDelivered: {
    backgroundColor: '#bbf7d0',
  },
  statusText: {
    color: '#065f46',
    fontSize: 11,
    fontWeight: '600',
  },
  orderDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 12,
  },
  adminOrderDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 12,
  },
  orderDetailItem: {
    width: '47%',
    marginBottom: 8,
  },
  orderDetailLabel: {
    fontSize: 11,
    color: '#6b7280',
  },
  orderDetailValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  orderDetailValueGreen: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669',
  },
  reorderButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  reorderButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
  },

  // Order Actions (Admin)
  orderActions: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  acceptButton: {
    flex: 1,
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
  },
  declineButton: {
    flex: 1,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  declineButtonText: {
    color: '#1f2937',
    fontWeight: '600',
    fontSize: 13,
  },
  inTransitButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  inTransitButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
  },
  deliveredButton: {
    backgroundColor: '#16a34a',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 12,
  },
  deliveredButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 13,
  },

  // Bottom Navigation
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

  // Forms
  formSection: {
    marginTop: 20,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#1f2937',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 8,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 14,
    color: '#1f2937',
  },
  selectionCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 14,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  selectionCardActive: {
    backgroundColor: '#dbeafe',
    borderColor: '#2563eb',
  },
  selectionCardContent: {
    flex: 1,
  },
  selectionCardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  selectionCardSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  submitButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Water Types
  waterTypeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  waterTypeChip: {
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
  waterTypeChipActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb',
  },
  waterTypeChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
  waterTypeChipTextActive: {
    color: '#ffffff',
  },

  // Filter
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  filterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  filterTitle: {
    color: '#133E87',
    fontSize: 14,
    fontWeight: '600',
  },
  filterScroll: {
    flexDirection: 'row',
  },
  filterChip: {
    borderColor: '#133E87',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: '#133E87',
  },
  filterChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#133E87',
  },
  filterChipTextActive: {
    color: '#ffffff',
  },

  // Empty State
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#bfdbfe',
    marginTop: 8,
    textAlign: 'center',
  },

  // Tracking
  trackingCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
  },
  trackingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  trackingStation: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 24,
  },
  trackingSteps: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  trackingStep: {
    alignItems: 'center',
    flex: 1,
  },
  trackingStepIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  trackingStepIconActive: {
    backgroundColor: '#2563eb',
  },
  trackingStepText: {
    fontSize: 11,
    color: '#6b7280',
    textAlign: 'center',
  },
  trackingLine: {
    height: 2,
    flex: 1,
    backgroundColor: '#e5e7eb',
    marginHorizontal: -10,
  },
  trackingLineActive: {
    backgroundColor: '#2563eb',
  },
  orderDetailsCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  orderDetailsSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  orderDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  orderDetailsLabel: {
    fontSize: 13,
    color: '#6b7280',
  },
  orderDetailsValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1f2937',
    flex: 1,
    textAlign: 'right',
  },

  // Profile
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderRadius: 16,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#6b7280',
  },
  profileSection: {
    marginTop: 20,
  },
  profileSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  profileInfoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
  },
  profileInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    gap: 12,
  },
  profileInfoContent: {
    flex: 1,
  },
  profileInfoLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  profileInfoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginTop: 2,
  },
  profileMenuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    gap: 12,
  },
  profileMenuButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },

  // Stats (Admin)
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 16,
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '47%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
  },

  // Info Card (Admin)
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  infoGrid: {
    gap: 16,
  },
  infoItem: {
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },

  // Quick Actions (Admin)
  quickActionsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  quickActionCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  quickActionText: {
    color: '#1f2937',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
  },
});