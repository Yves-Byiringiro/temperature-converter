import { s } from "./Input.style";
import { View, TextInput, Text } from "react-native";

export default function Input({defaultValue, onChange, unit}) {
    return (
        <View style={s.root}>
            <TextInput 
                maxLength={4} 
                style={s.input} 
                placeholder="Type your temperature"
                defaultValue={defaultValue.toString()}
                onChangeText={(text) => {
                    onChange(text)
                }}
            />
            <Text style={s.unit}>{unit}</Text>
        </View>
    )
}