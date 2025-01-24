import { createContext,useContext ,useState} from "react";

export default ThemeContext = createContext({
    themeMode: "Light",
    darkTheme :()=>{},
    LightTheme:()=>{},
})

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}