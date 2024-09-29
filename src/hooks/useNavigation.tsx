import { useContext } from "react";
import NavigationContext, {
  NavigationContextModel
} from "../context/navigation";

/**
 * Custom hook for accessing the NavigationContext.
 * @returns {NavigationContextModel} - The NavigationContext object.
 */

const useNavigation = (): NavigationContextModel => {
  return useContext(NavigationContext);
};

export default useNavigation;
