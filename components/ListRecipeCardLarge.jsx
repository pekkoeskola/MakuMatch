import { View, Text, ImageBackground, Image,  StyleSheet, Pressable } from "react-native"
import { Link } from "expo-router"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import {useRecipesDispatch} from "@/contexts/RecipesContext"

export default ListRecipeCardLarge = ({ recipe }) => {

  const imagePath = recipe.imagePath

  const dispatch = useRecipesDispatch()

  const onSave = () => {
    dispatch({
      type: "saved",
      id: recipe.id
    })
  }

  return(
    <Link href={`/recipedetails/${recipe.id}`} asChild>
      <Pressable style={styles.container}>
        <ImageBackground 
          source={imagePath}
          style={{width: "100%", height: 100, flexDirection: "column-reverse"}}
          imageStyle={styles.image}>
            <View style={styles.titleButtonContainer}>
              <Text style={styles.title}>{recipe.title}</Text>
              <Pressable onPress={onSave}>
                <MaterialCommunityIcons name="notebook-plus-outline" size={30} color="white"/>
              </Pressable>
            </View>
        </ImageBackground>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    margin: 10,
    borderColor: "green",
    width: "97%",
    alignSelf: "center",
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    color: "white",
    left: 5,
  },
  titleButtonContainer:{
    flexDirection: "row",
    margin: 8,
    justifyContent: "space-between"
  }
})