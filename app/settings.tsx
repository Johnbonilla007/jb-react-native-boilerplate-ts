import { View } from "react-native";
import React from "react";
import ColorList from "../components/controls/ColorList";

const Settings: React.FC = () => {
  return (
    <View>
      <ColorList color="#e42a09" />
    </View>
  );
};

export default Settings;
