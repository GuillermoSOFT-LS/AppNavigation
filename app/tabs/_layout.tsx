import {Tabs} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "purple"}}>
            <Tabs.Screen
                name="Home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) =>  <MaterialIcons name="home" size={28} color="black" />,
                }}
            />

            <Tabs.Screen
                name="Favorites/index"
                options={{
                    title: 'Favorites',
                    tabBarIcon: ({ color }) => <MaterialIcons name="star" size={24} color="black" />,
                }}
            />
        </Tabs>
    )
}