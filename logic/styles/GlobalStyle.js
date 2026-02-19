import { StyleSheet, Platform } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    backgroundColor: '#cbdceb',
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'Cinzel-Bold' : 'cinzel_bold',
    fontSize: 28,
    color: '#133e87',
    textAlign: 'center',
    marginBottom: 10,
    // Fallback fonts
    ...Platform.select({
      ios: {
        fontFamily: 'Cinzel-Bold',
      },
      android: {
        fontFamily: 'cinzel_bold',
      },
      default: {
        fontFamily: 'serif',
        fontWeight: 'bold',
      }
    })
  },
  subtitle: {
    fontFamily: Platform.OS === 'ios' ? 'Cinzel-Regular' : 'cinzel_regular',
    fontSize: 18,
    color: '#608bc1',
    textAlign: 'center',
    marginBottom: 20,
    // Fallback
    ...Platform.select({
      ios: {
        fontFamily: 'Cinzel-Regular',
      },
      android: {
        fontFamily: 'cinzel_regular',
      },
      default: {
        fontFamily: 'serif',
      }
    })
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'poppins_regular',
    fontSize: 14,
    color: '#333',
    // Fallback
    ...Platform.select({
      ios: {
        fontFamily: 'Poppins-Regular',
      },
      android: {
        fontFamily: 'poppins_regular',
      },
      default: {
        fontFamily: 'sans-serif',
      }
    })
  },
  buttonPrimary: {
    backgroundColor: '#133e87',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonSecondary: {
    backgroundColor: '#608bc1',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'poppins_semibold',
    fontSize: 16,
    color: '#fff',
    // Fallback
    ...Platform.select({
      ios: {
        fontFamily: 'Poppins-SemiBold',
      },
      android: {
        fontFamily: 'poppins_semibold',
      },
      default: {
        fontFamily: 'sans-serif',
        fontWeight: '600',
      }
    })
  },
  cardd: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    margin: 16,
    marginTop: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    margin: 16,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

// Helper function to check if fonts are available
export const getFontFamily = (fontName) => {
  const fontMap = {
    'Cinzel-Bold': Platform.OS === 'ios' ? 'Cinzel-Bold' : 'cinzel_bold',
    'Cinzel-Regular': Platform.OS === 'ios' ? 'Cinzel-Regular' : 'cinzel_regular',
    'Poppins-Regular': Platform.OS === 'ios' ? 'Poppins-Regular' : 'poppins_regular',
    'Poppins-SemiBold': Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'poppins_semibold',
  };
  
  return fontMap[fontName] || 'System';
};