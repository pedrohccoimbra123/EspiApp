// App.tsx
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View } from 'react-native';
import Navigation from './src/navigation';

SplashScreen.preventAutoHideAsync(); // impede a tela branca até carregar fontes

export default function App() {
  const [fontsLoaded] = useFonts({
    'AncizarSans-Regular': require('./assets/fonts/AncizarSans-Regular.ttf'),
    'AncizarSerif-Regular': require('./assets/fonts/AncizarSerif-Regular.ttf'),
    'AncizarSerif-Bold': require('./assets/fonts/AncizarSerif-Bold.ttf'),
    'AncizarSans-Bold': require('./assets/fonts/AncizarSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // esconde splash screen
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Navigation />
      </View>
  );
}
