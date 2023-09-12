import React, { useEffect, useState } from "react";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { Button } from "../../../common/button";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const ScreeningGlukoma = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  let prev;
  useEffect(() => {
    axios
      .get("https://scanocular.online/api/pemeriksaan/cekmata/screening")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((e) => {
        Swal.fire(
          "Gagal",
          "Sedang terjadi galat silahakan coba kembali",
          "warning"
        );
      });
  }, []);

  const handleRevision = (id) => {
    axios
      .put(
        `https://scanocular.online/api/pemeriksaan/cekmata/screening/${id}`,
        {
          status: "unconfirm",
        }
      )
      .then((res) => {
        Swal.fire("Data telah dikonfirmasi", "", "success");
      })
      .catch((e) => {
        Swal.fire(
          "Gagal",
          "Sedang terjadi galat silahakan coba kembali",
          "warning"
        );
      });
  };

  const handleConfirm = (id) => {
    axios
      .put(
        `https://scanocular.online/api/pemeriksaan/cekmata/screening/${id}`,
        {
          status: "confirm",
        }
      )
      .then((res) => {
        Swal.fire("Data telah direvisi", "", "success");
      })
      .catch((e) => {
        Swal.fire(
          "Gagal",
          "Sedang terjadi galat silahakan coba kembali",
          "warning"
        );
      });
  };

  if (!data) {
    return <></>;
  }
  return (
    <>
      <h1 className="md:text-4xl text-xl font-semibold capitalize py-8 text-primary-text">
        Permintaan konfirmasi Glukoma dan Diabetes Retinopati
      </h1>
      <div className="bg-white  py-12 px-8 rounded-xl shadow-sm overflow-x-auto overflow-y-auto max-h-[75vh]">
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

        <table className="mt-10 table-auto w-full align-left border-spacing-2">
          <thead className="text-left">
            <th className="capitalize text-secondary-text font-semibold w-96">
              nama
            </th>
            <th className="capitalize text-secondary-text font-semibold col-span-2 w-96">
              Tipe penyakit
            </th>
            <th className="capitalize text-secondary-text font-semibold w-96">
              email
            </th>
            <th className="capitalize text-secondary-text font-semibold w-96">
              hasil
            </th>
            <th className="capitalize text-secondary-text font-semibold w-96">
              aksi
            </th>
          </thead>
          <tbody className="color-primary-text">
            {data
              .filter((x) => {
                if (x.status !== "pending" || x.scan_id == prev) {
                  return false;
                }
                prev = x.scan_id;
                return true;
              })
              .map((e, i) => {
                return (
                  <tr
                    key={i}
                    className="h-16 border-b border-b-2 border-b-gray-100"
                  >
                    <td>{e.name}</td>
                    <td className="capitalize">{e.type_penyakit}</td>
                    <td className="max-w-[6rem]">{e.email}</td>
                    <td>
                      <Link
                        className="text-primary-blue cursor-pointer"
                        href={`/detail/${e.scan_id}`}
                      >
                        Cek Hasil
                      </Link>
                    </td>
                    <td className="max-w-[4rem]">
                      <Button
                        children="Konfirmasi"
                        type="outlined"
                        className="rounded-xl text-sm py-2"
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
                              handleConfirm(e.scan_id);
                              setData(
                                data.filter((a) => a.scan_id !== e.scan_id)
                              );
                            }
                          });
                        }}
                      />
                      <Button
                        children="Revisi"
                        type="primary"
                        className="rounded-xl text-sm py-2 px-5 bg-yellow-500 ml-1"
                        onClick={() => {
                          Swal.fire({
                            title: "Revisi Data?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Ya",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              handleRevision(e.scan_id);
                              setData(data.filter((a) => a.id !== e.id));
                            }
                          });
                        }}
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

export default ScreeningGlukoma;
