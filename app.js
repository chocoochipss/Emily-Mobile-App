import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image style={styles.image} source={require('./assets/profile.jpg')} />

      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Nama:</Text>
        <Text style={styles.infoText}>Emily Sintikhe Pangemanan</Text>

        <Text style={styles.infoLabel}>Tempat Tinggal:</Text>
        <Text style={styles.infoText}>Tomohon </Text>

        <Text style={styles.infoLabel}>NIM:</Text>
        <Text style={styles.infoText}>105022210036</Text>

        <Text style={styles.infoLabel}>Fakultas:</Text>
        <Text style={styles.infoText}>Ilmu Komputer</Text>

        <Text style={styles.infoLabel}>Jurusan:</Text>
        <Text style={styles.infoText}>Informatika</Text>

        <Text style={styles.infoLabel}>Hobi:</Text>
        <Text style={styles.infoText}>Memasak</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    margin: 20,
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 100,
    alignSelf: 'center',
    marginVertical: 20,
  },
  infoContainer: {
    marginHorizontal: 20,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default App;
