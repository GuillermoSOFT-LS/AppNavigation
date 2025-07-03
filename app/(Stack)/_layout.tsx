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
            }}/>,

            <Stack.Screen
            name='screens/About'
            options={{
            title: 'Nosotros',
            animation: 'fade_from_bottom'
            }}/>

            <Stack.Screen
                name='screens/Contact'
                options={{
                    title: 'Contacto',
                    animation: 'fade_from_bottom'
            }}/>,

            <Stack.Screen
                name='screens/Login'
                options={{
                    title: 'Login',
                    animation: 'fade_from_bottom'
                }}/>,

            <Stack.Screen
                name='screens/productos/ProductosScreen'
                options={{
                    title: 'Productos',
                    animation: 'fade_from_bottom'
                }}/>

        </Stack>
    )
}

export default StackRoot