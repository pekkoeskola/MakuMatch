import { StyleSheet, Text, View } from 'react-native';
import { useState, useContext } from 'react';

import Animated, { useAnimatedProps, useSharedValue} from 'react-native-reanimated'

import MatchRecipeCardAnimated from '../../components/MatchRecipeCardAnimated'
import MatchRecipeCard from "../../components/MatchRecipeCard"
import MatchCircleButton from '@/components/MatchCircleButton'
import MatchButtons from '@/components/MatchButtons'

import Recipes from "../../constants/Recipes"

import { useRecipesDispatch } from '@/contexts/RecipesContext'

export default function TabOneScreen() {

  const [currentRecipe, setCurrentRecipe] = useState(Recipes[0])

  const dispatch = useRecipesDispatch()

  const nextRecipe = ()  => {
    if(currentRecipe.id === Recipes.length){
      setCurrentRecipe(Recipes[0])
    }
    else{
      setCurrentRecipe(Recipes[currentRecipe.id])
    }
  }

  const onLike = () => {
    dispatch({
      type: "liked",
      id: currentRecipe.id
    })
    nextRecipe()
  }

  return (
    <View style={[styles.container, {zIndex: -1}]}>
      <MatchRecipeCard currentRecipe={currentRecipe} nextRecipe={nextRecipe}/>
      <MatchButtons onLike={onLike} onDislike={nextRecipe} onAdd={nextRecipe} />
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
