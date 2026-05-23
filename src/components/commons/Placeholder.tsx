import { cloneElement } from "react";
import { LucideMessageSquareWarning } from "lucide-react";

type Props = {
  icon?: React.ReactElement<{ className: string }>;
  text: string;
  button?: React.ReactNode;
};

export default function Placeholder({
  icon = <LucideMessageSquareWarning />,
  text,
  button,
}: Props) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-4">
      {cloneElement(icon, {
        className: "size-12",
      })}

      <p className="text-sm text-center">{text}</p>

      {button}
    </div>
  );
}
