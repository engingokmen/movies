import { cloneElement } from "react";

interface Props {
  children: React.ReactElement;
  error: string;
  isLoading: boolean;
  data: any;
}

export const Loading = ({ children, error, isLoading, data }: Props) => {
  return error ? (
    <>Something went wrong</>
  ) : isLoading ? (
    <>Loading...</>
  ) : data ? (
    <>{cloneElement(children, data)}</>
  ) : null;
};
