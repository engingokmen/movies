type Ratings = {
  Source: string;
  Value: string;
};

interface PropsDetail {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: Ratings[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
}

export const Detail = ({
  Poster,
  Title,
  Runtime,
  Type,
  Director,
}: PropsDetail) => {
  return (
    <div>
      <img src={Poster} alt={Poster} />
      <h1>{Title}</h1>
      <div>{Runtime}</div>
      <div>{Type}</div>
      <div>{Director}</div>
    </div>
  );
};
