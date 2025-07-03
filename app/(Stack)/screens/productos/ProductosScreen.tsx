import {View, FlatList,Text} from "react-native";
import {products} from "@/store/Products.store";
import {Link} from "expo-router";
import '../../../global.css'

//Lista de products
//https://gist.github.com/Klerith/0f5fb45ceb981b16aa6dd66ab1df0be7

const Productoss = () => {
    return (
        <View className='flex px-5'>
            <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <View className='pb-8'>
                    <Text className='font-work-black text-2xl'>{item.title}</Text>
                    <Text className=''>{item.description}</Text>
                    <View className='flex flex-row justify-between pt-5'>
                        <Text className='font-bold'>{item.price}</Text>
                        <Link className='text-primary' href={`/(Stack)/screens/productos/${item.id}`}>Ver detalles</Link>
                    </View>
                </View>
                )}
            />
        </View>
    )
}

export default Productoss;