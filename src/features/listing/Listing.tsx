import { useSelector } from "react-redux";
import { SearchBar } from "../../components/molecules/searchBar";
import { Table } from "../../components/Table";
import { useGetFilmByNameQuery } from "../../services/film";
import { selectFilmsForTable } from "./listingSlice";

export const Listing = () => {
  const { isLoading, error } = useGetFilmByNameQuery("pokemon");
  const data = useSelector(selectFilmsForTable);

  return (
    <div>
      <SearchBar />

      {error ? (
        <>Something went wrong</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Table data={data} hiddenCells={["id"]} />
        </>
      ) : null}
    </div>
  );
};
