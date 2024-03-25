import { View, Text, ImageBackground, Image,  StyleSheet, Pressable } from "react-native"
import { Link } from "expo-router"

const ListRecipeCard = ({ recipe }) => {

  const imagePath = recipe.imagePath

  return(
    <Link href={`recipedetails/${recipe.id}`} asChild>
      <Pressable style={styles.container}>
        <ImageBackground 
          source={imagePath}
          style={{width: "100%", height: 100, flexDirection: "column-reverse"}}
          imageStyle={styles.image}>
            <Text style={styles.title}>{recipe.title}</Text>
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
    fontSize: 18,
    color: "white",
    top: 5,
    left: 15,
  },
})

export default ListRecipeCard