//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {phonebook} from "./phonebook"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
    <App phonebook={phonebook} />
  
);
