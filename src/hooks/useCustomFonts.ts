// src/hooks/useCustomFonts.ts
import * as Font from 'expo-font';

export default function useCustomFonts() {
    return Font.useFonts({
        'AncizarSerif-Regular': require('../../assets/fonts/AncizarSerif-Regular.ttf'),
        'AncizarSerif-Bold': require('../../assets/fonts/AncizarSerif-Bold.ttf'),
        'AncizarSans-Regular': require('../../assets/fonts/AncizarSans-Regular.ttf'),
        'AncizarSans-Bold': require('../../assets/fonts/AncizarSans-Bold.ttf'),
    });
}
