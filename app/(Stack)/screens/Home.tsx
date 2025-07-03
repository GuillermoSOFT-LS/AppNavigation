import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {BtnCpn} from "@/Components/btnCpn";
import {router} from "expo-router";

const Home = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex px-10'>

            <BtnCpn
                onPress={()=> router.push('/screens/productos/ProductosScreen')}
                bgcolor='bg-primary'
                color='text-WB-W'>
                    Products
            </BtnCpn>
        </View>
    )
}

export default Home;