import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useReducer } from 'react';

import Recipes from "@/constants/Recipes"

//contexts and reducers
import { RecipesContext, RecipesDispatchContext } from "../contexts/RecipesContext"
import { recipesReducer } from "../reducers/recipesReducer"

import { useColorScheme } from '@/components/useColorScheme';
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return(
    <RootLayoutNav />
  )
}

function RootLayoutNav() {

  const [recipes, dispatch] = useReducer(recipesReducer, Recipes)

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RecipesContext.Provider value={recipes}>
        <RecipesDispatchContext.Provider value={dispatch}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ presentation: 'modal' }} />
            <Stack.Screen name="recipedetails/[recipe]" options={{ presentation: "modal" }} />
            <Stack.Screen name="likedrecipes" options={{ presentation: "modal" }} />
          </Stack>
        </RecipesDispatchContext.Provider>
      </RecipesContext.Provider>
    </GestureHandlerRootView>

  );
}
