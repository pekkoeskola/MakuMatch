import { View, Text, StyleSheet} from "react-native"
import { AntDesign } from "@expo/vector-icons"

export default function Stars({ outOfFive, style }) {
  return(
    <View style={style}>
      {Array.from(Array(outOfFive), (e, i) => <AntDesign name="star" size={30} color="white" /> )}
      {Array.from(Array(5-outOfFive), (e, i) => <AntDesign name="staro" size={30} color="white" /> )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
})