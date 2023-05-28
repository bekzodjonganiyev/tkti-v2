import React from "react";

export const Sillabus = () => {
  return (
    <div className="container mx-auto w-[80%] my-24">
      <h2 className="flex justify-center items-center mx-auto  text-3xl lg:my-8 my-6 font-semibold ">Syllabusni toping</h2>

      <form action="" className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" max-sm:w-full w-full">
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Yil
            </label>
            <select
              id="large"
              className="max-sm:w-full  block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>O'quv yilini tanlang</option>
             
            </select>
          </div>

          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Ta'lim turi
            </label>
            <select
              id="large"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Kunduzgi/Sirtqi</option>
             
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Ta'lm darajasi
            </label>
            <select
              id="large"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Bakalavr/Magistr</option>
            
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Fakultet
            </label>
            <select
              id="large"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Fakultetni tanlang</option>
              
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Kafedra
            </label>
            <select
              id="large"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Kafedrani tanlang </option>
             
            </select>
          </div>
          <div>
            <label
              for="large"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Yo'nalish
            </label>
            <select
              id="large"
              className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Yo'nalishni tanlang</option>
             
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center  mx-auto  text-white my-5 bg-blue-700   items-center hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-20 py-4 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Qidirish
        </button>
       
      </form>
    </div>
  );
};
