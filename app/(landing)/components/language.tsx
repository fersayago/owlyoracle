import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LanguageProps {
  language: string;
  isoCode: string;
}

const Language = ({language, isoCode}: LanguageProps) => {
  return (
    <Button size="lg" variant="ghost" className="w-full cursor-default">
      <Image
        src={`${isoCode}.svg`}
        alt={language}
        height={32}
        width={40}
        className="mr-4 rounded-md"
      />
      {language}
    </Button>
  );
};

export default Language;
