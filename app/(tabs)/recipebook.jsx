import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link } from "expo-router"

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Link href={"likedrecipes"} asChild>
        <Pressable style={styles.button}>
          <Text style={{fontSize: 18}} >Liked recipes</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderWidth: 2,
    padding: 5,
    borderColor: "gray",
    borderRadius: 10
  },
});
