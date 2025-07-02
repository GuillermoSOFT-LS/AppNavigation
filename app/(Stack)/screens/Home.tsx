import {View} from "react-native";
import {router} from "expo-router";
import {BtnCpn} from "@/Components/btnCpn";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Home = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex px-10'>

                <BtnCpn
                onPress={()=> router.push('./screens/About')}
                bgcolor='bg-primary'
            >
                About
            </BtnCpn>


            <BtnCpn
                onPress={()=> router.push('./screens/Contact')}
                bgcolor='bg-secondary'
            >
                Contact
            </BtnCpn>

            <BtnCpn
                onPress={()=> router.push('./screens/Login')}
                bgcolor='bg-secondary-200'
            >
                Login
            </BtnCpn>

            <BtnCpn
                onPress={()=> router.push('./screens/Productos')}
                bgcolor='bg-secondary-200'
            >
                Products
            </BtnCpn>
        </View>
    )
}

export default Home;