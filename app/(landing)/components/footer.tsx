import FlagIcon from "./flag-icon";

const Footer = () => {
  return (
    <div className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <FlagIcon language="Spanish" isoCode="es" />
        <FlagIcon language="French" isoCode="fr" />
        <FlagIcon language="Italian" isoCode="it" />
        <FlagIcon language="Japanese" isoCode="jp" />
        <FlagIcon language="Croatian" isoCode="hr" />
      </div>
    </div>
  );
};

export default Footer;
