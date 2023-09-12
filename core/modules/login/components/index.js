import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../../common/button";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  const handleSubmit = () => {
    axios
      .post("https://scanocular.online/api/users/dokter/signin/", {
        email,
        password,
      })
      .then((res) => {
        Swal.fire("Login Berhasil", "", "success");
        localStorage.setItem("userData", JSON.stringify(res.data));
        push("/dashboard/home");
      })
      .catch((e) => {
        if (e.code == 404) {
          Swal.fire(
            "User Tidak Ditemukan",
            "Harap isi semua data dengan benar!",
            "info"
          );
        } else {
          Swal.fire("Terjadi Kesalahan", "Silahkan coba lagi", "warning");
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      push("/dashboard/home");
    }
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 w-full h-screen">
        <div className="lg:flex hidden banner bg-gradient-45 from-[#FAFAFA00] to-[#0075FF10]  ">
          <Image
            width={600}
            height={200}
            src="/assets/login/loginbanner.png"
            className="m-auto "
          />
        </div>
        <div className="form flex flex-col justify-center lg:px-20 px-5">
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
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none"
          />
          <label htmlFor="password" className="mt-8 mb-2">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none"
          />

          <Button
            type="primary"
            className="mt-10 rounded-xl shadow-xl"
            onClick={() => handleSubmit()}
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default index;
