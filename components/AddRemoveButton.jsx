import { Pressable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function AddRemoveButton({ style, state, onPress }) {

  if(state === 2){
    return(
      <Pressable style={style} onPress={onPress}>
        <MaterialCommunityIcons name="notebook-minus-outline" size={30} color="white" />
      </Pressable>
    )
  }

  return(
    <Pressable style={style} onPress={onPress}>
      <MaterialCommunityIcons name="notebook-plus-outline" size={30} color="white" />
    </Pressable>
  )
}