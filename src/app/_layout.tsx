import "../../global.css";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { theme } from "@/core/useThemeConfig";
import { LetterCaseProvider } from "@/ui/core/headers/letter-case-context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider value={theme}>
        <LetterCaseProvider>
          <RootLayoutNav />
        </LetterCaseProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(level-one)" options={{ headerShown: false }} />
      <Stack.Screen name="(level-two)" options={{ headerShown: false }} />
      <Stack.Screen name="(level-three)" options={{ headerShown: false }} />
      <Stack.Screen name="(level-four)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          animation: "slide_from_bottom",
          presentation: "containedModal",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="welcome-screen-modal"
        options={{
          animation: "slide_from_bottom",
          presentation: "containedModal",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="teacher-tip-modal"
        options={{
          animation: "slide_from_bottom",
          presentation: "containedModal",
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
