import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { BsBoxArrowLeft } from "react-icons/bs";
const Confirm = () => {
  const [data, setData] = useState(null);
  const router = useRouter();
  const activeRoute = router.query.index;
  useEffect(() => {
    axios
      .get(
        `https://scanocular.online/api/pemeriksaan/cekmata/screening/${activeRoute}`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((e) => {});
  }, [activeRoute]);

  if (data == null) return <></>;
  return (
    <>
      <div className="w-screen min-h-screen bg-gray-100 flex ">
        <div className="w-1/2 h-[90vh] p-6 rounded-xl shadow-xl overflow-y-auto bg-white m-auto">
          <Link
            href="/dashboard/konfirmasiglukoma"
            className="text-blue-500 font-semibold flex items-center gap-4 text-lg"
          >
            <BsBoxArrowLeft /> Kembali
          </Link>
          {data.map((e, i) => {
            return (
              <div className="my-5">
                <p>
                  {i.type_penyakit == "glukoma" ? glukomaQ[i] : diabetesQ[i]}
                </p>
                <input
                  type="radio"
                  id={"html" + i}
                  name={"html" + i}
                  value="HTML"
                  checked={e.value == 1 ? true : false}
                  disabled
                  className="my-2"
                />
                <label for="html" className="mr-5 ml-1">
                  Ya
                </label>
                <input
                  type="radio"
                  id={"html" + i}
                  name={"html" + i}
                  value="HTML"
                  checked={e.value == 2 ? true : false}
                  disabled
                />
                <label for="html" className="ml-1">
                  Tidak
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Confirm;

const glukomaQ = [
  "Apakah Anda memiliki riwayat penyakit mata atau keluhan penglihatan sebelumnya?",
  "Apakah Anda memiliki riwayat penyakit kronis seperti diabetes, hipertensi, atau penyakit kardiovaskular?",
  "Apakah ada riwayat keluarga dengan penyakit glaukoma atau masalah mata lainnya?",
  "Apakah ada penurunan penglihatan dalam 6 bulan terakhir?",
  "Apakah ada riwayat mata merah berulang?",
  "Apakah Anda mengalami perubahan penglihatan seperti penglihatan kabur atau hilang pada waktu tertentu?",
  "Apakah Anda merasakan nyeri mata, perasaan tertekan di mata, atau sakit kepala yang berhubungan dengan mata?",
  "Apakah Anda pernah melihat cahaya berwarna-warni atau lingkaran cahaya berkeliling di sekitar lampu?",
  "Apakah Anda pernah menjalani pemeriksaan mata atau tes glaukoma sebelumnya?",
  "Apakah Anda menggunakan kacamata atau lensa kontak?",
  "Apakah Anda menggunakan obat tetes mata atau obat mata lainnya secara rutin?",
  "Apakah Anda menggunakan obat-obatan tertentu, terutama kortikosteroid (steroid) dalam bentuk apa pun?",
  "Apakah Anda mengonsumsi suplemen atau herbal tertentu secara rutin?",
  "Apakah Anda pernah mengukur tekanan mata Anda? Jika ya, apa hasilnya?",
  "Apakah Anda pernah menjalani operasi mata atau cedera mata sebelumnya?",
  "Apakah Anda memiliki pekerjaan atau hobi yang memerlukan konsentrasi visual yang tinggi atau paparan sinar matahari berlebih?",
  "Apakah Anda merokok?",
  "Apakah Anda mengalami keluhan lain seperti pandangan berbayang atau penurunan penglihatan saat melihat di samping atau ke bawah?",
  "Jika pasien perempuan, apakah Anda sedang hamil atau merencanakan kehamilan? Beberapa kondisi medis dapat memengaruhi pengobatan selama kehamilan.",
];

const diabetesQ = [
  "Sejak kapan Anda didiagnosis menderita diabetes?",
  "Apakah Anda menderita diabetes tipe 1 atau tipe 2?",
  "Bagaimana kontrol gula darah Anda? Apakah Anda mengukur gula darah secara rutin?",
  "Apakah Anda mengonsumsi obat-obatan oral atau insulin untuk mengendalikan diabetes?",
  "Apakah Anda mengikuti rencana pengobatan yang direkomendasikan oleh dokter untuk mengontrol diabetes Anda?",
  "Apakah Anda memiliki riwayat penggunaan obat-obatan atau terapi lain untuk diabetes, seperti injeksi insulin?",
  "Apakah Anda mengalami perubahan penglihatan seperti penglihatan kabur, penglihatan ganda, atau perubahan dalam kemampuan membaca?",
  'Apakah Anda pernah melihat bintik-bintik mengambang atau "lampu kilat" di pandangan Anda?',
  "Apakah Anda merasakan nyeri atau ketidaknyamanan di mata?",
  "Apakah Anda pernah menjalani pemeriksaan mata terakhir? Jika ya, apa hasilnya?",
  "Apakah Anda pernah diberitahu oleh dokter bahwa Anda memiliki masalah mata terkait diabetes?",
  "Apakah Anda merokok? Jika ya, sejak kapan dan seberapa sering?",
  "Apakah Anda mengonsumsi minuman beralkohol? Jika ya, dalam jumlah berapa?",
  "Apakah Anda menggunakan obat atau suplemen tertentu dalam rangka mengelola diabetes atau masalah mata?",
  "Apakah Anda merokok?",
  "Apakah Anda menggunakan kacamata atau lensa kontak untuk membantu penglihatan Anda?",
  "Bagaimana pola makan Anda? Apakah Anda mengonsumsi makanan yang sehat untuk diabetes?",
  "Apakah Anda rutin berolahraga?",
  "Apakah ada anggota keluarga yang memiliki riwayat diabetes atau masalah mata?",
  "Jika pasien perempuan dan berencana untuk hamil atau sedang hamil, apakah Anda telah berbicara dengan dokter Anda tentang pengelolaan diabetes selama kehamilan? (Isikan tidak jika tidak mengalami kehamilan)",
];
