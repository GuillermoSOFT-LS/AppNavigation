import {View, FlatList,Text} from "react-native";
import {products} from "@/store/Products.store";
import {Link} from "expo-router";


//Lista de products
//https://gist.github.com/Klerith/0f5fb45ceb981b16aa6dd66ab1df0be7

const Productoss = () => {
    return (
        <View className='flex flex-1 px-10'>
            <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <View>
                    <Text className='font-work-black'>{item.title}</Text>
                    <Text className=''>{item.description}</Text>
                    <Link href={`/(Stack)/screens/productos/${item.id})`}>Ver detalles</Link>
                </View>
                )}
            />
        </View>
    )
}

export default Productoss;