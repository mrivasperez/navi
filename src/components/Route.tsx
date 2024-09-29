import React from "react";
import { useNavigation } from "../hooks/useNavigation";

interface RouteProps {
  path: string;
  children: React.ReactNode;
}

/**
 * A custom route component for rendering content based on tƒhe current path.
 * @param {RouteProps} props - The component's props.
 * @returns {React.ReactNode} - The rendered content or null if the path doesn't match.
 */
const Route = ({ path, children }: RouteProps): React.ReactNode => {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
};

export { Route };
