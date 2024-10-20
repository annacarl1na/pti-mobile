import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
    fontFamily: 'lucida grande',
    
  },
  title: {

    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333', // Modern subtle color
    fontFamily: 'lucida grande',
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF', // Slightly softer black
    marginBottom: 160,
    textAlign: 'center',
    fontFamily: 'tahoma', 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8, // Rounded corners for a modern look
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#1E90FF', // Slightly different shade of blue
    padding: 12,
    borderRadius: 8, // More rounded for a modern feel
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16, // Added for better readability
  },
  link: {
    color: '#1E90FF',
    textAlign: 'center',
    textDecorationLine: 'underline', // Added for link styling
  },
  patientItem: {
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8, // Added for a softer look
  },
});

export default styles;
