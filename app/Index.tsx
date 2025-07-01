import {View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Index = ()=> {

    const insets = useSafeAreaInsets()
    return (

        // style={{flex: 1, paddingBottom: insets.bottom, paddingTop: insets.top}}
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex'>
            <StatusBar style='auto'/>
            <Text className=' text-5xl font-work-black text-primary'>Hello World!</Text>
            <Text className=' text-5xl font-work-light text-secondary'>Hello World!</Text>
            <Text className=' text-5xl font-work-medium text-terctiary'>Hello World!</Text>
        </View>
    )
}

export default Index;