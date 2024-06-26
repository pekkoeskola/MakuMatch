import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { GestureDetector, GestureHandlerRootView } from "react-native-gesture-handler";


//contexts and reducers
import { RecipesProvider } from '@/contexts/RecipesContext';

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
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <RecipesProvider>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ presentation: 'modal', title: "Profiili" }} />
            <Stack.Screen name="recipedetails/[recipe]" options={{ presentation: "modal" }} />
            <Stack.Screen name="likedrecipes" options={{ presentation: "modal", title: "Tykätyt reseptit"}} />
          </Stack>
      </RecipesProvider>
    </GestureHandlerRootView>
  )
}
