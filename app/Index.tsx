import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Productoss from "@/app/(Stack)/screens/productos/Productos";


const Index = ()=> {

    const insets = useSafeAreaInsets()
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex'>
            <StatusBar style='auto'/>
            <Productoss />
        </View>
    )
}

export default Index;