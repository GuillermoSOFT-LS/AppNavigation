import {Text,Pressable, PressableProps} from "react-native";
import '../app/global.css'


interface Props extends PressableProps{
    children:string;
    bgcolor?: 'bg-primary' | 'bg-secondary' | 'bg-tertiary' |'bg-secondary-200'
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'
    className?: string
}

export const BtnCpn = ({children, className, color, onPress, bgcolor = 'bg-primary'}:Props) => {
    return (
            <Pressable onPress={onPress} className={`p-3 rounded-md ${bgcolor} ${color} ${className}`}>
                <Text className={`text-white text-center`}>{children}</Text>
            </Pressable>
    )
}