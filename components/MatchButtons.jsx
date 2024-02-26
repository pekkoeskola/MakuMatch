import { View, StyleSheet } from "react-native"
import MatchCircleButton from "./MatchCircleButton"

export default MatchButtons = () => {
  return(
    <View style={styles.container}>
      <MatchCircleButton icon={"dislike1"} />
      <MatchCircleButton icon={"heart"} />
      <MatchCircleButton icon={"like1"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  }
})