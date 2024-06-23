import { useState } from "react";

import Dropdown from "../components/Dropdown";
function DropdownPage() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option)=>{
    setSelectedOption(option)
  }

  const options = [
    {label: 'red', value:'red'},
    {label: 'Green', value:'green'},
    {label: 'Blue', value:'blue'}
  ]
  
  return (
    <div>
      {/* <ButtonPage />
      <AccordionPage/> */}
      <div className="flex">
      <Dropdown value={selectedOption} onChange={handleSelect} options={options}/>
      <Dropdown value={selectedOption} onChange={handleSelect} options={options}/>
      </div>
    </div>
  );
}

export default DropdownPage;
