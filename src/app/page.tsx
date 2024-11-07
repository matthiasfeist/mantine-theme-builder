import ThemesPage from "../App";
import { ThemeProvider } from "../ThemeContext";

export default function Page() {
  return (
    <div>
      <ThemeProvider>
        <ThemesPage />
      </ThemeProvider>
    </div>
  );
}
