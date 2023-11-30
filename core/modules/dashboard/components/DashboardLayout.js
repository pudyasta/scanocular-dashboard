import Image from "next/image";
import React, { createContext, useEffect, useState } from "react";
import LinkItem from "../../common/LinkItem";
import {
  BsSpeedometer2,
  BsFillFolderFill,
  BsFillFileEarmarkTextFill,
  BsGridFill,
  BsFillBellFill,
  BsEyeFill,
  BsFileBarGraphFill,
  BsSearch,
} from "react-icons/bs";
import { useRouter } from "next/router";

export const sideContext = createContext();
const DashboardLayout = ({ children }) => {
  const [device, setDevice] = useState("mobile");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const userData = localStorage.getItem("userData");
  const data = JSON.parse(localStorage.getItem("userData"));

  const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? "Mobile"
      : "Desktop";
  useEffect(() => {
    if (!userData) {
      // router.push("/login");
    }
    if (detectDeviceType() === "Desktop") {
      setDevice("desktop");
      setIsOpen(true);
    }
  }, []);

  // if (!userData) return <></>;
  return (
    <div className="flex transition-all">
      <div
        className={`transition-all lg:relative absolute col-span-2 h-screen bg-[#131C55] after:content-[''] after:bg-[url('/assets/dashboard/pattern.png')] after:opacity-40 after:absolute after:w-full after:h-screen after:bg-no-repeat after:bg-cover flex flex-col justify-between 
        min-w-90 z-20 duration-500 ease-out overflow-hidden`}
      >
        <div className="relative z-10">
          <div className="bg-[#0E1B6B] text-center flex p-5 items-center">
            <div
              className={`title-wrapper  overflow-hidden ${
                isOpen ? "w-full" : "w-0"
              } `}
            >
              <h2
                className={`text-white text-left uppercase text-lg font-bold transition-all`}
              >
                scanocular
              </h2>
            </div>
            <button
              className={` text-2xl  bg-primary-blue p-3 rounded-xl text-white duration-500 ease-out`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <BsGridFill />
            </button>
          </div>
          <sideContext.Provider value={isOpen}>
            <div className="relative z-10 px-8 my-8 flex flex-col gap-4">
              {/* <LinkItem
              href="/dashboard/home"
              query="home"
              onClick={() => device == "mobile" && setIsOpen(false)}
              >
              <BsSpeedometer2 /> Dashboard
              </LinkItem>
              <LinkItem
              href="/dashboard/datapasien"
              query="datapasien"
              onClick={() => device == "mobile" && setIsOpen(false)}
              >
              <BsFillFileEarmarkTextFill /> Data Pasien
            </LinkItem> */}
              <LinkItem
                href="/dashboard/konfirmasi"
                query="konfirmasi"
                onClick={() => device == "mobile" && setIsOpen(false)}
                text={"Konfirmasi Katarak"}
              >
                <BsEyeFill size={25} />
              </LinkItem>
              <LinkItem
                href="/dashboard/konfirmasiglukoma"
                query="konfirmasiglukoma"
                onClick={() => device == "mobile" && setIsOpen(false)}
                text={"Konfirmasi Screening"}
              >
                <BsFileBarGraphFill size={25} />
              </LinkItem>
              <LinkItem
                href="/dashboard/glukoma"
                query="glukoma"
                onClick={() => device == "mobile" && setIsOpen(false)}
                text={"Cek Funduscopy"}
              >
                <BsSearch size={25} />
              </LinkItem>

              {/* <LinkItem
              href="/dashboard/diabetes"
              query="diabetes"
              onClick={() => device == "mobile" && setIsOpen(false)}
              >
              <BsFillFolderFill /> Cek Mata DR
            </LinkItem> */}
            </div>
          </sideContext.Provider>
        </div>
        <div className={`flex text-white p-5`}>
          <Image
            src="/assets/dashboard/person.png"
            className="rounded-full object-contain"
            width={60}
            height={20}
            alt="profile image"
          />
          <div
            className={`overflow-hidden transition-all  ${
              isOpen ? "w-full ml-3" : "w-0"
            } `}
          >
            <h4 className="text-md">{data.data.name}</h4>
            <span className=" font-thin text-sm">{data.data.email}</span>
          </div>
        </div>
      </div>
      <div className="col-span-10 w-full bg-gray-50 h-screen ">
        <div
          className={`w-full bg-white h-20 flex  items-center md:px-12 px-8 text-xl flex ${"justify-between"} duration-500`}
        >
          <BsFillBellFill />
        </div>
        <div className="bg-gray-50 px-8 md:px-12 absolute">
          {userData && children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
