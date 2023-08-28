import { useTheme } from "next-themes";
import Light from "./Light"
import Dark from "./Dark"

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme()
console.log(theme, '<<< theme')
    return (
        <div className="space-x-3">
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Light /> : <Dark />}</button>
        </div>
    )
}