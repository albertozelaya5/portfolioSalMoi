export function useSetContent(jsonSource, language) {
  const content = jsonSource[language];
  return content;
}
