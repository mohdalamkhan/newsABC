import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    navigation.navigate('home');
  }, 2000);

  return (
    <View style={styles.container}>
      <Text style={styles.flashText}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  flashText: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
});
