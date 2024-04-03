import { Pressable, StyleSheet } from 'react-native'
import { Text, View, FlatList} from 'react-native'
import { Link } from "expo-router"

import { useRecipes } from "@/contexts/RecipesContext"

import ListRecipeCard from '@/components/ListRecipeCard'

export default function TabThreeScreen() {

  const recipes = useRecipes()

  const likedRecipes = recipes.filter(r => r.status === 2)

  return (
    <View style={styles.container}>
      <Link href={"likedrecipes"} asChild>
        <Pressable style={styles.button}>
          <Text style={{fontSize: 18}} >Liked Recipes</Text>
        </Pressable>
      </Link>
      <FlatList
        data={likedRecipes}
        renderItem={({item}) => <ListRecipeCard recipe={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        style={{alignSelf: "stretch"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
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
    borderWidth: 0,
    padding: 8,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white"
  },
});
