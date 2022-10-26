import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export const ThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (currentTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <BsSunFill size={22} />
      </button>
    );
  } else {
    return (
      <button onClick={() => setTheme("dark")}>
        <BsFillMoonFill size={22} />
      </button>
    );
  }
};
