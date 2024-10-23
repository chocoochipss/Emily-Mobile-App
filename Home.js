import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Users List</Text>
      {users.length === 0 ? (
        <Text style={styles.infoText}>Loading...</Text>
      ) : (
        users.map(item => (
          <View key={item.id} style={styles.userContainer}>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Name: </Text>
              {item.name}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Username: </Text>
              {item.username}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Email: </Text>
              {item.email}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Address: </Text>
              {`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Phone: </Text>
              {item.phone}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'left',
  },
  userContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
  },
});
