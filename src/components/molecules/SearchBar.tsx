import { useState } from "react";
import { MovieGet } from "../../services/movie";
import { Button } from "../atoms/Button";

export const SearchBar = ({
  onSubmit,
}: {
  onSubmit: (data: MovieGet) => void;
}) => {
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit({ s: term, y: year, type });
  };

  return (
    <form onSubmit={handleSubmit} className="movie">
      <input
        placeholder="Search"
        id="test"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <input
        placeholder="Year of Release"
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <select onChange={(e) => setType(e.target.value)}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <Button type="submit">Submit</Button>
    </form>
  );
};
