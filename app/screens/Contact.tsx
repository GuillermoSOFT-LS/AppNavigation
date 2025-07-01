import {View, Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Contact = () => {

    const insets = useSafeAreaInsets();
    return (
        <View style={{paddingTop: insets.top, paddingBottom: insets.bottom}}>
            <Text>Hola desde Contact</Text>
        </View>
    )
}

export default Contact;