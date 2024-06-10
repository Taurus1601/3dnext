"use client";
import { Canvas } from "@react-three/fiber";
import React, { use } from "react";
import NeuralNetwork from "../components/globe";
import Polyhedron from "../components/shape";
import Scene from "../components/shape";
import { OrbitControls } from "@react-three/drei";

function Register() {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-white">
          <div className=" fixed top-[15vh] left-[10vw] h-[70vh] w-[80vw] bg-white/30
           flex items-center justify-center align-middle border
            rounded-2xl border-purple-600">
            <div className="basis-1/2 ">
            <Canvas style={{width:"50vw",height:"60vh" , marginLeft:"2vw",backgroundColor:"red", borderRadius:20 ,marginRight:0}}
            camera={[0,0,0]}
            >
              {/* <OrbitControls enableZoom={false} /> */}
                <ambientLight intensity={0.5} />
                <Scene/>
            </Canvas>
            </div>
            <div className="basis-1/2 flex flex-col p-28 px-10  h-full w-full">
              <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>
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
