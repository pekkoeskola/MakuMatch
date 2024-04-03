import { StyleSheet, Text, View } from 'react-native';
import { useState, useContext } from 'react';
import { router } from "expo-router"
import Swiper from "react-native-deck-swiper"

import MatchRecipeCard from "../../components/MatchRecipeCard"
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

  const onLike = (id) => {
    dispatch({
      type: "liked",
      id: id + 1
    })
  }

  const onSave = (id) => {
    dispatch({
      type: "saved",
      id: id + 1
    })
  }

  const onTap = (id) => {
    router.push(`/recipedetails/${id+1}`)
  }

  return (
    <View style={styles.container}>
      {/*TODO adjust bottom margin automatically in response to tab bar height? right now hardcoded by eyeballing, feels a bit hacky. cannot use flex layout with Swiper */}
      <Swiper
        cards={Recipes}
        renderCard={(card) => {
          return (
            <MatchRecipeCard currentRecipe={card}/>
          )
        }}
        infinite={true}
        showSecondCard={true}
        stackSize={2}
        onSwipedRight={onLike}
        onSwipedTop={onSave}
        onTapCard={onTap}
        containerStyle={styles.swiperContainer}
        cardStyle={styles.cardStyle}
        cardVerticalMargin={10}
        cardHorizontalMargin={10}
        backgroundColor='white'
        marginBottom={109}
        disableBottomSwipe={true}
        >
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "stretch",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  swiperContainer: {
    flex: 1,
    position: "absolute",
  },
  cardStyle:{
    position: "absolute",
    flex: 1,
  }
});

/**

  INFO: buttons disabled for now

  <MatchButtons onLike={onLike} onDislike={nextRecipe} onSave={onSave}/>

    backgroundColor: "green",
    borderColor: "red",
    borderWidth: 3,
 */
