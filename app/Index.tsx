import {View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import  './global.css'

const Index = ()=> {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar style='auto'/>
            <Text className=' text-5xl text-blue-500'>Hello World!</Text>
        </View>
    )
}

export default Index;