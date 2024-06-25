import { useState } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
export default function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((c) => {
    if (!c.sortValue) {
      return c;
    }
    return {
      ...c,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => {
            handleClick(c.label);
          }}
        >
          <div className="flex item-center">
            {getIcons(c.label, sortBy, sortOrder)}
            {c.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = [...data];
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData.sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valA === "string") {
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });
  }
  // props has a config property in it but
  // it will be over written by config
  // declared post {...props}
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label != sortBy)
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  if (sortOrder === null)
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  if (sortOrder === "asc")
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  if (sortOrder === "desc")
    return (
      <div>
        <GoArrowDown />
      </div>
    );
}

// Sorting notes ->
// only sort data when sortOrder & sortBy are not null
// make a copy of the "data" prop
// find the correct sortValue fn and use it for sorting
