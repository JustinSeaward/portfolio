import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "modern" 
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <button className="theme-toggle" onClick={() => setTheme(theme === "modern" ? "win98" : "modern")}
        >
            {theme === "modern" ? "Win98" : "Modern"}
        </button>
    )
};

export default ThemeToggle;
