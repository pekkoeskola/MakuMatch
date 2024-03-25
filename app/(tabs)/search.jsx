import { StyleSheet, FlatList, Text, View } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import ListRecipeCard from '../../components/ListRecipeCard';

import Recipes from "../../constants/Recipes"

export default function TabTwoScreen() {
  
  return (
    <View style={styles.container}>
      <FlatList
        data={Recipes}
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
