import Head from "next/head";

export function LanguageOptions({ langName, langDes, setLanguage, language }) {
  return (
    <li key={langName} className="language">
      <button
        className={`button-language ${language === langName ? "active" : ""}`}
        onClick={() => setLanguage(langName)}
      >
        <span>{langDes}</span>
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
