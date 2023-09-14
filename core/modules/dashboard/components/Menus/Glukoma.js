import React, { useEffect, useState } from "react";
import { BsFillBellFill, BsSearch } from "react-icons/bs";
import { Button } from "../../../common/button";
import Image from "next/image";
import Swal from "sweetalert2";
import axios from "axios";

const Konfirmasi = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64Image, setBase64Image] = useState("");
  const [fileSizeError, setFileSizeError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [diagnosa, setDiagnosa] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size <= 500 * 1024) {
        // 500KB limit (500 * 1024 bytes)
        setSelectedFile(file);
        setFileSizeError(null);
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target.result;
          setBase64Image(base64String);
        };
        reader.readAsDataURL(file);
      } else {
        setSelectedFile(null);
        setBase64Image("");
        Swal.fire("Gagal", "File tidak boleh lebih dari 500kb", "warning");
      }
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post("https://scanocular.online/api/pemeriksaan/cekmata/dr", {
        img: base64Image.split(",")[1],
      })
      .then((res) => {
        // console.log(res.data.diagnosa);
        setDiagnosa(
          res.data.diagnosa == "No_DR" ? "Mata Sehat" : "Teridentifikasi DR"
        );
        setLoading(false);
      })
      .catch((e) => {
        setDiagnosa("Mata tidak terdeteksi");

        setLoading(false);
      });
  };

  return (
    <>
      <h1 className="md:text-4xl text-xl font-semibold capitalize py-8 text-primary-text">
        Deteksi Funduscopy
      </h1>
      <div className="bg-white  py-12 px-8 rounded-xl shadow-sm overflow-x-auto overflow-y-auto max-h-[75vh] w-full">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <p className="text-gray-500 my-3">File yang diupload maksimal 500kb</p>
        {selectedFile && (
          <div className="mt-4">
            <p>
              Selected File: {selectedFile.name} ({selectedFile.size} bytes)
            </p>
            <img
              src={base64Image}
              alt="Selected Image"
              className="w-96 h-82"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}

        {diagnosa && (
          <p className="mt-5 text-lg font-semibold">Hasil : {diagnosa}</p>
        )}
        <Button
          type="primary"
          className="mt-10 rounded-xl shadow-xl w-96"
          onClick={() => handleSubmit()}
        >
          {loading ? "loading..." : "Submit"}
        </Button>
      </div>
    </>
  );
};

export default Konfirmasi;
