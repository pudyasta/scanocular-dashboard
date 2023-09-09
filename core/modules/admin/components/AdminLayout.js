import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkItem from "../../common/LinkItem";
import {
  BsSpeedometer2,
  BsFillFolderFill,
  BsFillFileEarmarkTextFill,
  BsGridFill,
  BsFillBellFill,
} from "react-icons/bs";
import { useRouter } from "next/router";

const DashboardLayout = ({ children }) => {
  const [device, setDevice] = useState("mobile");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter().query.slug;

  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  useEffect(() => {
    if (detectDeviceType() === "Desktop") {
      setDevice("desktop");
      setIsOpen(!isOpen);
    }
    console.log(router);
  }, []);
  return (
    <div className="flex">
      <div
        className={`lg:relative absolute col-span-2 h-screen bg-[#131C55] after:content-[''] after:bg-[url('/assets/dashboard/pattern.png')] after:opacity-40 after:absolute after:w-full after:h-screen after:bg-no-repeat after:bg-cover flex flex-col justify-between 
        min-w-90 ${
          !isOpen
            ? "lg:w-0 lg:translate-x-0 -translate-x-full opacity-0"
            : "lg:w-1/5 translate-x-0 opacity-1"
        }  z-20 duration-500 ease-out overflow-hidden`}
      >
        <div className="relative z-10 ">
          <div className="bg-[#0E1B6B] text-center ">
            <h2 className="text-white uppercase text-lg py-5 font-bold">
              scanocular
            </h2>
          </div>
          <div className="relative z-10 px-8 my-8 flex flex-col gap-4">
            <LinkItem
              href="/admin/homeadmin"
              query="homeadmin"
              onClick={() => device == "mobile" && setIsOpen(false)}
            >
              <BsSpeedometer2 /> Dashboard
            </LinkItem>
            <LinkItem
              href="/admin/dataartikel"
              query="dataartikel"
              onClick={() => device == "mobile" && setIsOpen(false)}
            >
              <BsFillFileEarmarkTextFill /> Data Pasien
            </LinkItem>
            <LinkItem
              href="/admin/listdokter"
              query="listdokter"
              onClick={() => device == "mobile" && setIsOpen(false)}
            >
              <BsFillFolderFill /> List Dokter
            </LinkItem>
          </div>
        </div>
        <div className="px-8 flex items-center gap-3 break-words my-6  text-white"></div>
      </div>
      <div className="col-span-10 w-full bg-gray-50 h-screem">
        <div
          className={`w-full bg-white h-20 flex  items-center md:px-12 px-8 text-xl flex ${"justify-between"} duration-500`}
        >
          <button
            className={` text-2xl  bg-primary-blue p-3 rounded-xl text-white duration-500 ease-out`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BsGridFill />
          </button>
          <BsFillBellFill />
        </div>
        <div className="bg-gray-50 px-8 md:px-12 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
