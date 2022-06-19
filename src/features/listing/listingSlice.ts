import { createSelector } from "@reduxjs/toolkit";
import { filmApi } from "../../services/film";

interface Film {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export const selectFilmResult =
  filmApi.endpoints.getFilmByName.select("pokemon");

const emptyFilms: Film[] = [];

export const selectFilms = createSelector(
  selectFilmResult,
  (filmResult) => filmResult?.data?.Search ?? emptyFilms
);

export const selectFilmsForTable = createSelector(selectFilms, (films) =>
  films.map(({ Title, Year, imdbID }: Film, index: number) => ({
    Title,
    Year,
    imdbID,
    id: imdbID + index,
  }))
);
