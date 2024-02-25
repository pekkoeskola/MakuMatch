
import {View, Text, Image, ImageBackground,StyleSheet} from "react-native"
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const MatchRecipeCard = ({zIndex}) => {

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(100)

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
      zIndex: zIndex,
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
        <ImageBackground source={require("../assets/images/pestopasta.jpg")} 
        style={{width: "100%", height: "100%", flexDirection: "column-reverse"}}
        imageStyle={styles.image}>
          <Text style={styles.title} >Pestopasta</Text>
        </ImageBackground>
      </Animated.View>
    </GestureDetector>
  )
}

export default MatchRecipeCard