import React, { PropsWithChildren } from "react";
import { useNavigation } from "../hooks/useNavigation";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  className?: string;
}

/**
 * A custom link component for navigation within your application.
 * @param {LinkProps} props - The component's props.
 * @param {React.ReactNode} props.children - The content of the link.
 * @returns {JSX.Element} - The rendered Link component.
 */

const Link = ({
  to,
  children,
  className
}: PropsWithChildren<LinkProps>): JSX.Element => {
  const { navigate } = useNavigation();

  /**
   * Handles the click event for the link.
   * @param {React.MouseEvent<HTMLAnchorElement, MouseEvent>} event - The click event.
   */
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

export { Link };
