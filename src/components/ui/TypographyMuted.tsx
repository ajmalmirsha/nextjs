import { ReactNode } from "react";

type TypographyMutedProps = {
  children?: ReactNode;
  className?: string;
};

export function TypographyMuted({ children, className }: TypographyMutedProps) {
  return (
    <small className={`${className} text-sm text-muted-foreground`}>
      {children}
    </small>
  );
}
