import { View, StyleSheet } from "react-native"
import MatchCircleButton from "./MatchCircleButton"

export default MatchButtons = ({ onLike, onDislike, onAdd}) => {
  return(
    <View style={styles.container}>
      <MatchCircleButton icon={"dislike1"} onPress={onDislike}/>
      <MatchCircleButton icon={"heart"} onPress={onAdd}/>
      <MatchCircleButton icon={"like1"} onPress={onLike}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  }
})