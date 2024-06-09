"use client";
import React, { use } from "react";

function Register() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-white">
          <div className=" fixed top-[15vh] left-[10vw] h-[70vh] w-[80vw] bg-white/30
           flex items-center justify-center align-middle border
            rounded-2xl border-purple-600">
            <div className="basis-1/2 ">hjh</div>
            <div className="basis-1/2 flex flex-col p-28  h-full w-full">
              <h1 className="text-2xl font-bold mb-4 text-center text-black">Register</h1>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="appearance-none border rounded w-full
                    py-2 px-3 text-gray-700 leading-tight focus:outline-emerald-400 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="usn"
                  >
                    USN
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-emerald-400 focus:shadow-outline"
                    id="usn"
                    type="text"
                    placeholder="Enter USN"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="password"
                  >
                    password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-emerald-400 focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>
                <button
                  onSubmit={() => {}}
                  className={
                    "bg-emerald-600 hover:outline-emerald-400 text-white \
                     font-bold py-2 px-4 rounded focus:outline-none \
                     focus:shadow-outline \
                     ml-32                            \
                     "
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
      </div>
    </>
  );
}

export default Register;
