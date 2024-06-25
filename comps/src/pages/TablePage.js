// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

export default function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-300", score: 3 },
    { name: "Lime", color: "bg-yellow-500", score: 1 },
    { name: "Jackfruit", color: "bg-green-500", score: 2 },
    { name: "Banana", color: "bg-yellow-800", score: 5 },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit)=> fruit.name
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      // this will come from sortableTable
     // header: ()=> <th className="bg-red-500">Score</th>,
      sortValue: (fruit)=> fruit.score
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
