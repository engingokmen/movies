import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Movie } from "../features/movie/Movie";
import { MovieDetail } from "../features/movieDetail/MovieDetail";

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path=":id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>
);
