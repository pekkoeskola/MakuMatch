import { StyleSheet } from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import Animated, { useAnimatedProps, useSharedValue} from 'react-native-reanimated';

import MatchRecipeCardAnimated from '../../components/MatchRecipeCard';
import MatchCircleButton from '@/components/MatchCircleButton'
import MatchButtons from '@/components/MatchButtons'


export default function TabOneScreen() {

  const recipes = [
    {
      title: "Pestopasta",
      imagePath: require("../../assets/images/pestopasta.jpg")
    },
    {
      title: "Papupaistos",
      imagePath: require("../../assets/images/Papupaistos.jpg")
    }
  ]

  const [currentRecipe, setCurrentRecipe] = useState(recipes[0])

  //const currentRecipe = useSharedValue(recipes[0])

  const switchRecipe = ()  => {
    if(currentRecipe.title === "Pestopasta"){
      setCurrentRecipe(recipes[1])
    }
    else{
      setCurrentRecipe(recipes[0])
    }
  }

  const onNextRecipe = async () => {
    switchRecipe()
  }

  return (
    <View style={[styles.container, {zIndex: -1}]}>
      <MatchRecipeCardAnimated currentRecipe={currentRecipe} nextRecipe={onNextRecipe}/>
      <MatchButtons />
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
