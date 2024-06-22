import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import { useState } from "react";

import Dropdown from "./components/Dropdown";
function App() {

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
      <Dropdown value={selectedOption} onChange={handleSelect} options={options}/>
    </div>
  );
}

export default App;
