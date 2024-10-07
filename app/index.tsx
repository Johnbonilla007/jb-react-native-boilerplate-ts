import { View } from "react-native";
import React from "react";
import ColorList from "../components/controls/ColorList";
import ServicesContainer from "@/Containers/Home/ServicesContainer";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <ServicesContainer />
    </SafeAreaView>
  );
};

export default Home;
