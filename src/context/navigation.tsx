import React, { createContext, useEffect, useState } from "react";

export type NavigationContextType = {
  currentPath: string;
  navigate: (to: string) => void;
};

const NavigationContext: React.Context<NavigationContextType> =
  createContext<NavigationContextType>({} as NavigationContextType);

/**
 * Provides the NavigationContext to its children.
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns {JSX.Element} - The rendered component.
 */

const NavigationProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Updates the current path based on browser history changes.
  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handler);

    // clean up
    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  /**
   * Navigates to a new path.
   * @param {string} to - The new path to navigate to.
   * @returns {void}
   */
  const navigate = (to: string): void => {
    window.history.pushState({}, "", to);
    return setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
