import {Text} from "react-native"

export default function Duration({duration, style}) {
  const h = Math.floor(duration/60)
  return(
    <Text style={style} >{h ? h + " h" : ""} {duration%60} mins</Text>
  )
}