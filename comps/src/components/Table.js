// function Echo({children}){
//     return children;
// }
import { Fragment } from "react";

export default function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
        // not a good solution as react gives a warning but it will work
      // return <div key={column.label}>{column.header()}</div>;
      // below will work  but this is what fragment does
      // return <Echo key={column.label}></Echo>
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <th key={column.key}>{column.label}</th>;
  });

  const renderedRows = data.map((d) => {
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(d)}</td>;
    });
    return (
      <tr key={keyFn(d)} className="border-b">
        {/* <td className="p-3">{config[0].render(d)}</td>
        <td className={`p-3 m-2 ${d.color}`}></td>
        <td className="p-3">{config[2].render(d)}</td> */}
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2 border-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
