import { StyleSheet, FlatList, Text, TextInput, View } from 'react-native';
import { useState } from "react";

import ListRecipeCard from '../../components/ListRecipeCard';

import Recipes from "../../constants/Recipes"

export default function TabTwoScreen() {
  
  const [search, setSearch] = useState("")

  const [shownRecipes, setShownRecipes] = useState(Recipes)

  const onSearchChange = (text) => {
    setSearch(text)
    console.log(text)
    filterRecipes(text)
  }

  const filterRecipes = (searchTerm) => {
    if(searchTerm !== ""){
      setShownRecipes(Recipes.filter(r => r.title.toLowerCase() === searchTerm.toLowerCase()))
    }
    else{
      setShownRecipes(Recipes)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onSearchChange}
        returnKeyType="search"
        style={styles.searchField}
        placeholder="Etsi resepti..."
      />
      <FlatList
        data={shownRecipes}
        renderItem={({item}) => <ListRecipeCard recipe={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
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
  searchField : {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 15
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
