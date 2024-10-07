import React from "react";
import { useTranslate } from "@/hooks/UseTranslate";
import { ThemedTouchableOpacity } from "../ThemedTouchableOpacity";
import { ThemedText } from "../ThemedText";
import { IconControl } from "../IconControl";
import { styles } from "./styles";

const CardControl: React.FC<{
  title: string;
  iconName: string;
}> = ({ title, iconName }) => {
  const { translate } = useTranslate();

  return (
    <ThemedTouchableOpacity style={styles.card}>
      <ThemedText style={styles.cardText}>{translate(title)}</ThemedText>
      {iconName && <IconControl iconName={iconName} />}
    </ThemedTouchableOpacity>
  );
};

export default CardControl;
