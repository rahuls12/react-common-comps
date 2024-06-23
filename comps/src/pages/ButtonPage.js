import Button from "../components/Button";
import { Bs0SquareFill, BsAirplane } from "react-icons/bs";

function ButtonPage() {
  const handleClick = () => {
    // console.log("handle click")
  };
  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          <Bs0SquareFill />
          Click Here!!
        </Button>
      </div>
      <div>
        <Button secondary>
          <BsAirplane />
          Loda
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Lehsun
        </Button>
      </div>
      <div>
        <Button warning></Button>
      </div>
      <div>
        <Button success outline></Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default ButtonPage;
