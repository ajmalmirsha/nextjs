import { ReactNode } from "react";

type TypographyLargeProps = {
  children?: ReactNode;
  className?: string;
};

export function TypographyLarge({ children, className }: TypographyLargeProps) {
  return (
    <small className={`${className} text-lg font-medium`}>{children}</small>
  );
}
