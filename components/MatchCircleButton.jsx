import { View, Pressable, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';


export default function MatchCircleButton({icon, iconFamily, onPress}) {
  if(iconFamily === "MaterialCommunityIcons"){
    return (
      <Pressable style={styles.circleButton} onPress={onPress} >
        <MaterialCommunityIcons name={icon} size={24} color="black" />
      </Pressable>
    );
  }

  return (
    <Pressable style={styles.circleButton} onPress={onPress} >
      <AntDesign name={icon} size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#fff',
    borderColor: "gray",
    borderWidth: 2,
    marginHorizontal: 10
  },
});