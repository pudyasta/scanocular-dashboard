import React, { useEffect, useState } from "react";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { Button } from "../../../common/button";
import Image from "next/image";
import Swal from "sweetalert2";

const Konfirmasi = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    console.log(DATA);
  });
  return (
    <>
      {showModal && (
        <div className="alert before:content[''] before:w-full before:absolute before:h-screen before:bg-black/50 before:top-0 before:right-0 before:z-20 ">
          <div className="bar  bg-white absolute z-30 left-[37.5vw] top-[12.5vh] bottom-auto pb-10 min-h-1/2 w-1/4 rounded-xl overflow-hidden flex flex-col">
            <h2 className="bg-[#F4F4F4] px-8 py-5 text-2xl font-semibold text-primary-blue shadow-xl">
              Hasil Pemindaian
            </h2>
            <Image
              className="px-8 mt-10 mx-auto"
              src={"/assets/dashboard/mata.jpg"}
              height={500}
              width={700}
              alt="mata"
            />
            <button
              type="submit"
              className="mx-8 mt-5 rounded-xl bg-[#DC7226] text-white py-2"
              onClick={() => setShowModal(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
      <div>
        <h1 className="text-4xl font-semibold capitalize px-12 py-8 text-primary-text">
          Permintaan konfirmasi Katarak
        </h1>
      </div>
      <div className="bg-white mx-12 py-12 px-8 rounded-xl shadow-sm overflow-x-auto overflow-y-auto max-h-[75vh]">
        <div className="relative">
          <button className="absolute text-2xl left-4 top-3">
            <BsSearch />
          </button>
          <input
            placeholder="Cari nama pasien"
            type="text"
            name="data"
            id="data"
            className="w-full border border-2 border-grey-accent py-3 px-14 rounded-2xl duration-500 focus:border-primary-blue outline-none "
          />
        </div>

        <table class="mt-10 table-auto w-full align-left border-spacing-2">
          <thead class="text-left">
            <th className="capitalize text-secondary-text font-semibold w-96">
              nama
            </th>
            <th className="capitalize text-secondary-text font-semibold col-span-2 w-96">
              email
            </th>
            <th className="capitalize text-secondary-text font-semibold w-96">
              tanggal periksa
            </th>
            <th className="capitalize text-secondary-text font-semibold">
              hasil
            </th>
            <th className="capitalize text-secondary-text font-semibold ">
              aksi
            </th>
          </thead>
          <tbody className="color-primary-text">
            {DATA.map((e, i) => {
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
                      onClick={() => setShowModal(true)}
                    >
                      Cek Hasil
                    </a>
                  </td>
                  <td className="max-w-[4rem]">
                    <Button
                      children="Konfirmasi"
                      type="outlined"
                      className="rounded-xl py-1 w-32"
                      onClick={() => {
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
                          }
                        });
                      }}
                    />
                    <Button
                      children="Revisi"
                      type="primary"
                      className="rounded-xl py-1 w-32 bg-red-500 ml-1"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const DATA = [
  {
    nama: "Pudyasta Satria",
    email: "pudyastasatria@gmail.com",
    tanggal: "2 September 2023",
  },
  {
    nama: "Dinar Nugroho",
    email: "dinarnoe99@gmail.com",
    tanggal: "2 September 2023",
  },
  {
    nama: "Fajar Rahmah",
    email: "fajarrafmahnurrohman@gmail.com",
    tanggal: "2 September 2023",
  },
];

export default Konfirmasi;
