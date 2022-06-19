interface Props {
  src: string;
  width: number;
}

export const Image = ({ src, width = 60 }: Props) => {
  return <img src={src} alt={src} width={width} />;
};
