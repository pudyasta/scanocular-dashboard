import React from "react";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { Button } from "../../../common/button";

const Konfirmasi = () => {
  return (
    <>
      <div className="w-full bg-white h-20 flex justify-end items-center px-12 text-xl">
        <BsFillBellFill />
      </div>
      <div>
        <h1 className="text-4xl font-semibold capitalize px-12 py-8 text-primary-text">
          Permintaan konfirmasi
        </h1>
      </div>
      <div className="bg-white mx-12 py-12 px-8 rounded-xl shadow-sm overflow-x-auto">
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
            <th className="capitalize text-secondary-text font-semibold">
              nama
            </th>
            <th className="capitalize text-secondary-text font-semibold col-span-2">
              email
            </th>
            <th className="capitalize text-secondary-text font-semibold">
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
            <tr className="h-20 border-b border-b-2 border-b-gray-100">
              <td>Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[6rem]">Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[4rem]">
                <Button
                  children="Konfirmasi"
                  type="outlined"
                  className="rounded-xl py-2 w-32"
                />
                <Button
                  children="Revisi"
                  type="primary"
                  className="rounded-xl py-2 w-32 bg-red-500 ml-1"
                />
              </td>
            </tr>
            <tr className="h-20 border-b border-b-2 border-b-gray-100">
              <td>Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[6rem]">Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[4rem]">
                <Button
                  children="Konfirmasi"
                  type="outlined"
                  className="rounded-xl py-2 w-32"
                />
                <Button
                  children="Revisi"
                  type="primary"
                  className="rounded-xl py-2 w-32 bg-red-500 ml-1"
                />
              </td>
            </tr>
            <tr className="h-20 border-b border-b-2 border-b-gray-100">
              <td>Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[6rem]">Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[4rem]">
                <Button
                  children="Konfirmasi"
                  type="outlined"
                  className="rounded-xl py-2 w-32"
                />
                <Button
                  children="Revisi"
                  type="primary"
                  className="rounded-xl py-2 w-32 bg-red-500 ml-1"
                />
              </td>
            </tr>
            <tr className="h-20 border-b border-b-2 border-b-gray-100">
              <td>Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[6rem]">Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[4rem]">
                <Button
                  children="Konfirmasi"
                  type="outlined"
                  className="rounded-xl py-2 w-32"
                />
                <Button
                  children="Revisi"
                  type="primary"
                  className="rounded-xl py-2 w-32 bg-red-500 ml-1"
                />
              </td>
            </tr>
            <tr className="h-20 border-b border-b-2 border-b-gray-100">
              <td>Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[6rem]">Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[4rem]">
                <Button
                  children="Konfirmasi"
                  type="outlined"
                  className="rounded-xl py-2 w-32"
                />
                <Button
                  children="Revisi"
                  type="primary"
                  className="rounded-xl py-2 w-32 bg-red-500 ml-1"
                />
              </td>
            </tr>
            <tr className="h-20 border-b border-b-2 border-b-gray-100">
              <td>Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[6rem]">Pudy</td>
              <td>Pudy</td>
              <td className="max-w-[4rem]">
                <Button
                  children="Konfirmasi"
                  type="outlined"
                  className="rounded-xl py-2 w-32"
                />
                <Button
                  children="Revisi"
                  type="primary"
                  className="rounded-xl py-2 w-32 bg-red-500 ml-1"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Konfirmasi;
