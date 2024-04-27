import { ReactNode } from "react";
import './styles.scss';

export function Button({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
