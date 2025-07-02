import {Text, View} from "react-native";
import {products} from "@/store/Products.store";
import {Redirect, useLocalSearchParams} from "expo-router";

const ProductScreen = ()=> {


    const { id } = useLocalSearchParams()

    const product =  products.find((p) => p.id === id)

    if (!product) {
        return <Redirect href="/" />
    }
    return (
            <View>
                <Text>{product.title}</Text>
            </View>
    )
}

export default ProductScreen;