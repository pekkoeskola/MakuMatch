
import {View, Text, Image, ImageBackground,StyleSheet} from "react-native"
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const MatchRecipeCard = ({currentRecipe}) => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(100)

  const imagePath = currentRecipe.imagePath

  const drag = Gesture.Pan()
    .onChange((event) => {
      translateX.value += event.changeX;
      //translateY.value += event.changeY;
      opacity.value = 1 - Math.abs(translateX.value) / 300
    })
    .onFinalize(() => {
      opacity.value = 1
      translateX.value = 0
      translateY.value = 0
    })

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
      opacity: opacity.value
    };
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground:{
      width: "100%", 
      height: "100%", 
      flexDirection: "column-reverse"
    },
    image: {
      borderRadius: 20,
    },
    title: {
      fontSize: 30,
      top: 12,
      left: 15,
    },
  })

  return(
    <View style={[styles.container]}>
      <ImageBackground source={currentRecipe.imagePath} 
        style={styles.imageBackground}
        imageStyle={styles.image}>
          <Text style={styles.title} >{currentRecipe.title}</Text>
      </ImageBackground>
    </View>
  )
}

/**

      <ImageBackground source={currentRecipe.imagePath} 
        style={styles.imageBackground}
        imageStyle={styles.image}>
          <Text style={styles.title} >{currentRecipe.title}</Text>
      </ImageBackground>

      borderColor: "blue",
      borderWidth: 3,
      backgroundColor: "yellow",


 */


export default MatchRecipeCard