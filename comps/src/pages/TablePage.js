import Table from "../components/Table";

export default function TablePage(){
    const data = [
        {name:"Orange", color: 'bg-orange-500', score: 5},
        {name:"Apple", color: 'bg-red-300', score: 3},
        {name:"Lime", color: 'bg-yellow-500', score: 1},
        {name:"Jackfruit", color: 'bg-green-500', score: 2},
        {name:"Banana", color: 'bg-yellow-800', score: 5},

    ]
    return <div>
        <Table data={data}/>
    </div>
}