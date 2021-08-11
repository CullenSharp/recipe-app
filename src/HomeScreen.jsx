import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

function HomeScreen() {
  const { colors } = useTheme();

  return(
    <View style={{...styles.container, backgroundColor: colors.surface}}>
      <Text style={{...styles.header, color: colors.onSurface}}>
        Hello, World 🌎
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  }
})

export default HomeScreen;