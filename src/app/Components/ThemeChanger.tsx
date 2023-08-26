import { useTheme } from "next-themes";
import Light from "./Light"
import Dark from "./Dark"

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="space-x-3">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Dark /> : <Light />}</button>
        </div>
    )
}