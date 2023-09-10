import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Button } from "../../../common/button";
import Swal from "sweetalert2";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";

const Konfirmasi = () => {
  const [loginData, setLoginData] = useState({
    nik: "",
    name: "",
    str: "",
    email: "",
    alamat: "",
    password: "",
  });

  const handleLogin = () => {
    axios
      .post("https://scanocular.online/api/users/dokter/signup", {
        NIK: loginData.nik,
        STR: loginData.str,
        name: loginData.name,
        email: loginData.email,
        password: loginData,
        alamat: loginData.alamat,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Gagal", error.message, "warning");
      });
  };

  const dispatchLogin = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const [open, setOpen] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      nama: "Pudyasta Satria",
      email: "pudyastasatria@gmail.com",
      tanggal: "2 September 2023",
    },
    {
      id: 2,

      nama: "Dinar Nugroho",
      email: "dinarnoe99@gmail.com",
      tanggal: "2 September 2023",
    },
    {
      id: 3,
      nama: "Fajar Rahmah",
      email: "fajarrafmahnurrohman@gmail.com",
      tanggal: "2 September 2023",
    },
  ]);

  return (
    <>
      <h1 className="md:text-4xl text-xl font-semibold capitalize py-8 text-primary-text">
        List Dokter
      </h1>
      <div className="bg-white  py-12 px-8 rounded-xl shadow-sm overflow-x-auto overflow-y-auto max-h-[75vh]">
        <div className="flex gap-5">
          <div className="relative">
            <button className="absolute text-2xl left-4 top-3">
              <BsSearch />
            </button>
            <input
              placeholder="Cari nama dokter"
              type="text"
              name="data"
              id="data"
              className="w-96 border border-2 border-grey-accent py-3 px-14 rounded-2xl duration-500 focus:border-primary-blue outline-none "
            />
          </div>
          <Button
            type="outlined1"
            className=" rounded-xl q px-3 text-sm font-semibold"
            onClick={() => setOpen(true)}
          >
            Tambah Dokter
          </Button>
        </div>
        <table className="mt-10 table-auto w-full align-left border-spacing-2">
          <thead className="text-left">
            <tr>
              <th className="capitalize text-secondary-text font-semibold w-96">
                nama
              </th>
              <th className="capitalize text-secondary-text font-semibold col-span-2 w-96">
                email
              </th>
              <th className="capitalize text-secondary-text font-semibold w-96">
                tanggal periksa
              </th>
              <th className="capitalize text-secondary-text font-semibold w-96">
                hasil
              </th>
              <th className="capitalize text-secondary-text font-semibold w-96">
                aksi
              </th>
            </tr>
          </thead>
          <tbody className="color-primary-text">
            {data.map((e, i) => {
              return (
                <tr
                  key={i}
                  className="h-16 border-b border-b-2 border-b-gray-100"
                >
                  <td>{e.nama}</td>
                  <td>{e.email}</td>
                  <td className="max-w-[6rem]">{e.tanggal}</td>
                  <td>
                    <a
                      className="text-primary-blue cursor-pointer"
                      onClick={() =>
                        Swal.fire({
                          imageUrl: "/assets/dashboard/mata.jpg",
                          imageHeight: 400,
                          imageAlt: "A tall image",
                          confirmButtonText: "Tutup",
                          confirmButtonColor: "#DC7226",
                        })
                      }
                    >
                      Cek Hasil
                    </a>
                  </td>
                  <td className="max-w-[4rem]">
                    <Button
                      children="Konfirmasi"
                      type="outlined"
                      className="rounded-xl text-sm py-2"
                      onClick={(x) => {
                        Swal.fire({
                          title: "Konfirmasi Data Pasien?",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Ya",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire("Data telah dikonfirmasi", "", "success");
                            setData(data.filter((a) => a.id !== e.id));
                          }
                        });
                      }}
                    />
                    <Button
                      children="Revisi"
                      type="primary"
                      className="rounded-xl text-sm py-2 px-5 bg-red-500 ml-1"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          center
          styles={{ modal: { padding: "50px 20px" } }}
        >
          <h2 className="text-xl font-medium text-primary-blue">
            Tambah Dokter Form
          </h2>
          <div className="flex flex-col">
            <label htmlFor="nik" className="mt-10 mb-2">
              NIK
            </label>
            <input
              type="text"
              name="nik"
              id="nik"
              className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none w-[50vh]"
              onChange={dispatchLogin}
            />
            <label htmlFor="name" className="mt-8 mb-2">
              Nama
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={dispatchLogin}
              className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none w-[50vh]"
            />
            <label htmlFor="name" className="mt-8 mb-2">
              STR
            </label>
            <input
              type="text"
              name="str"
              id="str"
              onChange={dispatchLogin}
              className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none w-[50vh]"
            />
            <label htmlFor="email" className="mt-6 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={dispatchLogin}
              className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none "
            />
            <label htmlFor="alamat" className="mt-6 mb-2">
              Alamat
            </label>
            <input
              type="text"
              name="alamat"
              id="alamat"
              onChange={dispatchLogin}
              className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none "
            />
            <label htmlFor="password" className="mt-6 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={dispatchLogin}
              className="border border-2 border-grey-accent p-3 rounded-xl duration-500 focus:border-primary-blue outline-none "
            />
          </div>
          <Button
            type="outlined1"
            className="mt-10 rounded-xl shadow-xl w-full"
            onClick={handleLogin}
          >
            Tambahkan
          </Button>
        </Modal>
      </div>
    </>
  );
};

export default Konfirmasi;
