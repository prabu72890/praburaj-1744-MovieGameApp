import * as React from 'react';
import { Text, View, StyleSheet,Button, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>

    <Text style={styles.paragraph}>
      Quantity
    </Text>

      <Card>
        <AssetExample />
      </Card>

      <TouchableOpacity style={styles.button} onPress={() => alert('Order Placed Successfully')}>
        <Text style={styles.ButtonText}> Order Now </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
    button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding:4,
    margin:16,
    borderRadius:4,
  },
  ButtonText:{
    margin: 4,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#ffffff',
  }

});
