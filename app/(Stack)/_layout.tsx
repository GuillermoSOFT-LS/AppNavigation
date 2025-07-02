import {Stack} from "expo-router";

const StackRoot = () => {
    return (

        //A nivel de Stack se aplica para todas las pantallas, por eje: animaciones
        <Stack /* screenOptions={{headerShown: false}}*/>

            <Stack.Screen
            name='screens/Home'
            options={{
                title: 'Inicio',
                animation: 'fade_from_bottom'
            }}

            />

        </Stack>
    )
}

export default StackRoot