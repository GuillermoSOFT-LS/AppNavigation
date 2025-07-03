import {View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from "react-native-safe-area-context";


const Index = ()=> {

    const insets = useSafeAreaInsets()
    return (
        <View>
            <StatusBar style='auto'/>
        </View>
    )
}

export default Index;