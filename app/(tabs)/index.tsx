import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import MatchRecipeCard from '../../components/MatchRecipeCard';
import MatchCircleButton from '@/components/MatchCircleButton'


export default function TabOneScreen() {

  return (
    <View style={[styles.container, {zIndex: -1}]}>
      <MatchRecipeCard zIndex={0}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white"
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
