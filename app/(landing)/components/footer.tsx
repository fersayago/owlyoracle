import Language from "./language";

const Footer = () => {
  return (
    <div className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Language language="Spanish" isoCode="es" />
        <Language language="French" isoCode="fr" />
        <Language language="Italian" isoCode="it" />
        <Language language="Japanese" isoCode="jp" />
        <Language language="Croatian" isoCode="hr" />
      </div>
    </div>
  );
};

export default Footer;
