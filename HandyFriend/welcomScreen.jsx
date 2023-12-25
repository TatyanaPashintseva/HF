import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export const WelcomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const handleNeedHelpPress = () => {
    console.log('Need Help button clicked');
  };

  const handleOfferHelpPress = () => {
    console.log('Offer Help button clicked');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5%', 
    },
    appName: {
      fontSize: screenWidth * 0.1,
      fontWeight: 'bold',
      marginBottom: '10%', 
    },
    image: {
      width: '100%',
      height: '45%', 
      marginBottom: '5%', 
    },
    text: {
      fontSize: screenWidth * 0.05, 
      fontWeight: 'bold',
      marginBottom: '35%', 
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#1c2f36'
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%', 
    },
    buttonNeedHelp: {
      backgroundColor: '#c36559',
      padding: '5%', 
      width: '47%',
      borderRadius: 10,
    },
    buttonOfferHelp: {
      backgroundColor: '#759234',
      padding: '5%', 
      width: '47%',
      borderRadius: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: screenWidth * 0.04, 
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Handy Friend</Text>
      <Image
        source={require('./assets/hf-welcome.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Together for a Stronger Homeland</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.buttonNeedHelp} onPress={handleNeedHelpPress}>
          <Text style={styles.buttonText}>I Need Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOfferHelp} onPress={handleOfferHelpPress}>
          <Text style={styles.buttonText}>Offer Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;



