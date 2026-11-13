import React, { useEffect, useState } from "react";
import { correctAnswer } from "../../database/cpnsvip1/correctAnswer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AD_SCRIPT_ID = "native-banner-script";
const AD_SCRIPT_ID2 = "native-banner-script";

const Fraction = ({ numerator, denominator }) => {
  return (
    <span className="inline-flex min-w-10 flex-col items-center justify-center font-serif text-xl leading-none">
      <span className="px-1 pb-1">{numerator}</span>
      <span className="w-full border-t border-gray-800"></span>
      <span className="px-1 pt-1">{denominator}</span>
    </span>
  );
};

const ResultCpnsVip2 = () => {
  const [userName, setUserName] = useState("");
  const [quizAnswer, setQuizAnswer] = useState([]);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();

  //ambil username dari localstorage
  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name) {
      setUserName(name);
    }
  }, []);

  //ambil quizAnswer dari localstorage
  useEffect(() => {
    const savedAnswer = localStorage.getItem("quizAnswers");

    if (savedAnswer) {
      setQuizAnswer(JSON.parse(savedAnswer));
    }
  }, []);

  //periksa skor
  useEffect(() => {
    let total = 0;

    correctAnswer.forEach((ans, index) => {
      if (quizAnswer[index] === ans) {
        total += 5;
      }
    });

    setScore(total);
  }, [quizAnswer]);

  //menghapu  quizTimer, username, dan quizAnswer dari localstorage
  function OnReturn() {
    // hapus data dari localStorage
    localStorage.removeItem("quizTimer");
    localStorage.removeItem("username");
    localStorage.removeItem("quizAnswers");

    // redirect
    navigate("/cpns+vip");
  }

  //iklan
  useEffect(() => {
    const firstId = "native-banner-script";
    const secondId = "banner-script";

    if (!document.getElementById(firstId)) {
      const firstScript = document.createElement("script");
      firstScript.id = firstId;
      firstScript.async = true;
      firstScript.dataset.cfasync = "false";
      firstScript.src =
        "https://bauval.org/21/3e6a8b566d88898a7b592eb0a7c4242a";

      document.body.appendChild(firstScript);
    }

    if (!document.getElementById(secondId)) {
      // Konfigurasi iklan kedua sebelum script eksternal
      window.atOptions = {
        key: "bb09e520a6a01af54f3d191c766c0794",
        format: "iframe",
        height: 300,
        width: 400,
        params: {},
      };

      const secondScript = document.createElement("script");
      secondScript.id = secondId;
      secondScript.async = true;
      secondScript.dataset.cfasync = "false";
      secondScript.src =
        "https://bauval.org/21/37022fdab199af4b334488eeae4d8fac";

      document.body.appendChild(secondScript);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Quiz Application
      </h1>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="w-full max-w-4xl overflow-x-auto pt-5">
          <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
            <thead className="bg-gray-200">
              <tr className="text-left text-gray-700 font-semibold">
                <th className="px-4 py-3">Name</th>

                <th className="px-4 py-3">Nilai</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2">{userName}</td>
                <td className="px-4 py-2">{score}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pt-5">
          <p className="text-xl md:text-3xl text-black mt-20">
            Selamat <span className="font-bold text-blue-700">{userName} </span>{" "}
            hasil nilai SKD kamu adalah{" "}
            <span className="font-bold text-blue-700">{score}</span>.
          </p>
        </div>
        {/* Home Button */}
        <div className="pt-10">
          <button
            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            onClick={OnReturn}
          >
            Return CPNS
          </button>
        </div>
      </div>

      {/* pembahasan */}
      <div className="w-full pt-20 ">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          Pembahasan
        </h1>
        <div className="w-full pt-5 flex flex-col gap-4 items-center justify-center">
          {/* Soal No. 1 */}
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 01
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Hitung hasil operasi berikut!
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-5 text-lg font-bold text-gray-800 md:text-xl">
                2.026² - 2.020² = ...
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {["24.276", "42.462", "64.386", "82.684"].map(
                  (answer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="font-medium text-gray-700">
                        {answer}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-blue-50/50 p-5 md:p-8">
              <div className="mb-5 flex items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">
                  A. 24.276
                </span>
              </div>

              <h4 className="mb-3 text-base font-bold text-gray-800">
                Pembahasan
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Gunakan rumus selisih kuadrat untuk mempermudah perhitungan.
              </p>

              {/* Rumus */}
              <div className="mb-5 rounded-xl border border-blue-100 bg-white p-4 text-center">
                <p className="text-sm text-gray-500">Rumus selisih kuadrat</p>
                <p className="mt-2 text-lg font-bold text-blue-700">
                  a² - b² = (a - b) × (a + b)
                </p>
              </div>

              <p className="mb-2 text-sm font-semibold text-gray-700">
                Diketahui:
              </p>

              <ul className="mb-4 space-y-1 pl-5 text-sm text-gray-600">
                <li>a = 2.026</li>
                <li>b = 2.020</li>
              </ul>

              <p className="mb-2 text-sm font-semibold text-gray-700">
                Penyelesaian:
              </p>

              <div className="space-y-2 rounded-xl bg-white p-4 text-center text-sm font-medium text-gray-700">
                <p>2.026² - 2.020²</p>
                <p>= (2.026 - 2.020) × (2.026 + 2.020)</p>
                <p>= 6 × 4.046</p>
                <p className="border-t border-gray-100 pt-3 text-lg font-bold text-green-600">
                  = 24.276
                </p>
              </div>
            </div>
          </div>

          {/* Soal No. 2 */}
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 02
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Hitung hasil operasi berikut!
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-5 text-lg font-bold text-gray-800 md:text-xl">
                3/4 + 63/5 × 7 + 2 = ...
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {["88,50", "89,95", "90,55", "90,95"].map((answer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-medium text-gray-700">{answer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-blue-50/50 p-5 md:p-8">
              {/* Jawaban */}
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">
                  D. 90,95
                </span>
              </div>

              <h4 className="mb-3 text-base font-bold text-gray-800">
                Pembahasan
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Gunakan aturan urutan operasi matematika. Perkalian dan
                pembagian dikerjakan terlebih dahulu sebelum penjumlahan dan
                pengurangan.
              </p>

              {/* Tahap 1 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-2 text-sm font-bold text-blue-700">
                  Langkah 1: Kerjakan perkalian
                </p>

                <div className="space-y-2 text-center text-sm font-medium text-gray-700">
                  <p>63/5 × 7</p>
                  <p>= 441/5</p>
                  <p className="text-blue-700">= 88,2</p>
                </div>
              </div>

              {/* Tahap 2 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-2 text-sm font-bold text-blue-700">
                  Langkah 2: Ubah pecahan menjadi desimal
                </p>

                <div className="space-y-2 text-center text-sm font-medium text-gray-700">
                  <p>3/4 = 3 ÷ 4</p>
                  <p className="text-blue-700">= 0,75</p>
                </div>
              </div>

              {/* Tahap 3 */}
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 3: Jumlahkan seluruh hasil
                </p>

                <div className="space-y-2 text-center text-sm font-medium text-gray-700">
                  <p>0,75 + 88,2 + 2</p>
                  <p>= 90,95</p>

                  <p className="border-t border-gray-100 pt-3 text-lg font-bold text-green-600">
                    Hasil = 90,95
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Soal No. 3 */}
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 03
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Tentukan angka yang tepat untuk melengkapi pola bilangan
                berikut!
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-5 text-lg font-bold text-gray-800 md:text-xl">
                5, 15, ..., -5, -35, -25, -55
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {["-30", "-15", "-3", "0"].map((answer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-medium text-gray-700">{answer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-blue-50/50 p-5 md:p-8">
              {/* Jawaban */}
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">B. -15</span>
              </div>

              <h4 className="mb-3 text-base font-bold text-gray-800">
                Pembahasan
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Perhatikan selisih antara setiap angka. Pola bilangan
                menggunakan dua operasi secara bergantian, yaitu penjumlahan 10
                dan pengurangan 30.
              </p>

              {/* Pola Operasi */}
              <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="mb-2 text-sm font-bold text-blue-700">
                    Pola pertama
                  </p>
                  <p className="text-center text-lg font-bold text-gray-700">
                    +10
                  </p>
                  <p className="mt-1 text-center text-sm text-gray-500">
                    Penjumlahan 10
                  </p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-white p-4">
                  <p className="mb-2 text-sm font-bold text-blue-700">
                    Pola kedua
                  </p>
                  <p className="text-center text-lg font-bold text-gray-700">
                    -30
                  </p>
                  <p className="mt-1 text-center text-sm text-gray-500">
                    Pengurangan 30
                  </p>
                </div>
              </div>

              {/* Tahapan Perhitungan */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 1: Tentukan angka yang hilang
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between gap-3">
                    <span>5 + 10</span>
                    <span className="font-bold">= 15</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>15 - 30</span>
                    <span className="font-bold text-green-600">= -15</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>-15 + 10</span>
                    <span className="font-bold">= -5</span>
                  </div>
                </div>
              </div>

              {/* Langkah 2 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 2: Periksa kelanjutan pola
                </p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>-5 - 30 = -35</p>
                  <p>-35 + 10 = -25</p>
                  <p>-25 - 30 = -55</p>
                </div>
              </div>

              {/* Hasil Akhir */}
              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Hasil akhir
                </p>

                <p className="text-center text-sm font-medium leading-loose text-gray-700">
                  5, 15, <span className="font-bold text-green-600">-15</span>,
                  -5, -35, -25, -55
                </p>

                <p className="mt-3 border-t border-gray-100 pt-3 text-center text-lg font-bold text-green-600">
                  Jawaban = -15
                </p>
              </div>
            </div>
          </div>

          {/* Soal No. 4 */}
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 04
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Perbandingan Kuantitas X dan Y
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-5 text-sm leading-relaxed text-gray-700 md:text-base">
                Suatu proyek dapat diselesaikan oleh 40 orang dalam waktu 30
                hari. Setelah 12 hari bekerja, 25% pekerjaan seluruh proyek
                ternyata harus diulang sehingga total beban pekerjaan bertambah.
                Pada saat yang sama, jumlah pekerja dikurangi menjadi 32 orang.
                <br />
                <br />
                Nilai X = 40 dan Y = banyak hari total yang diperlukan sejak
                awal hingga proyek selesai. Manakah hubungan yang benar antara
                kuantitas X dan Y berdasarkan informasi tersebut?
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  "X = Y",
                  "X > Y",
                  "X < Y",
                  "Hubungan X dan Y tidak dapat ditentukan",
                ].map((answer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {answer}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-blue-50/50 p-5 md:p-8">
              {/* Jawaban */}
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">
                  C. X &lt; Y
                </span>
              </div>

              <h4 className="mb-3 text-base font-bold text-gray-800">
                Pembahasan
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Untuk menyelesaikan soal ini, kita perlu menghitung total beban
                pekerjaan, pekerjaan yang sudah diselesaikan, serta sisa
                pekerjaan setelah terjadi pengulangan.
              </p>

              {/* Langkah 1 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 1: Hitung total pekerjaan awal
                </p>

                <p className="mb-3 text-sm text-gray-600">Diketahui:</p>

                <ul className="mb-4 space-y-1 pl-5 text-sm text-gray-700">
                  <li>Jumlah pekerja = 40 orang</li>
                  <li>Waktu pengerjaan = 30 hari</li>
                </ul>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Total pekerjaan awal
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    40 × 30 = 1.200
                  </p>
                  <p className="mt-1 text-xs text-gray-500">orang-hari</p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Jadi, total beban pekerjaan awal adalah{" "}
                  <strong className="text-gray-800">1.200 orang-hari.</strong>
                </p>
              </div>

              {/* Langkah 2 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 2: Hitung pekerjaan yang sudah diselesaikan
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Selama 12 hari, pekerjaan yang telah diselesaikan oleh 40
                  pekerja adalah:
                </p>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Pekerjaan selesai
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    40 × 12 = 480
                  </p>
                  <p className="mt-1 text-xs text-gray-500">orang-hari</p>
                </div>

                <p className="mt-3 text-sm text-gray-600">
                  Jadi, pekerjaan yang sudah diselesaikan adalah{" "}
                  <strong className="text-gray-800">480 orang-hari.</strong>
                </p>
              </div>

              {/* Langkah 3 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 3: Hitung tambahan pekerjaan yang harus diulang
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Sebanyak 25% dari total pekerjaan awal harus diulang.
                </p>

                <div className="space-y-2 rounded-lg bg-gray-50 p-4 text-center text-sm font-medium text-gray-700">
                  <p>25% × 1.200</p>
                  <p>= 25/100 × 1.200</p>
                  <p className="font-bold text-blue-700">= 300 orang-hari</p>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Dengan demikian, total beban pekerjaan bertambah sebanyak 300
                  orang-hari.
                </p>
              </div>

              {/* Langkah 4 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 4: Hitung sisa pekerjaan
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Total pekerjaan baru setelah ditambah pekerjaan yang harus
                  diulang:
                </p>

                <div className="mb-3 rounded-lg bg-gray-50 p-4 text-center text-sm font-medium text-gray-700">
                  <p>1.200 + 300 = 1.500 orang-hari</p>
                </div>

                <p className="mb-2 text-sm text-gray-600">
                  Kurangi dengan pekerjaan yang sudah diselesaikan:
                </p>

                <div className="rounded-lg bg-gray-50 p-4 text-center text-sm font-medium text-gray-700">
                  <p>1.500 - 480</p>
                  <p className="mt-2 text-lg font-bold text-blue-700">
                    = 1.020 orang-hari
                  </p>
                </div>
              </div>

              {/* Langkah 5 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 5: Hitung total waktu pengerjaan (Y)
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Setelah 12 hari bekerja, jumlah pekerja dikurangi menjadi 32
                  orang.
                </p>

                <div className="space-y-2 rounded-lg bg-gray-50 p-4 text-center text-sm font-medium text-gray-700">
                  <p>Sisa pekerjaan ÷ jumlah pekerja</p>
                  <p>= 1.020 ÷ 32</p>
                  <p className="font-bold text-blue-700">= 31,875 hari</p>
                </div>

                <p className="mb-2 mt-4 text-sm text-gray-600">
                  Total waktu sejak awal hingga proyek selesai:
                </p>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="text-sm text-gray-700">Y = 12 + 31,875</p>
                  <p className="mt-2 text-xl font-bold text-green-600">
                    Y = 43,875 hari
                  </p>
                </div>
              </div>

              {/* Kesimpulan */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="mb-3 text-sm font-bold text-green-800">
                  Kesimpulan: Bandingkan X dan Y
                </p>

                <div className="space-y-2 text-center text-sm text-gray-700">
                  <p>X = 40</p>
                  <p>Y = 43,875</p>
                  <p className="border-t border-green-200 pt-3 text-xl font-bold text-green-700">
                    X &lt; Y
                  </p>
                </div>

                <p className="mt-3 text-center text-sm font-medium text-green-800">
                  Jadi, jawaban yang benar adalah C. X &lt; Y.
                </p>
              </div>
            </div>
          </div>

          {/* Iklan 1 */}
          {/* Iklan atas tengah */}
          <aside className="w-full flex flex-col items-center justify-center mx-auto py-4">
            <div className="w-full text-center mb-2">
              <p className="text-xs text-gray-400 py-1">Iklan</p>
              <p className="text-sm text-gray-400">
                maaf ngiklan admin pingen beli cilok
              </p>
            </div>

            {/* Iklan pertama native banner */}
            <div className="w-full flex justify-center items-center">
              <div
                id="container-3e6a8b566d88898a7b592eb0a7c4242a"
                className="w-full max-w-[728px] min-h-[100px] flex justify-center items-center"
              />
            </div>
          </aside>

          {/* Soal No. 5 */}

          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 05
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Perbandingan Kuantitas X dan Y
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-4 text-base leading-relaxed text-gray-800">
                Nilai X = 2222/3333 dan Y = 444/666. Manakah hubungan yang benar
                antara kuantitas X dan Y berdasarkan informasi yang diberikan?
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "X = Y",
                  "X > Y",
                  "X < Y",
                  "Hubungan X dan Y tidak dapat ditentukan",
                ].map((answer, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-medium text-gray-700">{answer}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-white p-5 md:p-8">
              {/* Jawaban */}
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">
                  A. X = Y
                </span>
              </div>

              <h4 className="mb-6 text-lg font-bold text-gray-800">
                Pembahasan
              </h4>

              <div className="space-y-10 text-gray-800">
                {/* Langkah 1 */}
                <section>
                  <h5 className="mb-5 font-bold">1. Diketahui</h5>

                  <div className="flex flex-col items-end gap-8 pr-3 sm:pr-10">
                    <div className="flex items-center gap-3 font-serif text-xl">
                      <span className="italic">X =</span>
                      <Fraction numerator="2222" denominator="3333" />
                    </div>

                    <div className="flex items-center gap-3 font-serif text-xl">
                      <span className="italic">Y =</span>
                      <Fraction numerator="444" denominator="666" />
                    </div>
                  </div>
                </section>

                {/* Langkah 2 */}
                <section>
                  <h5 className="mb-3 font-bold">2. Sederhanakan nilai X</h5>

                  <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                    Bagi pembilang dan penyebut dengan 1111:
                  </p>

                  <div className="mb-8 flex justify-end pr-3 sm:pr-10">
                    <div className="flex items-center gap-3 font-serif text-xl">
                      <span className="italic">X =</span>

                      <Fraction
                        numerator="2222 ÷ 1111"
                        denominator="3333 ÷ 1111"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pr-3 sm:pr-10">
                    <div className="inline-flex items-center gap-3 border border-gray-800 px-2 py-2 font-serif text-xl">
                      <span className="italic">X =</span>
                      <Fraction numerator="2" denominator="3" />
                    </div>
                  </div>
                </section>

                {/* Langkah 3 */}
                <section>
                  <h5 className="mb-3 font-bold">3. Sederhanakan nilai Y</h5>

                  <p className="mb-6 text-sm leading-relaxed text-gray-700 md:text-base">
                    Bagi pembilang dan penyebut dengan 222:
                  </p>

                  <div className="mb-8 flex justify-end pr-3 sm:pr-10">
                    <div className="flex items-center gap-3 font-serif text-xl">
                      <span className="italic">Y =</span>

                      <Fraction numerator="444 ÷ 222" denominator="666 ÷ 222" />
                    </div>
                  </div>

                  <div className="flex justify-end pr-3 sm:pr-10">
                    <div className="inline-flex items-center gap-3 border border-gray-800 px-2 py-2 font-serif text-xl">
                      <span className="italic">Y =</span>
                      <Fraction numerator="2" denominator="3" />
                    </div>
                  </div>
                </section>

                {/* Langkah 4 */}
                <section>
                  <h5 className="mb-3 font-bold">
                    4. Bandingkan nilai X dan Y
                  </h5>

                  <p className="mb-5 text-sm leading-relaxed text-gray-700 md:text-base">
                    Setelah disederhanakan, diperoleh:
                  </p>

                  <div className="flex flex-col items-end gap-5 pr-3 sm:pr-10">
                    <div className="flex items-center gap-3 font-serif text-xl">
                      <span className="italic">X =</span>
                      <Fraction numerator="2" denominator="3" />
                    </div>

                    <div className="flex items-center gap-3 font-serif text-xl">
                      <span className="italic">Y =</span>
                      <Fraction numerator="2" denominator="3" />
                    </div>

                    <div className="rounded-lg border border-green-300 bg-green-50 px-5 py-3 text-center">
                      <p className="text-lg font-bold text-green-700">X = Y</p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Kesimpulan */}
              <div className="mt-10 rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="font-bold text-green-800">Kesimpulan</p>
                <p className="mt-2 text-sm leading-relaxed text-green-700">
                  Nilai X dan Y sama-sama menghasilkan 2/3. Dengan demikian,
                  hubungan yang benar adalah X = Y. Jawaban yang tepat adalah A.
                </p>
              </div>
            </div>
          </div>

          {/* Soal No. 6 */}
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 06
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Tentukan angka yang tepat untuk melengkapi pola bilangan
                berikut!
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-5 text-lg font-bold text-gray-800 md:text-xl">
                224658, 224672, 224688, 224706, 224726, ...
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
                {["224740", "224736", "224746", "224748"].map(
                  (answer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="font-medium text-gray-700">
                        {answer}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-blue-50/50 p-5 md:p-8">
              {/* Jawaban */}
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">
                  D. 224748
                </span>
              </div>

              <h4 className="mb-3 text-base font-bold text-gray-800">
                Pembahasan
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Untuk menemukan angka berikutnya, kita perlu menghitung selisih
                antara setiap angka. Perhatikan perubahan selisih yang membentuk
                pola bertambah 2 secara berurutan.
              </p>

              {/* Langkah 1 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 1: Hitung selisih setiap angka
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between gap-3">
                    <span>224672 - 224658</span>
                    <span className="font-bold">= 14</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>224688 - 224672</span>
                    <span className="font-bold">= 16</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>224706 - 224688</span>
                    <span className="font-bold">= 18</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>224726 - 224706</span>
                    <span className="font-bold">= 20</span>
                  </div>
                </div>
              </div>

              {/* Langkah 2 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 2: Temukan pola selisih
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Perhatikan urutan selisih berikut:
                </p>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="text-lg font-bold tracking-wider text-gray-800">
                    14, 16, 18, 20, ...
                  </p>

                  <p className="mt-3 text-sm text-blue-700">
                    Setiap selisih bertambah 2.
                  </p>
                </div>

                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>14 + 2 = 16</p>
                  <p>16 + 2 = 18</p>
                  <p>18 + 2 = 20</p>
                  <p className="font-bold text-green-600">20 + 2 = 22</p>
                </div>
              </div>

              {/* Langkah 3 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 3: Tentukan angka berikutnya
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Angka terakhir adalah 224726. Tambahkan dengan selisih
                  berikutnya, yaitu 22.
                </p>

                <div className="rounded-lg bg-gray-50 p-4 text-center">
                  <p className="text-sm text-gray-700">224726 + 22</p>

                  <p className="mt-2 text-xl font-bold text-green-600">
                    = 224748
                  </p>
                </div>
              </div>

              {/* Hasil Akhir */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="mb-3 text-sm font-bold text-green-800">
                  Hasil Akhir
                </p>

                <p className="text-center text-sm font-medium leading-loose text-gray-700">
                  224658, 224672, 224688, 224706, 224726,
                  <span className="font-bold text-green-600"> 224748</span>
                </p>

                <p className="mt-3 border-t border-green-200 pt-3 text-center text-lg font-bold text-green-700">
                  Jawaban = 224748
                </p>
              </div>
            </div>
          </div>

          {/* Soal No. 7 */}
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header Soal */}
            <div className="border-b border-gray-100 bg-gray-50 px-5 py-4 md:px-8">
              <span className="text-sm font-semibold text-blue-600">
                SOAL NO. 07
              </span>
              <h3 className="mt-2 text-lg font-bold text-gray-800 md:text-xl">
                Tentukan angka yang tepat untuk melengkapi pola bilangan
                berikut!
              </h3>
            </div>

            {/* Pertanyaan */}
            <div className="p-5 md:p-8">
              <p className="mb-5 text-lg font-bold text-gray-800 md:text-xl">
                128, 64, ..., 27, 512, ..., 1024, 1
              </p>

              {/* Pilihan Jawaban */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
                {["216, 9", "144, 8", "256, 8", "54, 9"].map(
                  (answer, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition-colors hover:border-blue-400 hover:bg-blue-50"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="font-medium text-gray-700">
                        {answer}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Pembahasan */}
            <div className="border-t border-gray-200 bg-blue-50/50 p-5 md:p-8">
              {/* Jawaban */}
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                  Jawaban Benar
                </span>
                <span className="text-sm font-bold text-gray-800">
                  C. 256, 8
                </span>
              </div>

              <h4 className="mb-3 text-base font-bold text-gray-800">
                Pembahasan
              </h4>

              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Perhatikan deretan angka tersebut. Pola bilangan terdiri dari
                dua kelompok yang berselang-seling, yaitu pola perkalian 2 dan
                pola bilangan pangkat tiga.
              </p>

              {/* Langkah 1 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 1: Pisahkan pola bilangan
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Pisahkan angka berdasarkan posisi ganjil dan genap.
                </p>

                <div className="space-y-3">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <p className="mb-2 text-sm font-bold text-blue-700">
                      Posisi ganjil
                    </p>
                    <p className="text-center text-base font-bold tracking-wide text-gray-800">
                      128, ..., 512, 1024
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="mb-2 text-sm font-bold text-gray-700">
                      Posisi genap
                    </p>
                    <p className="text-center text-base font-bold tracking-wide text-gray-800">
                      64, 27, ..., 1
                    </p>
                  </div>
                </div>
              </div>

              {/* Langkah 2 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 2: Temukan pola posisi ganjil
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Angka pada posisi ganjil menggunakan operasi perkalian 2.
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between gap-3">
                    <span>128 × 2</span>
                    <span className="font-bold">= 256</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>256 × 2</span>
                    <span className="font-bold">= 512</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>512 × 2</span>
                    <span className="font-bold">= 1024</span>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-sm font-bold text-blue-700">
                    Pola: 128, 256, 512, 1024
                  </p>
                </div>
              </div>

              {/* Langkah 3 */}
              <div className="mb-4 rounded-xl border border-blue-100 bg-white p-4">
                <p className="mb-3 text-sm font-bold text-blue-700">
                  Langkah 3: Temukan pola posisi genap
                </p>

                <p className="mb-3 text-sm text-gray-600">
                  Angka pada posisi genap merupakan bilangan pangkat tiga dengan
                  basis yang menurun.
                </p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-center justify-between gap-3">
                    <span>4³</span>
                    <span className="font-bold">= 64</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>3³</span>
                    <span className="font-bold">= 27</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>2³</span>
                    <span className="font-bold text-green-600">= 8</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span>1³</span>
                    <span className="font-bold text-green-600">= 1</span>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-gray-50 p-3 text-center">
                  <p className="text-sm font-bold text-blue-700">
                    Pola: 64, 27, 8, 1
                  </p>
                </div>
              </div>

              {/* Hasil Akhir */}
              <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                <p className="mb-3 text-sm font-bold text-green-800">
                  Hasil Akhir
                </p>

                <p className="text-center text-sm font-medium leading-loose text-gray-700">
                  128, 64, <span className="font-bold text-green-600">256</span>
                  , 27, 512, <span className="font-bold text-green-600">8</span>
                  , 1024, 1
                </p>

                <p className="mt-3 border-t border-green-200 pt-3 text-center text-lg font-bold text-green-700">
                  Jawaban = 256, 8
                </p>
              </div>
            </div>
          </div>

          {/* Iklan bawah tengah */}
          <aside className="w-full flex flex-col items-center justify-center mx-auto py-4">
            <div className="w-full text-center mb-2">
              <p className="text-xs text-gray-400 py-1">Iklan</p>
              <p className="text-sm text-gray-400">
                maaf ngiklan admin pingen beli cilok
              </p>
            </div>

            {/* Iklan pertama native banner */}
            <div className="w-full flex justify-center items-center">
              <div
                id="container-37022fdab199af4b334488eeae4d8fac"
                className="w-full max-w-[728px] min-h-[100px] flex justify-center items-center"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ResultCpnsVip2;
