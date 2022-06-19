interface Props extends React.HTMLAttributes<HTMLTableElement> {
  data: { id: string }[];
  hiddenCells?: string[];
}

export const Table = ({ data, hiddenCells = [], onClick }: Props) => {
  // header cells
  const th = Object.keys(data[0]).map(
    (key: string) =>
      !hiddenCells.includes(key) && (
        <th key={key} className="text-left">
          {key.toUpperCase()}
        </th>
      )
  );

  // body row cells
  const td = (i: any) =>
    Object.entries(i).map(
      ([key, value]: [string, any], index: number) =>
        !hiddenCells.includes(key) && (
          <td id={i.id} key={i.id + String(index)} className="border-t">
            {value}
          </td>
        )
    );

  return (
    <table onClick={onClick} className="w-full table-auto">
      <thead>
        <tr>{th}</tr>
      </thead>
      <tbody>
        {data.map((i: any, index: number) => (
          <tr key={i.id + String(index)}>{td(i)}</tr>
        ))}
      </tbody>
    </table>
  );
};
