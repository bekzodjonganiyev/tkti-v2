import { Button } from "flowbite-react";
import React from "react";

export const Error = ({ error }) => {
  return (
    <div className="w-full h-full flex justify-center items-center my-20">
      <div className="flex flex-col items-center">
        <svg
          className="cursor-pointer"
          width="94"
          height="80"
          viewBox="0 0 94 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.9483 68.0881C14.965 68.7122 13.0551 71.6397 13.6859 74.6216C14.3147 77.5941 17.2309 79.4966 20.2047 78.8745L77.3891 66.912C80.3724 66.2879 82.2823 63.3604 81.6515 60.3785C81.0227 57.4061 78.1065 55.5036 75.1327 56.1257L17.9483 68.0881Z"
            fill="#121212"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.9616 28.1943C25.2926 32.5099 32.2981 32.5101 36.6293 28.1947L26.3983 18.0003L36.6293 7.80551L28.7953 0L18.5647 10.1944L8.33369 0C4.0118 4.30634 4.01169 11.3048 8.33345 15.6113L10.731 18.0003L4.43086 24.2779C2.26219 26.4388 2.26222 29.9506 4.43091 32.1115C6.58862 34.2614 10.0787 34.2614 12.2364 32.1114L18.5647 25.8058L20.9616 28.1943Z"
            fill="#121212"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M85.6667 0L75.4357 10.1944L65.2051 0L57.3711 7.80551L67.6021 18.0003L61.3021 24.2778C59.1334 26.4387 59.1334 29.9506 61.3022 32.1115C63.46 34.2615 66.9502 34.2614 69.1078 32.1113L75.4357 25.8058L81.764 32.1114C83.9217 34.2614 87.4118 34.2614 89.5695 32.1115C91.7382 29.9506 91.7382 26.4388 89.5695 24.2779L83.2694 18.0003L93.5004 7.80551L85.6667 0Z"
            fill="#121212"
          />
        </svg>
        <p className="mt-10 text-xl font-bold">{error}</p>
        <div className="flex gap-2 mt-5">
          <Button
            size={"sm"}
            className="bg-black hover:bg-gray-600"
            onClick={() => location.reload()}
          >
            Qayta yuklash
          </Button>
          <Button
            size={"sm"}
            className="bg-black hover:bg-gray-600"
            onClick={() => location.href = "/"}
          >
            Bosh sahifaga
          </Button>
        </div>
      </div>
    </div>
  );
};
