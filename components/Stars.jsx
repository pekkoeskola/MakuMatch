import { View, Text, StyleSheet} from "react-native"
import { AntDesign } from "@expo/vector-icons"


//TODO: add ability for user to rate recipes themselves using this compoment?

export default function Stars({ outOfFive, style }) {
  return(
    <View style={style}>
      {Array.from(Array(outOfFive), (_, i) => <AntDesign name="star" size={30} color="white" key={i} /> )}
      {Array.from(Array(5-outOfFive), (_, i) => <AntDesign name="staro" size={30} color="white" key={i} /> )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
})