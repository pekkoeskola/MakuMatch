import React from "react"

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, View, Text } from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';

import Recipes from "../../constants/Recipes"

export default function RecipeDetailsScreen() {

  const {recipe} = useLocalSearchParams()

  const navigation = useNavigation();

  const recipeDetails = Recipes.find(r => r.id === Number(recipe))

  const imagePath = recipeDetails.imagePath

  React.useEffect(() => {
    navigation.setOptions({ title: recipeDetails.title });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image}/>
      <Text style={styles.title}>{recipeDetails.title}</Text>

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
  image: {
    width: "100%",
    height: 200
  },
});
