export default function useEmailMessage(emailName, language) {
  let contactEmail;

  if (language === "es") {
    contactEmail = "?subject=Contacto&body=Hola Moisés, me interesa contactarte.";
  }
  if (language === "en") {
    contactEmail = "?subject=Contact&body=Hello Moses, I'm interested in contacting you.";
  }

  return `mailto:${emailName}${contactEmail}`;
}
