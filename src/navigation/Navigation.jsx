import { Route, Routes, BrowserRouter } from "react-router-dom";
import Crypto from "../pages/Crypto";
import Main from "../pages/Main";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Coincap" element={<Main />} exact={true} />
        <Route path="/Coincap/:id" element={<Crypto />} exact={true} />
      </Routes>
    </BrowserRouter>
  );
}
