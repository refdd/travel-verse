import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Test = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="w-full flex flex-col gap-3 pb-6 md:flex-row">
      <div className="  flex flex-col gap-1 mb-14 ">
        <p className="text-lg text-gray-500 font-Roboto mb-5"> Departure date</p>
        <input
          type="text"
          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
          placeholder="start"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          
        />

      </div>
      <div className="   flex flex-col gap-1 ">
      <p className="text-lg text-gray-500 font-Roboto mb-5">  Return date</p>

        <input
          type="text"
          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
          placeholder="Arrival"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />

      </div>
  </div>
  );
};
export default Test