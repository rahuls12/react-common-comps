import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    // console.log(isExpanded)
    // const content = isExpanded && <div>{item.content}</div>;
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            if(expandedIndex === index){
              setExpandedIndex(-1)
            } else {
              setExpandedIndex(index)
            }
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
