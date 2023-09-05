import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkItem from "./LinkItem";
import {
  BsSpeedometer2,
  BsFillFolderFill,
  BsFillFileEarmarkTextFill,
  BsReplyFill,
  BsGridFill,
  BsFillBellFill,
} from "react-icons/bs";
const DashboardLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`lg:relative absolute col-span-2 h-screen bg-[#131C55] after:content-[''] after:bg-[url('/assets/dashboard/pattern.png')] after:opacity-40 after:absolute after:w-full after:h-screen after:bg-no-repeat after:bg-cover flex flex-col justify-between min-w-90 ${
          !isOpen
            ? "lg:w-0 lg:translate-x-0 -translate-x-full"
            : "lg:w-1/5 translate-x-0"
        }  z-20 duration-500 ease-out overflow-hidden`}
      >
        <div className="relative z-10 ">
          <div className="bg-[#0E1B6B] text-center ">
            <h2 className="text-white uppercase text-lg py-5 font-bold">
              scanocular
            </h2>
          </div>
          <div className="px-8 my-8 flex flex-col gap-4">
            <LinkItem
              href="/dashboard/home"
              query="home"
              onClick={() => setIsOpen(false)}
            >
              <BsSpeedometer2 /> Dashboard
            </LinkItem>
            <LinkItem
              href="/dashboard/datapasien"
              query="datapasien"
              onClick={() => setIsOpen(false)}
            >
              <BsFillFileEarmarkTextFill /> Data Pasien
            </LinkItem>
            <LinkItem
              href="/dashboard/konfirmasi"
              query="konfirmasi"
              onClick={() => setIsOpen(false)}
            >
              <BsFillFolderFill /> Permintaan Konfirmasi
            </LinkItem>
          </div>
        </div>
        <div className="px-8 flex items-center gap-3 break-words my-6  text-white">
          <Image
            src="/assets/dashboard/person.png"
            className="rounded-full"
            width={60}
            height={20}
            alt="profile image"
          />
          <div className="w-full relative">
            <h2 className="text-xl">dr. Ako Jarimko, Sp.M. </h2>
            <h3 className="break-all font-thin">arkojarimko90@ugm.ac.id</h3>
          </div>
        </div>
      </div>
      <div className="col-span-10 bg-gray-50 w-full">
        <div
          className={`w-full bg-white h-20 flex  items-center px-12 text-xl flex ${
            isOpen ? "justify-end" : "justify-between"
          } duration-500`}
        >
          <button
            className={`${
              isOpen ? `translate-x-[20px]` : "translate-x-0"
            } text-2xl  bg-primary-blue p-3 rounded-xl text-white duration-500 ease-out`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BsGridFill />
          </button>
          <BsFillBellFill />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
