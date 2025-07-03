import {View,Text} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';

const HomeScreen = ()=> {
    return (
        <View>
            <Text>Hola desde Home</Text>
            <Entypo name="home" size={24} color="black" />
        </View>
    )
}

export default HomeScreen;