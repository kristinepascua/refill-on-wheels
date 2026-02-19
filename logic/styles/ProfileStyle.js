import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 7,
    backgroundColor: '#bfdbfe', 
  },

  profileHeader: {
    alignItems: 'center',
    paddingVertical: 18,
    marginTop: 12,
  },

  profileAvatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    backgroundColor: '#eef6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarEmoji: {
    fontSize: 36,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
  },
  quickEditBtn: {
    marginLeft: 8,
    padding: 6,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },

  statsRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  statCard: {
    backgroundColor: '#e6f2ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 6,
    color: '#0f172a',
  },
  statLabel: {
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },

  /* Sections */
  section: {
    marginTop: 18,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },

  // softened card to blend better with blue canvas
  card: {
    backgroundColor: '#ffffffee',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
  },

  // Info row (left icon, right text block) — used for name/phone/email/payment/change password
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoRowTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLeft: {
    width: 36,
    alignItems: 'center',
  },
  infoRight: {
    flex: 1,
    marginLeft: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
    marginTop: 2,
  },

  paymentArrow: {
    fontSize: 18,
    color: '#2563eb',
    transform: [{ translateY: 1 }],
  },

  /* Address list - soft card */
  addressCard: {
    backgroundColor: '#ffffffee',
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addressText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  addressSub: {
    fontSize: 13,
    color: '#475569',
    marginTop: 4,
  },

  addressActionsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  defaultBadge: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  defaultText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
  },

  iconOnlyBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#eaf6ff',
  },

  makeDefaultLink: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#eef6ff',
  },
  makeDefaultText: {
    color: '#2563eb',
    fontWeight: '700',
  },

  iconAddBtn: {
    backgroundColor: '#2563eb',
    padding: 8,
    borderRadius: 8,
  },

  /* Payment inline (in account card) */
  paymentDropdownInline: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  paymentTextInline: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0f172a',
  },

  /* Preferences */
  preferencesCard: {
    backgroundColor: '#ffffffee',
    padding: 12,
    borderRadius: 12,
    marginTop: 12,
  },
  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  preferenceLabel: {
    fontSize: 14,
    color: '#0f172a',
  },

  /* Reorder / logout */
  logoutBtn: {
    marginTop: 18,
    backgroundColor: '#608BC1',
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#608BC1',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  logoutText: {
    color: '#fffefeff',
    fontWeight: '700',
    fontSize: 16,
  },

  /* Modals */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(3,7,18,0.28)', // softer overlay for fade animation
    justifyContent: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 12,
  },

  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginTop: 12,
  },
  cancelBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  cancelText: {
    color: '#0f172a',
    fontWeight: '700',
  },
  saveBtn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#2563eb',
  },
  saveText: {
    color: '#fff',
    fontWeight: '700',
  },

  input: {
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },

  /* Dropdown / avatar modal */
  dropdownModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
  dropdownItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2ff',
  },
  dropdownText: {
    fontSize: 15,
    color: '#0f172a',
  },
  dropdownClose: {
    marginTop: 8,
    paddingVertical: 3,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#bfdbfe',
  },
    dropdownCloseText: {
    fontWeight: '700',
  },

  avatarModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  avatarOption: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 12,
    backgroundColor: '#f8fafc',
  },
  avatarImageOption: {
    width: 56,
    height: 56,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  avatarEmojiLarge: {
    fontSize: 28,
  },

  map: {
    height: 220,
    borderRadius: 8,
    marginTop: 8,
  },

  mapLabel: {
    marginTop: 12,
    fontSize: 13,
    color: '#475569',
  },

  addressModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },

  // small helpers
  iconRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
