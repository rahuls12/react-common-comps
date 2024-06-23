import NavigationContext from "../context/navigationContext";
import { useContext } from "react";

export default function useNavigation(){
    return useContext(NavigationContext);
}