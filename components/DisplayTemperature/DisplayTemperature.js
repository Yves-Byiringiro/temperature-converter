import { Text, View } from "react-native";
import { s } from "./DisplayTemperature.style";



export function DisplayTemperature({ temperature, unit }) {
    return (
        <Text style={s.temperatureTxt}>{temperature} {unit}</Text>
    )
}