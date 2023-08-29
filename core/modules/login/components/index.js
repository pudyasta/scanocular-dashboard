import Image from "next/image";
import React from "react";
import { Button } from "../../common/button";

const index = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-screen">
        <div className="banner bg-gradient-45 from-[#FAFAFA00] to-[#0075FF10] flex ">
          <Image
            width={600}
            height={200}
            src="/assets/login/loginbanner.png"
            className="m-auto "
          />
        </div>
        <div className="form flex flex-col justify-center px-20">
          <h2 className="text-4xl uppercase font-semibold text-primary-text">
            scanocular
          </h2>
          <h5 className="text-xl capitalize text-primary-text">
            Precision scans for a brighter vision!
          </h5>

          <label htmlFor="email" className="mt-10 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none"
          />
          <label htmlFor="password" className="mt-8 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none"
          />

          <Button type="outlined1" className="mt-10">
            login
          </Button>
        </div>
      </div>
    </>
  );
};

export default index;
