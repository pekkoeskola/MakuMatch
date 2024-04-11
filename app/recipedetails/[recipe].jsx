import React, { useState } from "react"

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, View, Text, ScrollView} from 'react-native';

import { useLocalSearchParams, useNavigation } from 'expo-router';

import { useRecipes } from '@/contexts/RecipesContext'
import { useRecipesDispatch } from '@/contexts/RecipesContext'

import Stars from "@/components/Stars"
import AddRemoveButton from "../../components/AddRemoveButton";
import Duration from "@/components/Duration"


export default function RecipeDetailsScreen() {

  const {recipe} = useLocalSearchParams()
  const navigation = useNavigation();

  const recipes = useRecipes()
  const dispatch = useRecipesDispatch()

  const recipeDetails = recipes.find(r => r.id === Number(recipe))

  const [buttonState, setButtonState] = useState(recipeDetails.status)


  const onAddRemoveButtonPress = () => {
    if(buttonState === 2){
      setButtonState(1)
      dispatch({
        type: "removed",
        id: recipeDetails.id
      })
    }
    else{
      setButtonState(2)
      dispatch({
        type: "saved",
        id: recipeDetails.id
      })
    }
  }

  React.useEffect(() => {
    navigation.setOptions({ title: recipeDetails.title });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <Image source={recipeDetails.imagePath} style={styles.image}/>
        <Stars outOfFive={recipeDetails.rating} style={{position: "absolute", flexDirection: "row", marginTop: 260, marginLeft: 8}} />
        <AddRemoveButton style={{position: "absolute", alignSelf: "flex-end",  marginTop: 260, right: 8,}} state={buttonState} onPress={onAddRemoveButtonPress}/>
        <Duration duration={recipeDetails.duration} style={styles.duration} />
        <Text style={styles.subtitle} >Ainekset</Text>
        {recipeDetails.ingredients.map((ingredient, index) => <Text key={index} style={styles.ingredients} >{ingredient}</Text>)}
        <Text style={styles.subtitle} >Ohjeet</Text>
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
  duration: {
    fontSize: 18,
    marginTop: 5,
    marginLeft: horizontalMargin
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
