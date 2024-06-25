export default function Table({ data }) {
  const renderedRows = data.map((d) => {
    return (
      <tr key={d.name} className="border-b">
        <td className="p-3">{d.name}</td>
        <td className={`p-3 m-2 ${d.color}`}></td>
        <td className="p-3">{d.score}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
