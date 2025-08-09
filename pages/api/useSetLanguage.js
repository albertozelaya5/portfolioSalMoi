import { useState } from "react";
import mainInfoLang from "src/data/mainInfo.json";

export default function useSetLanguage() {
  const [language, setLanguage] = useState("es");
  const content = mainInfoLang[language];

  return [content, setLanguage];
}
