import React from "react"

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, View, Text, ScrollView} from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';

import Stars from "@/components/Stars"

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
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Image source={imagePath} style={styles.image}/>
        <Stars outOfFive={recipeDetails.rating} style={{position: "absolute", flexDirection: "row", marginTop: 260, marginLeft: 5}} />
        <Text style={styles.subtitle} >Ainekset</Text>
        {recipeDetails.ingredients.map((ingredient, index) => <Text key={index} style={styles.ingredients} >{ingredient}</Text>)}
        <Text style={styles.subtitle} >Vaiheet</Text>
        {recipeDetails.steps.map((step, index)=> <Text key={index} style={styles.steps} >{`${index + 1}. ${step}`}</Text>)}
      </ScrollView>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>

  );
}

const horizontalMargin = 10

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContentContainer: {
  },
  title: {
    fontSize: 35,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '300',
    marginHorizontal: horizontalMargin, 
    marginVertical: 10
  },
  ingredients: {
    fontSize: 18,
    marginHorizontal: horizontalMargin,
  },
  steps: {
    fontSize: 18,
    marginHorizontal: horizontalMargin,
  },
  image: {
    width: "100%",
    height: 300
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
