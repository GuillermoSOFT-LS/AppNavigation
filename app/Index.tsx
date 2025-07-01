import {View,Text} from "react-native";
import {StatusBar} from "expo-status-bar";

const Index = ()=> {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <StatusBar style='auto'/>
            <Text style={{fontSize: 60}}>Hello World!</Text>
        </View>
    )
}

export default Index;