import { useState } from "react";

export function useSetLanguage(jsonSource) {
  const [language, setLanguage] = useState("es");
  const content = jsonSource[language];

  return [content, setLanguage, language];
}

export function useSetContent(jsonSource, language) {
  const content = jsonSource[language];
  return content;
}
