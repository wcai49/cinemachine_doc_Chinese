/**
 * GetLocalizedString.ts
 * Author: Wenlei Cai
 * Date: 2024-04-28
 * Description: Util for the application to return localized strings according to the current language
 */

// Menuitems
import MenuItems_en from "../assets/localizedLanguages/MenuItems/MenuItems_en.json";
import MenuItems_zh from "../assets/localizedLanguages/MenuItems/MenuItems_zh.json";
// ContentPages
import ContentPages_en from "../assets/localizedLanguages/ContentPages/ContentPages_en.json";
import ContentPages_zh from "../assets/localizedLanguages/ContentPages/ContentPages_zh.json";

let currentLanguage = "zh";

export const updateCurrentLanguage = (language: string) => {
  currentLanguage = language;
};

export const getCurrentLanguage = () => {
  return currentLanguage;
};

export const getLocalizedString = (key: string) => {
  let localizedString = "";
  const keyArray = key.split(".");

  if (keyArray.length !== 2) {
    return localizedString;
  }

  switch (currentLanguage) {
    case "en":
      localizedString = MenuItems_en[keyArray[0]]
        ? MenuItems_en[keyArray[0]][keyArray[1]]
        : ContentPages_en[keyArray[0]][keyArray[1]] || "";
      break;
    case "zh":
      localizedString = MenuItems_zh[keyArray[0]]
        ? MenuItems_zh[keyArray[0]][keyArray[1]]
        : ContentPages_zh[keyArray[0]][keyArray[1]] || "";
      break;
    default:
      break;
  }

  return localizedString;
};

export const getLocalizedStringArray = (key: string) => {
  let localizedStringArray = [];
  const keyArray = key.split(".");

  if (keyArray.length !== 2) {
    return localizedStringArray;
  }

  switch (currentLanguage) {
    case "en":
      localizedStringArray = MenuItems_en[keyArray[0]]
        ? MenuItems_en[keyArray[0]][keyArray[1]]
        : ContentPages_en[keyArray[0]][keyArray[1]] || [];
      break;
    case "zh":
      localizedStringArray = MenuItems_zh[keyArray[0]]
        ? MenuItems_zh[keyArray[0]][keyArray[1]]
        : ContentPages_zh[keyArray[0]][keyArray[1]] || [];
      break;
    default:
      break;
  }

  return localizedStringArray;
};
