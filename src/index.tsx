import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";

import Main from "components/Main/Main";

// import { Provider } from "react-redux";

import "./styles/reset.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

// export const store = setupStore();
const App = (): JSX.Element => {
  return <Main />;
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
