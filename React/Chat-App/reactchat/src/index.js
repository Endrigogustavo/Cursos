import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./style/global";

const root = createRoot(document.querySelector("#root"));

root.render(
    <>
    <App />
    <GlobalStyle />
    </>
)