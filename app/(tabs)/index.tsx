import { StyleSheet, Text, View } from 'react-native';
import { useState, useContext } from 'react';

import Animated, { useAnimatedProps, useSharedValue} from 'react-native-reanimated'

import MatchRecipeCardAnimated from '../../components/MatchRecipeCard'
import MatchCircleButton from '@/components/MatchCircleButton'
import MatchButtons from '@/components/MatchButtons'

import Recipes from "../../constants/Recipes"

import { LikedRecipesContext } from '@/contexts/LikedRecipesContext'

export default function TabOneScreen() {

  const [currentRecipe, setCurrentRecipe] = useState(Recipes[0])

  const likedrecipes = useContext(LikedRecipesContext)

  const nextRecipe = ()  => {
    if(currentRecipe.id === Recipes.length){
      setCurrentRecipe(Recipes[0])
    }
    else{
      setCurrentRecipe(Recipes[currentRecipe.id])
    }
  }

  const onLike = () => {

    nextRecipe()
  }

  return (
    <View style={[styles.container, {zIndex: -1}]}>
      <MatchRecipeCardAnimated currentRecipe={currentRecipe} nextRecipe={nextRecipe}/>
      <MatchButtons onLike={nextRecipe} onDislike={nextRecipe} onAdd={nextRecipe} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
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
