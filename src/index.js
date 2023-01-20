import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import "./assets/i18next";

import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
