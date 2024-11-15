import { ReactNode } from "react";

type TypographyLargeProps = {
  children?: ReactNode;
  className?: string;
};

export function Typography({ children, className }: TypographyLargeProps) {
  return <small className={`${className} text-base`}>{children}</small>;
}
