interface FromBtnProps {
  text: string;
  type: "submit" | "reset" | "button";
}
const FormBtn = ({ text, type }: FromBtnProps) => {
  return (
    <button
      type={type}
      className="bg-Teal-700 hover:bg-Teal-800 px-4 py-3 radius-8 text-Neutral-0 text-preset-3 cursor-pointer shadow-1"
    >
      {text}
    </button>
  );
};

export default FormBtn;
