import Link from "next/link";

interface FromLinkTextProps {
  text?: string;
  link: string;
  url: string;
}
const FormLinkText = ({ text, link, url }: FromLinkTextProps) => {
  return (
    <p className="text-preset-4-medium text-Neutral-800 dark:text-Neutral-100-d">
      {text}
      <Link
        href={url}
        className="text-preset-4 ml-1 text-Neutral-900 dark:text-Neutral-0-d hover:text-Teal-700 dark:hover:text-Neutral-100-d"
      >
        {link}
      </Link>
    </p>
  );
};

export default FormLinkText;
