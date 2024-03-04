import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//StrictModeかつ開発時のみ２回レンダリングされる
root.render(
              <App />
           );