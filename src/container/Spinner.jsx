import React from "react";
import Loader from "react-js-loader";

const Spinner = () => {
  return (
    <div className="bg-white">
      <div className="absolute w-[5%] h-[10%] bottom-0 left-0 top-0 right-0 m-auto bg-white">
        <Loader
          type="spinner-default"
          bgColor={"#6A52FD"}
          color={"#6A52FD"}
          size={100}
        />
      </div>
    </div>
  );
};

export default Spinner;
