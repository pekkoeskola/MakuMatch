import { StyleSheet, Text, View, Dimensions, StatusBar, Platform} from 'react-native';
import { useState, useContext } from 'react';
import { router } from "expo-router"
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import Swiper from "react-native-deck-swiper"

import MatchRecipeCard from "../../components/MatchRecipeCard"
import MatchButtons from '@/components/MatchButtons'

import Recipes from "../../constants/Recipes"

import { useRecipesDispatch } from '@/contexts/RecipesContext'

export default function TabOneScreen() {

  //TODO: maybe move these into a separate file, customise styles further
  const overlayLabels = {
    left: {
    title: 'Ei',
      style: {
        label: {
          borderColor: 'red',
          color: 'red',
          borderWidth: 5
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: -30
        }
      }
    },
    right: {
    title: 'Tykkää',
      style: {
        label: {
          borderColor: 'green',
          color: 'green',
          borderWidth: 5
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginTop: 30,
          marginLeft: 30
        }
      }
    },
    top: {
    title: 'Tallenna',
      style: {
        label: {
          borderColor: 'purple',
          color: 'purple',
          borderWidth: 5
        },
        wrapper: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }
    }
  }

  const [currentRecipe, setCurrentRecipe] = useState(Recipes[0])

  const tabBarHeight = useBottomTabBarHeight()
  const headerHeight = useHeaderHeight();
  const statusBarHeight = Platform.OS === "ios" ? 0 : StatusBar.currentHeight

  const dispatch = useRecipesDispatch()

  const nextRecipe = ()  => {
    if(currentRecipe.id === Recipes.length){
      setCurrentRecipe(Recipes[0])
    }
    else{
      setCurrentRecipe(Recipes[currentRecipe.id])
    }
  }

  //console.log(tabBarHeight)
  //console.log(Dimensions.get("window"))
  //console.log(Dimensions.get("screen"))

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
      {/*FIXED? adjust bottom margin automatically in response to tab bar height? right now hardcoded by eyeballing, feels a bit hacky. cannot use flex layout with Swiper */}
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
        overlayLabels={overlayLabels}
        backgroundColor="white"
        disableBottomSwipe={true}
        cardVerticalMargin={10}
        cardHorizontalMargin={10}
        containerStyle={styles.swiperContainer}
        marginBottom={tabBarHeight + headerHeight - statusBarHeight}
        >
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "stretch"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  swiperContainer: {
    position: "absolute",
    flex: 1,
    backgroundColor: "white",
  },
  cardStyle:{
    position: "absolute",
  }
});

/**

  INFO: buttons disabled for now

  <MatchButtons onLike={onLike} onDislike={nextRecipe} onSave={onSave}/>

    backgroundColor: "green",
    borderColor: "red",
    borderWidth: 3,
 */
