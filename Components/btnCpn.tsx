import {Text,Pressable, PressableProps} from "react-native";
import '../app/global.css'
interface Props extends PressableProps{
children:string;
color?: 'bg-primary' | 'bg-secondary' | 'bg-tertiary'
}

export const BtnCpn = ({children, color = 'bg-primary'}:Props) => {
    return (
            <Pressable className={`p-3 rounded-md ${color}`}>
                <Text className={`text-white text-center`}>{children}</Text>
            </Pressable>
    )
}