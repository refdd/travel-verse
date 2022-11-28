import { Dropdown, Label, Select } from "flowbite-react";
import Link from "next/link";
import React from "react";
import FromCounter from "./FromCounter";

function FromSection() {
  return (
    <div className="container mx-auto pt-24 md:w-[60%]  pb-6">
      <h1 className="text-xl font-Roboto text-[#09415d] text-center capitalize">
        Tell us about the travelers
      </h1>
      <div className="flex flex-col gap-4 pt-6 border px-2">
        {/* frist name and email */}
        <div className="flex flex-col gap-4  md:flex-row">
        <div className="flex-1">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="flex-1">
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
        </div>
        </div>
        {/* nastionlty  and number */}
       <div className=" flex flex-col gap-4  md:flex-row  ">
         {/* nasnaltity */}
         <div id="select" className="flex-1">
          <div className="mb-2 block">
            <Label htmlFor="countries" value="Select your country" />
          </div>
          <Select id="countries" required={true}>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        {/* number phne */}
        <div class="flex items-end justify-center ">
          <label
            for="search-dropdown"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
          >
            code#{" "}
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
            data-popper-reference-hidden=""
            data-popper-escaped=""
            data-popper-placement="top"
            style={{
              position: "absolute",
              margin: "0px",
              transform: "translate3d(897px, 5637px, 0px)",
            }}
          >
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +200
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +276
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +56456
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  +76576
                </button>
              </li>
            </ul>
          </div>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="phone Number"
              required
            />
          </div>
        </div>
       </div>
        {/* counter */}
        <FromCounter />
        {/* pudget */}
        <div>
          <p className="text-xl my-5 text-gray-600 font-Roboto capitalize ">
            Your average budget per person
          </p>
          
          <div className="flex gap-1">
            <Dropdown style={{background:"#fff" , color:"black" , width:"180px" , border:"1px solid #333"}}  className="bg-white" label="Dropdown button" dismissOnClick={false}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <p className=" text-sm font-Roboto text-gray-600 capitalize mx-3"> Per person (international flights NOT included)</p>
          </div>
        </div>
        {/* chack box  */}
        <div class="flex items-center mb-4  gap-3   ">
          <input
            id="default-checkbox"
            type="checkbox"
       
            
            class="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
           <p className="text-lg text-gray-700 font-Roboto font-medium capitalize">  Add flight offer to your vacation package</p>
        </div>
           {/* textarea */}
           <div className="flex flex-col justify-center items-center">
                <textarea
                  id="message"
                  rows="4"
                  className=" p-2.5 w-[90%] text-sm text-[#777] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Your message..."
                ></textarea>
              </div>
              {/* supmit */}
              <div className="flex gap-2 pt-7 justify-around  items-center ">
             <button className="text-xl text-gray-500 border rounded-lg px-7 py-2  ">
              <Link href={"/Destaintion"}>
              Back
              </Link>
             </button>
             <button className="text-xl text-white bg-[#09415D] px-7 py-2 rounded-lg  ">
             <Link href={"/FromInquire"}>
             Next Step
              </Link>
              
             </button>
         </div>
      </div>
    </div>
  );
}

export default FromSection;
