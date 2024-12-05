import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Routes/Home";
import Contact from "../src/Routes/Contact";
import Favs from "../src/Routes/Favs";
import { ModuleRoutes } from "./routes";
import { ContextProvider } from "./Context/global.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path={ModuleRoutes.HOME} element={<App />}>
          <Route index element={<Home />} />
          <Route path={ModuleRoutes.CONTACT} element={<Contact />} />
          <Route path={ModuleRoutes.FAV} element={<Favs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
