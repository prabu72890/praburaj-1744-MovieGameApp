import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a 
        criminal mastermind manipulates the police to carry out his plan.
      </Text>
      <Image style={styles.movie} source={require('../assets/images.jfif')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000000',
    borderRadius:8,
  },
  paragraph: {
    margin: 20,
    marginTop: 0,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#ffffff',
  },
  movie: {
    height: 300,
    width: 200,
    borderRadius:8,
  }
});
