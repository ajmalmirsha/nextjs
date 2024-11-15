import { ReactNode } from "react";

type TypographySmallProps = {
  children?: ReactNode;
  className?: string;
};

export function TypographySmall({ children, className }: TypographySmallProps) {
  return (
    <small className={`${className} text-sm font-medium leading-none`}>
      {children}
    </small>
  );
}
