import { useState } from "react";
import { SearchBar } from "../../components/molecules/SearchBar";
import { Table } from "../../components/molecules/Table";
import { MovieGet, useGetFilmQuery } from "../../services/movie";

export const Movie = () => {
  const [searchData, setSearchData] = useState<MovieGet>({
    s: "pokemon",
    y: "",
    type: "",
  });
  const { data, isLoading } = useGetFilmQuery(searchData);
  const error = data?.Error || undefined;
  const search = data?.Search || [];

  return (
    <div>
      <SearchBar onSubmit={setSearchData} />

      {error ? (
        <>Something went wrong</>
      ) : isLoading ? (
        <>Loading...</>
      ) : search ? (
        <>
          <Table data={search} hiddenCells={["id", "Type", "Poster"]} />
        </>
      ) : null}
    </div>
  );
};
