import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Memuat gambar dari folder assets */}
      <Image
        source={require('./assets/profile.jpg')} // Path ke gambar
        style={styles.profileImage}
      />
      <Text style={styles.header}>BIODATA</Text>
      <Text style={styles.info}>Nama: Emily Pangemanan</Text>
      <Text style={styles.info}>Umur: 19 tahun</Text>
      <Text style={styles.info}>Status: Single</Text>
      <Text style={styles.info}>Pendidikan Terakhir: SMA</Text>
      <Text style={styles.info}>Hobi: Memasak</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Background color for contrast
    padding: 20, // Add padding to ensure content is not touching the edges
  },
  profileImage: {
    width: 100, // Width of the image
    height: 100, // Height of the image
    borderRadius: 50, // Make the image circular
    marginBottom: 20, // Spacing between the image and other content
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase', // Make text uppercase
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
