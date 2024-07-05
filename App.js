import { View, Text, ImageBackground } from "react-native";
import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import hotBackground from "./assets/hot.png";
import Input from "./components/Input/Input";
import { DisplayTemperature } from "./components/DisplayTemperature/DisplayTemperature";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C");


  return (
    <ImageBackground style={s.backgroundImg} source={hotBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
              <View style={s.workspace}>
                <DisplayTemperature unit={currentUnit} temperature={inputValue} />
                <Input unit={currentUnit} onChange={setInputValue} defaultValue={0}/>
                <Text>Button</Text>
              </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>

  );
}

