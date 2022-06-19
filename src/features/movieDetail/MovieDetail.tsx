import { useParams } from "react-router-dom";
import { Loading } from "../../components/molecules/Loading";
import { useGetMovieByIdQuery } from "../../services/movie";
import { Detail } from "./Detail";

export const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieByIdQuery(id);
  const error = data?.Error || undefined;

  return (
    <Loading data={data} error={error} isLoading={isLoading}>
      <Detail {...data} />
    </Loading>
  );
};
