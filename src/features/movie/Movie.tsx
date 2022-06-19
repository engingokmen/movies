import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../components/molecules/Loading";
import { SearchBar } from "../../components/molecules/SearchBar";
import { Table } from "../../components/molecules/Table";
import { MovieGet, useGetMoviesQuery } from "../../services/movie";

export const Movie = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState<MovieGet>({
    s: "pokemon",
    y: "",
    type: "",
  });
  const { data, isLoading } = useGetMoviesQuery(searchData);
  const error = data?.Error || undefined;
  const list = data?.Search || [];
  const listAddedId = list.map((i: any) => ({ ...i, id: i.imdbID })); // add id field, can be moved to slice

  return (
    <div>
      <SearchBar onSubmit={setSearchData} />

      <Loading data={data} error={error} isLoading={isLoading}>
        <Table
          data={listAddedId}
          hiddenCells={["id", "Type", "Poster"]}
          onClick={(e: any) => navigate(e.target.id)}
        />
      </Loading>
    </div>
  );
};
