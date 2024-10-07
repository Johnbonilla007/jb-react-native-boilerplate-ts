import React from "react";
import "./../i18n"; // Import i18n configuration
import "intl-pluralrules";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { modules } from "./constants/modules";
import Toast from "react-native-toast-message";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />

      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Home">
          {modules.map((module) => (
            <Stack.Screen
              name={module.name}
              component={module.component}
              options={module.options}
            />
          ))}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
