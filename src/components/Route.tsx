import React from "react";
import useNavigation from "../hooks/useNavigation";

interface RouteProps {
  path: string;
  children: React.ReactNode;
}

const Route = ({ path, children }: RouteProps) => {
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
};

export default Route;
