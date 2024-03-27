import { View, StyleSheet } from "react-native"
import MatchCircleButton from "./MatchCircleButton"
import { AntDesign } from "@expo/vector-icons"

export default MatchButtons = ({ onLike, onDislike, onSave}) => {
  return(
    <View style={styles.container}>
      <MatchCircleButton icon={"dislike1"} iconFamily={"AntDesign"} onPress={onDislike}/>
      <MatchCircleButton icon={"notebook-plus"} iconFamily={"MaterialCommunityIcons"} onPress={onSave}/>
      <MatchCircleButton icon={"like1"} iconFamily={"AntDesign"} onPress={onLike}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  }
})