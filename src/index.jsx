import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

// Simple entry point. Mounts the whole app into the #root div in index.html.
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
