import { SafeAreaView } from "react-native";
import * as Fonts from "expo-font";
import { commonStyles } from "./styles";
import MainPage from "./pages/registration";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Fonts.loadAsync({
          Cuprum: require("./assets/fonts/Cuprum.ttf"),
          Beaumarchais: require("./assets/fonts/Beaumarchais.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <SafeAreaView style={commonStyles.container} onLayout={onLayoutRootView}>
      <MainPage />
    </SafeAreaView>
  );
}
