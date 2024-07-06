import { View, Text, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import Input from "./components/Input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { useEffect, useState } from "react";
import { getOppositeUnit, UNITS, convertTemperatureTo, isIcetemperature } from "./utils/temperature";
import { ButtonConvert } from "./components/ButtonConvert/ButtonConvert";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");
  const oppositeUnit = getOppositeUnit(currentUnit);
  const [ currentBackground, setCurrentBackground ] = useState(coldBackground);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return "";
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }

  useEffect(()=> {
    const isCold = isIcetemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground: hotBackground);
  }, [inputValue, currentUnit])

  return (
    <ImageBackground style={s.backgroundImg} source={currentBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
              <View style={s.workspace}>
                <DisplayTemperature 
                  unit={oppositeUnit} 
                  temperature={getConvertedTemperature()} />
                <Input unit={currentUnit} onChange={setInputValue} defaultValue={0}/>
                <ButtonConvert onPress={()=> {
                  setCurrentUnit(oppositeUnit)
                }} unit={currentUnit}/>
              </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>

  );
}

