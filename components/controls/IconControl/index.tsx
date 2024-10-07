import { icons } from "@/assets/icons";
import { useThemeColor } from "@/hooks/useThemeColor";

export const IconControl: React.FC<{
  iconName: string;
  lightColor?: string;
  darkColor?: string;
}> = ({ iconName, lightColor, darkColor }) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const Icon = icons[iconName] || icons["warning"];

  return <Icon color={color} size={24} />;
};
