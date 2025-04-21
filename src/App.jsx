import { useState } from "react";
import "./App.css";
import ReactImage from "./assets/react.svg";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("light");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 gap-6 bg-base-200">
      <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://placecats.com/millie/300/300" alt="avatar" />
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-2xl font-bold">Bambang Wahyudi</h1>
        <p className="text-sm max-w-xs">
          Frontend Developer | React JS, Next JS
        </p>
      </div>

      <div className="flex flex-col w-full max-w-xs gap-3">
        <a
          className="btn btn-primary"
          href="https://github.com/"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="btn btn-secondary"
          href="https://linkedin.com/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="btn btn-accent"
          href="https://twitter.com/"
          target="_blank"
        >
          Twitter
        </a>
      </div>

      <button onClick={toggleTheme} className="btn btn-outline mt-4">
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
