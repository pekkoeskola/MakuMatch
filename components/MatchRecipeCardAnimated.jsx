
import {View, Text, Image, ImageBackground,StyleSheet} from "react-native"
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const MatchRecipeCard = React.forwardRef( ({currentRecipe, onNew}, ref) => {

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
      margin: 15,
      borderColor: "green",
      alignSelf: "stretch",
    },
    image: {
      flex: 1,
      borderRadius: 20,
    },
    title: {
      fontSize: 30,
      top: 12,
      left: 15,
    },
  })

  return(
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, styles.container]}>
        <ImageBackground source={currentRecipe.imagePath} 
        style={{width: "100%", height: "100%", flexDirection: "column-reverse"}}
        imageStyle={styles.image}>
          <Text style={styles.title} >{currentRecipe.title}</Text>
        </ImageBackground>
      </Animated.View>
    </GestureDetector>
  )
}
)

const MatchRecipeCardAnimated = Animated.createAnimatedComponent(MatchRecipeCard)

export default MatchRecipeCardAnimated