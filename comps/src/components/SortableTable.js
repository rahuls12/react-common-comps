import { useState } from "react";
import Table from "./Table";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import useSort from "../hooks/useSort";

export default function SortableTable(props) {
  const { config, data } = props;
  const { sortedData, handleClick, sortBy, sortOrder } = useSort(config, data);
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

  // props has a config property in it but
  // it will be over written by config
  // declared post {...props}
  return <Table {...props} data={sortedData} config={updatedConfig} />;
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
