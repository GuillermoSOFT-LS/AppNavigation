import {Text, View} from "react-native";
import {products} from "@/store/Products.store";
import {Link, Redirect, useLocalSearchParams, useNavigation} from "expo-router";
import {useEffect} from "react";

const ProductScreen = ()=> {


    const { id } = useLocalSearchParams()

    const product =  products.find((p) => p.id === id)
    const  navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions( {
            title: product?.title ?? 'producto',
        })
    }, [product]);

    if (!id ||Array.isArray(id) || typeof id !== "string") {
        return <Redirect href="/" />;
    }

    if (!product) {
        return (
            <View>
                <Text>Producto no encontrado</Text>
                <Link href="/">Volver a la tienda</Link>
            </View>

        )
    }
    return (
            <View className='px-10 p-b py-5'>
                <Text className='font-work-black text-3xl pb-4'>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text className='font-bold pt-2'>{product.price}</Text>
            </View>
    )
}

export default ProductScreen;