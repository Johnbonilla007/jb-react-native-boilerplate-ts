import React from "react";
import { View, ScrollView } from "react-native";
import { useTranslate } from "@/hooks/UseTranslate";
import { styles } from "./styles";
import { workforceServices } from "./settings";
import CardControl from "@/components/controls/CardControl";

// Define the props interface if needed
interface ServicesContainerProps {
  // Add props if needed
}

const ServicesContainer: React.FC<ServicesContainerProps> = () => {
  const { translate } = useTranslate();

  return (
    // <View>
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <View style={styles.grid}>
        {workforceServices.map((item, index) => {
          return (
            <CardControl key={index} title={item.name} iconName={item.name} />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ServicesContainer;
