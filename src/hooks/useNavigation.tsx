import { useContext } from "react";
import NavigationContext, {
  NavigationContextType
} from "../context/navigation";

/**
 * Custom hook for accessing the NavigationContext.
 * @returns {NavigationContextType} - The NavigationContext object.
 */

const useNavigation = (): NavigationContextType => {
  return useContext(NavigationContext);
};

export default useNavigation;
