import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Container & Layout
  container: {
    backgroundColor: '#CBDCEB',
    borderTopLeftRadius: 60,
    marginTop: -50,
    paddingTop: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
 headerr: {
    backgroundColor: '#608BC1',
    paddingHorizontal: 20,
    paddingVertical: 60,
    marginTop: -45,
  },
  headerImage: {
    height: 120,
    width: 120,
    alignItems: 'left',
    alignSelf: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: -10,

  },
  headerSubtitle: {
    fontSize: 18,
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
   formSection: {
    marginTop: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#133E87',
    marginBottom: 8,
    marginTop: 10,
    marginLeft: 4,
  },
  input: {
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#133E87',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#608BC1',
    gap: 5,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 14,
    color: '#133E87',
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
    borderColor: '#133E87',
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
    backgroundColor: '#133E87',
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
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: '#608BC1',
  },
  waterTypeChipActive: {
    backgroundColor: '#133E87',
    borderColor: '#133E87',
  },
  waterTypeChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
  },
  waterTypeChipTextActive: {
    color: '#ffffff',
  },



 // Terms Modal Styles
  termsModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  termsModalContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    width: '100%',
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 10,
  },
  termsModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#e5e7eb',
  },
  termsHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  termsHeaderText: {
    flex: 1,
  },
  termsModalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  termsModalSubtitle: {
    fontSize: 13,
    color: '#6b7280',
  },
  termsCloseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsContent: {
    padding: 20,
    maxHeight: 400,
  },
  termsSection: {
    marginBottom: 24,
  },
  termsSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#133E87',
    marginBottom: 12,
  },
  termsText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 22,
    textAlign: 'justify',
  },
  termsHighlight: {
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    borderWidth: 1,
    borderColor: '#86efac',
    marginTop: 8,
  },
  termsHighlightText: {
    fontSize: 13,
    color: '#15803d',
    lineHeight: 20,
    flex: 1,
    fontWeight: '500',
  },
  termsAgreementSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  checkboxActive: {
    backgroundColor: '#133E87',
    borderColor: '#133E87',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
    flex: 1,
  },
  termsModalFooter: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  termsDeclineButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  termsDeclineButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b7280',
  },
  termsAcceptButton: {
    flex: 1,
    backgroundColor: '#133E87',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#133E87',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  termsAcceptButtonDisabled: {
    backgroundColor: '#d1d5db',
    shadowOpacity: 0,
    elevation: 0,
  },
  termsAcceptButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },





  
  });