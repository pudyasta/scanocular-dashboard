import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkItem from "./LinkItem";
import {
  BsSpeedometer2,
  BsFillFolderFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12  ">
      <div className="relative col-span-2 h-screen bg-[#131C55] after:content-[''] after:bg-[url('/assets/dashboard/pattern.png')] after:opacity-40 after:absolute after:w-full after:h-screen after:bg-no-repeat after:bg-cover flex flex-col justify-between ">
        <div className="relative z-10">
          <div className="bg-[#0E1B6B] text-center ">
            <h2 className="text-white uppercase text-lg py-5 font-bold">
              scanocular
            </h2>
          </div>
          <div className="px-8 my-8 flex flex-col gap-4">
            <LinkItem href="/dashboard/home" query="home">
              <BsSpeedometer2 /> Dashboard
            </LinkItem>
            <LinkItem href="/dashboard/datapasien" query="datapasien">
              <BsFillFileEarmarkTextFill /> Data Pasien
            </LinkItem>
            <LinkItem href="/dashboard/konfirmasi" query="konfirmasi">
              <BsFillFolderFill /> Permintaan Konfirmasi
            </LinkItem>
          </div>
        </div>
        <div className="px-8 flex items-center gap-3 break-words my-6 relative text-white">
          <Image
            src="/assets/dashboard/dummyperson.png"
            className="rounded-full"
            width={60}
            height={20}
            alt="profile image"
          />
          <div className="w-full relative">
            <h2 className="text-xl">Mac Allister</h2>
            <h3 className="break-all font-thin">macallister@mail.com</h3>
          </div>
        </div>
      </div>
      <div className="col-span-10 bg-gray-50">{children}</div>
    </div>
  );
};

export default DashboardLayout;
