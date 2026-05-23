import { cloneElement } from "react";

import { cn } from "@/lib/utils";

type Props = {
  icon: React.ReactElement<{ className: string }>;
  iconClassName?: string;
  text: string;
  textClassName?: string;
};

export default function PotionAttribute({
  icon,
  iconClassName,
  text,
  textClassName,
}: Props) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {cloneElement(icon, {
        className: cn("size-3", iconClassName),
      })}

      <span className={cn("text-xs text-muted-foreground", textClassName)}>
        {text}
      </span>
    </div>
  );
}
