import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AntDesign } from '@expo/vector-icons';


export default function MatchCircleButton({icon}) {
  return (
    <Pressable style={styles.circleButton}>
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