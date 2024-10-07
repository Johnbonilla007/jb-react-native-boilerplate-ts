import { icons } from "@/assets/icons";

// Define the request payload and response types if known
export interface RequestPayload {
  // Define the structure of the request payload here
}

export interface ResponsePayload {
  // Define the structure of the response payload here
}

export const workforceServices: Array<{
  name: string;
  title: string;
  icon: (props: any) => JSX.Element;
}> = [
  {
    name: "locksmith",
    title: "Cerrajería",
    icon: icons["locksmith"],
  },
  {
    name: "plumbing",
    title: "Fontanería",
    icon: icons["plumbing"],
  },
  {
    name: "electrician",
    title: "Electricidad",
    icon: icons["electrician"],
  },
  {
    name: "carpentry",
    title: "Carpintería",
    icon: icons["carpentry"],
  },
  {
    name: "painting",
    title: "Pintura",
    icon: icons["painting"],
  },
  {
    name: "gardening",
    title: "Jardinería",
    icon: icons["gardening"],
  },
  {
    name: "cleaning",
    title: "Limpieza",
    icon: icons["cleaning"],
  },
  {
    name: "applianceRepair",
    title: "Reparación de Electrodomésticos",
    icon: icons["applianceRepair"],
  },
  {
    name: "masonry",
    title: "Albañilería",
    icon: icons["masonry"],
  },
  {
    name: "acInstallation",
    title: "Instalación de Aire Acondicionado",
    icon: icons["acInstallation"],
  },
  {
    name: "pestControl",
    title: "Fumigación",
    icon: icons["pestControl"],
  },
  {
    name: "moving",
    title: "Mudanzas",
    icon: icons["moving"],
  },
  {
    name: "vehicleRepair",
    title: "Reparación de Vehículos",
    icon: icons["vehicleRepair"],
  },
  {
    name: "poolMaintenance",
    title: "Mantenimiento de Piscinas",
    icon: icons["poolMaintenance"],
  },
  {
    name: "roofRepair",
    title: "Reparación de Techos",
    icon: icons["roofRepair"],
  },
  {
    name: "securitySystemsInstallation",
    title: "Instalación de Sistemas de Seguridad",
    icon: icons["securitySystemsInstallation"],
  },
  {
    name: "furnitureAssembly",
    title: "Montaje de Muebles",
    icon: icons["furnitureAssembly"],
  },
  {
    name: "irrigationInstallation",
    title: "Instalación de Sistemas de Riego",
    icon: icons["irrigationInstallation"],
  },
  {
    name: "heatingMaintenance",
    title: "Mantenimiento de Sistemas de Calefacción",
    icon: icons["heatingMaintenance"],
  },
  {
    name: "windowDoorRepair",
    title: "Reparación de Ventanas y Puertas",
    icon: icons["windowDoorRepair"],
  },
];
