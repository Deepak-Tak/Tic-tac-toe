import { Children, useEffect, useState } from "react";
const Block = ({ turn, callBack, newGame }) => {
  const [flag, setFlag] = useState(true);
  const [boxValue, setBoxValue] = useState(" ");
  useEffect(() => {
    if (newGame == 1) {
      setFlag(true);
      setBoxValue(" ");
    }
  });
  return (
    <div
      className="grid h-[100px]"
      onClick={() => {
        if (flag) {
          setBoxValue(turn);
          setFlag(false);
          callBack();
        }
      }}
    >
      <h1 className=" text-4xl  font-bold text-sky-500  place-self-center">
        {boxValue}
      </h1>
    </div>
  );
};
export default Block;
