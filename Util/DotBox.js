import React from "react";

const DotBox = ({
  dotNumber = 16,
  dotColumn = 3,
  dotRow = 10,
  leftOrRight = "left",
  topOrBot = "top",
}) => {
  let dotList = [];
  for (let i = 0; i < dotNumber; i++) {
    dotList.push(i);
  }
  //   const dotArray = new Array(dotRow);
  //   for (var i = 0; i < dotArray.length; i++) {
  //     dotArray[i] = new Array(dotColumn);
  //   }
  //   console.log(dotArray);

  //   console.log(dotList);
  return (
    <div className={`dotbox_container ${leftOrRight} ${topOrBot}`}>
      {dotList.map((el) => (
        <div key={el}></div>
      ))}
      {/* {dotArray.map((el, index) => (
        <div key={index * 100}>
          {el.map((item, id) => (
            <div key={id * 10000}>{id}</div>
          ))}
        </div>
      ))} */}
    </div>
  );
};

export default DotBox;
