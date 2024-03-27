import { useContext } from "react"
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import ListRecipeCardLarge from '@/components/ListRecipeCardLarge'

import { useRecipes } from "@/contexts/RecipesContext"


export default function ModalScreen() {

  const recipes = useRecipes()

  const likedRecipes = recipes.filter(r => r.status === 1)

  return(
    <View style={styles.container}>
      <FlatList
        data={likedRecipes}
        renderItem={({item}) => <ListRecipeCardLarge recipe={item} />}
        keyExtractor={item => item.id}
        numColumns={1}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
