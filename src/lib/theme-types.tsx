type ThemeColors = "Default" | "Rose" | "Blue" | "Green" | "Orange"
interface ThemeColorStateParams{
    themeColor: ThemeColors;
    setThemeColor: React.Dispatch<React.SetStateAction<ThemeColors>> 
}