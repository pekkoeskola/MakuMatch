import { useContext } from "react"
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import ListRecipeCard from '@/components/ListRecipeCard'

import { RecipesContext } from "@/contexts/RecipesContext"


export default function ModalScreen() {

  const recipes = useContext(RecipesContext)

  const likedRecipes = recipes.filter(r => r.liked)

  return(
    <View style={styles.container}>
      <FlatList
        data={likedRecipes}
        renderItem={({item}) => <ListRecipeCard recipe={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
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
