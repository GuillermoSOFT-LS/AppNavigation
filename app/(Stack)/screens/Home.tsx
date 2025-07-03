import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {BtnCpn} from "@/Components/btnCpn";
import {router} from "expo-router";
import Productoss from "@/app/(Stack)/screens/productos/ProductosScreen";
import '../../global.css'

const Home = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}} className='flex px-3'>

            {/*<BtnCpn*/}
            {/*    onPress={()=> router.push('/screens/productos/ProductosScreen')}*/}
            {/*    bgcolor='bg-primary'*/}
            {/*    color='text-WB-W'>*/}
            {/*        Products*/}
            {/*</BtnCpn>*/}

            <Productoss />

        </View>
    )
}

export default Home;