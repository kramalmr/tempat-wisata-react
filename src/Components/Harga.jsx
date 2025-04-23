import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "A. Tiket Masuk",
    items: [
      {
        desc: "Perorangan - Wisatawan Nusantara (hari kerja)",
        price: "Rp. 20,000/orang/hari",
      },
      {
        desc: "Wisatawan Nusantara (hari libur)",
        price: "Rp. 30,000/orang/hari",
      },
      { desc: "Wisatawan Mancanegara", price: "Rp. 200,000/orang/hari" },
      {
        desc: "Rombongan Pelajar/Mahasiswa (hari kerja, min 5 orang)",
        price: "Rp. 10,000/orang/hari",
      },
      {
        desc: "Rombongan Pelajar/Mahasiswa (hari libur, min 5 orang)",
        price: "Rp. 15,000/orang/hari",
      },
    ],
  },
  {
    title: "B. Kendaraan/Alat Transportasi",
    items: [
      { desc: "Kapal Motor 40 s/d 100 PK", price: "Rp. 100,000/unit/hari" },
      { desc: "Kapal Motor 101 s/d 500 PK", price: "Rp. 150,000/unit/hari" },
      { desc: "Kapal Motor di atas 500 PK", price: "Rp. 200,000/unit/hari" },
    ],
  },
  {
    title: "C. Pungutan Kegiatan Wisata Alam",
    items: [
      { desc: "Berkemah", price: "Rp. 5,000/orang/hari" },
      { desc: "Mendaki Gunung", price: "Rp. 10,000/orang/kegiatan" },
      { desc: "Penelusuran Gua", price: "Rp. 10,000/orang/kegiatan" },
      { desc: "Memancing", price: "Rp. 5,000/orang/kegiatan" },
      { desc: "Menyelam", price: "Rp. 25,000/orang/hari" },
    ],
  },
  {
    title: "D. Pengambilan Gambar Komersial",
    items: [
      { desc: "Videografi (WNA)", price: "Rp. 20,000,000/paket/lokasi" },
      { desc: "Videografi (WNI)", price: "Rp. 10,000,000/paket/lokasi" },
      { desc: "Fotografi (WNA)", price: "Rp. 5,000,000/paket/lokasi" },
      { desc: "Fotografi (WNI)", price: "Rp. 2,500,000/paket/lokasi" },
      { desc: "Prewedding (WNA)", price: "Rp. 5,000,000/paket/lokasi" },
      { desc: "Prewedding (WNI)", price: "Rp. 2,500,000/paket/lokasi" },
    ],
  },
  {
    title: "E. Penggunaan atau Penerbangan Drone",
    items: [{ desc: "Drone", price: "Rp. 2,000,000/unit/hari" }],
  },
  {
    title: "F. Akses pada Sumber Daya Genetik Spesies Liar",
    items: [
      { desc: "Jenis Dilindungi (WNI)", price: "Rp. 50,000/persetujuan" },
      { desc: "Jenis Dilindungi (WNA)", price: "Rp. 500,000/persetujuan" },
      { desc: "Jenis Tidak Dilindungi (WNI)", price: "Rp. 50,000/persetujuan" },
    ],
  },
  {
    title: "G. Kegiatan Penelitian",
    items: [
      { desc: "WNI - Di bawah 1 bulan", price: "Rp. 100,000/orang" },
      { desc: "WNI - 1 s.d. 6 bulan", price: "Rp. 150,000/orang" },
      { desc: "WNI - Di atas 6 s.d. 12 bulan", price: "Rp. 200,000/orang" },
      { desc: "WNA - Di bawah 1 bulan", price: "Rp. 5,000,000/orang" },
      { desc: "WNA - 1 s.d. 6 bulan", price: "Rp. 7,500,000/orang" },
      { desc: "WNA - Di atas 6 s.d. 12 bulan", price: "Rp. 10,000,000/orang" },
    ],
  },
];

export default function TarifTable() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.h1
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Daftar Tarif
      </motion.h1>

      {data.map((section, index) => (
        <motion.div
          key={index}
          layout // Only this outer container needs layout
          className="mb-4 border rounded-lg overflow-hidden shadow"
        >
          <motion.button
            className="w-full text-left px-4 py-2 bg-blue-600 text-white font-semibold cursor-pointer hover:bg-blue-700"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            {section.title}
          </motion.button>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white"
              >
                <table className="min-w-full text-sm">
                  <tbody>
                    {section.items.map((item, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-2">{item.desc}</td>
                        <td className="p-2 text-right text-nowrap">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Link
          to="/"
          className="block mx-auto mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-2xl border-[1px] border-black text-center w-fit hover:bg-red-700 cursor-pointer"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
