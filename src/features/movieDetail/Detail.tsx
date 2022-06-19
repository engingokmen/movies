import { Image } from "../../components/atoms/Image";
import "./Detail.scss";

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
  imdbRating,
}: PropsDetail) => {
  return (
    <div className="container movie-detail">
      <Image src={Poster} />
      <h1>{Title}</h1>
      <div>
        Runtime: <strong>{Runtime}</strong>
      </div>
      <div>
        Type: <strong>{Type}</strong>
      </div>
      <div>
        Director: <strong>{Director}</strong>
      </div>
      <div>
        IMDB Rating: <strong>{imdbRating}</strong>
      </div>
    </div>
  );
};
