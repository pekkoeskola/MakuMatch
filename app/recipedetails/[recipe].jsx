import React from "react"

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function RecipeDetailsScreen() {

  const {recipe} = useLocalSearchParams()

  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({ title: recipe });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
