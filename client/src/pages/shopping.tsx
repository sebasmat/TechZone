import React from "react";
import Image from "next/image";
import data from "../data.json";
import {withPageAuthRequired} from "@auth0/nextjs-auth0/client"

// div page-container
//   div products-container
//     div product

const Shopping = () => {
  return (
    // page container
    <div className="flex justify-center content-center">
      {/*cart container*/}
      <div className="flex flex-col bg-teal-100">
        {/*product*/}
        <div className="flex">
          {/*image*/}
          <div>
            <Image
              src={data[0].imageCard}
              alt={data[0].name}
              width={150}
              height={150}
            />
          </div>
          <div>
            <p>{data[0].name}</p>
            <p>{data[0].brand}</p>
            <p>{data[0].price}</p>
          </div>
          <div className="flex justify-center content-center items-center">
            <input type="text" placeholder="1" className="h-10" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trash"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 7l16 0"></path>
              <path d="M10 11l0 6"></path>
              <path d="M14 11l0 6"></path>
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPageAuthRequired(Shopping);
