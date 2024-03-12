import {View, Text, ImageBackground, Image,  StyleSheet} from "react-native"

const ListRecipeCard = ({ recipe }) => {

  const imagePath = recipe.imagePath

  //console.log(recipe)

  return(
    <View style={styles.container}>
      <ImageBackground 
        source={imagePath}
        style={{width: "100%", height: 100, flexDirection: "column-reverse"}}
        imageStyle={styles.image}>
         <Text style={styles.title}>{recipe.title}</Text>
      </ImageBackground>
    </View>
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