import React from "react";
import "./App.css";
import { Index } from "./components/Dashboard/Index";

function App() {
  tailwind.config = {
    theme: {
      extend: {
        screens: {
          sm: { max: "767px" },
        },
        colors: {
          new_color: "#62c4f0",
        },
      },
    },
  };
  return (
    <div className="App container">
      <Index />
    </div>
  );
}

export default App;
