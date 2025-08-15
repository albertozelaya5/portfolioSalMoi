import Head from "next/head";

export function LanguageOptions({ langName, langDes, setLanguage, language }) {
  return (
    <li key={langName} className="language">
      <button className="button-language" onClick={() => setLanguage(langName)}>
        <span style={{ color: language === langName ? "#d90429" : "inherit" }}>{langDes}</span>
      </button>
    </li>
  );
}

const color = "red";
export function ColorSetter() {
  return (
    <Head>
      <link rel="stylesheet" href={`css/skins/${color}.css`} />
    </Head>
  );
}
