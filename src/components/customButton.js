import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ backgroundColor, color, text, onPress, fontSize = 16, width = 120 }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor,
      width,
    },
    buttonText: {
      color,
    },
  });

  return (
    <TouchableOpacity
      className="items-center p-3 rounded-xl"
      style={styles.button}
      onPress={onPress}>
      <Text className="font-bold" style={styles.buttonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
