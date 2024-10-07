import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../components/controls/TabBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { modules } from "@/constants/modules";
import "./../i18n"; // Import i18n configuration
import "intl-pluralrules";
import { Provider } from "react-redux";

import { StatusBar, useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/store/persistReducer";
import Toast from "react-native-toast-message";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
              translucent
              backgroundColor={
                colorScheme === "dark"
                  ? DarkTheme.colors.background
                  : DefaultTheme.colors.background
              }
              barStyle={
                colorScheme === "dark" ? "light-content" : "dark-content"
              }
            />
            <Tabs tabBar={(props) => <TabBar {...props} />}>
              {modules.map((module) => {
                return (
                  <Tabs.Screen
                    key={module.name}
                    name={module.name}
                    options={{
                      title: module.title,
                      headerShown: false,
                    }}
                  ></Tabs.Screen>
                );
              })}
            </Tabs>
            <Toast />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
