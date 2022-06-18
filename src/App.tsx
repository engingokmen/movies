import { useGetFilmByNameQuery } from "./services/film";

export const App = () => {
  const { data } = useGetFilmByNameQuery("pokemon");
  console.log("data", data);
  return (
    <div>
      <h1>Films</h1>
    </div>
  );
};
