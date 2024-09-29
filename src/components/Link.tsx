import React, { PropsWithChildren } from "react";
import useNavigation from "../hooks/useNavigation";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
}

const Link = ({ to, children, className }: PropsWithChildren<LinkProps>) => {
  const { navigate } = useNavigation();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to} className={className}>
      {children}
    </a>
  );
};

export default Link;
