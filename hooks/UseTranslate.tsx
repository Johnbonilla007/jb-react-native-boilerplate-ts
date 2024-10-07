import { camelCase } from "lodash";
import { useTranslation } from "react-i18next";

export function useTranslate() {
  const { t } = useTranslation();

  const translate = (label: string = ""): string => {
    const camelized = camelCase(label);
    
    return t(camelized, { defaultValue: `[${camelized}]` });
  };

  return { translate };
}
