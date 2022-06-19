import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Films } from "../pages/Film";
import { FilmDetail } from "../pages/FilmDetail";

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Films />} />
      <Route path=":id" element={<FilmDetail />} />
    </Routes>
  </BrowserRouter>
);
