import { AntDesign, Feather } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

export const icons: Record<string, (props: any) => JSX.Element> = {
  index: (props) => <AntDesign name="home" size={26} {...props} />,
  explore: (props) => <Feather name="compass" size={26} {...props} />,
  create: (props) => <AntDesign name="pluscircleo" size={26} {...props} />,
  profile: (props) => <AntDesign name="user" size={26} {...props} />,
  settings: (props) => <AntDesign name="setting" size={26} {...props} />,
  warning: (props) => <AntDesign name="warning" size={26} {...props} />,
  locksmith: (props) => <Feather name="key" size={26} {...props} />,
  plumbing: (props) => <Feather name="droplet" size={26} {...props} />,
  electrician: (props) => <Feather name="zap" size={26} {...props} />,
  carpentry: (props) => <Feather name="briefcase" size={26} {...props} />,
  painting: (props) => <Feather name="edit-2" size={26} {...props} />,
  gardening: (props) => <AntDesign name="layout" size={26} {...props} />,
  cleaning: (props) => <Feather name="home" size={26} {...props} />,
  applianceRepair: (props) => <Feather name="settings" size={26} {...props} />,
  masonry: (props) => <Feather name="layers" size={26} {...props} />,
  acInstallation: (props) => <Feather name="wind" size={26} {...props} />,
  pestControl: (props) => <Feather name="shield" size={26} {...props} />,
  moving: (props) => <Feather name="truck" size={26} {...props} />,
  vehicleRepair: (props) => <Feather name="tool" size={26} {...props} />,
  poolMaintenance: (props) => <Feather name="droplet" size={26} {...props} />,
  roofRepair: (props) => <Feather name="home" size={26} {...props} />,
  securitySystemsInstallation: (props) => (
    <Feather name="lock" size={26} {...props} />
  ),
  furnitureAssembly: (props) => <Feather name="box" size={26} {...props} />,
  irrigationInstallation: (props) => (
    <Feather name="droplet" size={26} {...props} />
  ),
  heatingMaintenance: (props) => (
    <Feather name="thermometer" size={26} {...props} />
  ),
  windowDoorRepair: (props) => <Feather name="layout" size={26} {...props} />,
};
