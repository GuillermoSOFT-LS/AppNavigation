import {View, FlatList,Text} from "react-native";
import {products} from "@/store/Products.store";
import {Link} from "expo-router";
import '../../../global.css'
import {ScrollView} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const Productoss = () => {

    const insets = useSafeAreaInsets();
    return (
        <ScrollView>
            <View className='flex p-5'>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <View className='p-5 '>
                            <View className='p-4 border-2 bg-WB-B  rounded-md'>
                                <Text className='font-work-black text-2xl text-white'>{item.title}</Text>
                                <Text className='text-WB-G'>{item.description}</Text>
                                <View className='flex flex-row justify-between pt-5'>
                                    <Text className='font-bold text-white'>{item.price}</Text>
                                    <Link className='text-blue-700' href={`/(Stack)/screens/productos/${item.id}`}>Ver detalles</Link>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ScrollView>

    )
}

export default Productoss;