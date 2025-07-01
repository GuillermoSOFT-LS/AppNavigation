import {View, Text,Pressable} from "react-native";
import {BtnCpn} from "@/Components/btnCpn";

const Home = () => {
    return (
        <View className='flex px-10'>
            <Text>Hola desde Home</Text>
            <BtnCpn color='bg-primary'>Boton</BtnCpn>
        </View>
    )
}

export default Home;