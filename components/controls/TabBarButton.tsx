import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { icons } from "../../assets/icons";
import { useTranslate } from "@/hooks/UseTranslate";

interface TabBarButtonProps {
  isFocused: boolean;
  label: any;
  routeName: string;
  color: string;
  onPress: () => void;
  onLongPress: () => void;
  style: object;
}

const TabBarButton: React.FC<TabBarButtonProps> = (props) => {
  const { isFocused, label, routeName, color, onPress, onLongPress } = props;
  const { translate } = useTranslate();

  const routeNameSplited: any[] = routeName.split("/");
  let iconName: string = routeName;

  if (routeNameSplited.length > 1) {
    iconName = routeNameSplited[0]?.toLowerCase();
  }

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      opacity,
    };
  });

  const IconComponent = icons[iconName] || icons["warning"];

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Animated.View style={[animatedIconStyle]}>
        <IconComponent color={color} />
      </Animated.View>

      <Animated.Text style={[{ color, fontSize: 11 }, animatedTextStyle]}>
        {translate(label)}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    height: "auto",
  },
});

export default TabBarButton;
