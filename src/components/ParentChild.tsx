// Send data from child to parent
import { Spacer } from "@nextui-org/spacer";
import { useState } from "react";

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const handelDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>ParentComponent</h1>
      <p>
        Data from child: <b className="text-purple-500">{dataFromChild}</b>
      </p>
      <span className="h-[1px] w-40 bg-red-500 mt-5"></span>
      <ChildComponent sendDataToParent={handelDataFromChild} />
    </div>
  );
};

export default ParentComponent;

interface ChildComponentProps {
  sendDataToParent: (data: string) => void;
}

function ChildComponent(props: ChildComponentProps) {
  return (
    <div>
      <h2>ChildComponent:</h2>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => props.sendDataToParent(e.target.value)}
      />
      <Spacer x={4} />
      <button onClick={() => props.sendDataToParent("")}>CLEAR</button>
    </div>
  );
}
