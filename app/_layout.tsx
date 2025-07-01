import {Slot, SplashScreen} from "expo-router";
import {useEffect} from "react";
import './global.css'
import {useFonts} from "expo-font";
import {SafeAreaProvider} from "react-native-safe-area-context";


SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
   const [fontsloaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),
    })


    useEffect(() => {
        if (error) throw error

        if (fontsloaded) SplashScreen.hideAsync()
    }, [fontsloaded, error]);

   if (!fontsloaded && !error) return null;
return (
    <SafeAreaProvider>
        <Slot />
    </SafeAreaProvider>
    )

}

export default RootLayout