import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Home from "@/app/(Stack)/screens/Home";


const Index = ()=> {

    const insets = useSafeAreaInsets()
    return (

        // style={{flex: 1, paddingBottom: insets.bottom, paddingTop: insets.top}}
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex'>
            <StatusBar style='auto'/>
            <Home />
        </View>
    )
}

export default Index;