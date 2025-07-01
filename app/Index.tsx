import {View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Index = ()=> {

    const insets = useSafeAreaInsets()
    return (

        // style={{flex: 1, paddingBottom: insets.bottom, paddingTop: insets.top}}
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex'>
            <StatusBar style='auto'/>
            <Text className=' text-5xl font-work-black text-blue-500'>Hello World!</Text>
        </View>
    )
}

export default Index;