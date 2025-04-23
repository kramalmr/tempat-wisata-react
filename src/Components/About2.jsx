import { motion } from "framer-motion";

export default function About2() {
  return (
    <div>
      {/* Title */}
      <motion.h1
        className="text-start w-full text-4xl lg:text-6xl font-bold text-black font-epilogue mb-4 px-10 mt-40"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Flora dan Fauna
      </motion.h1>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row font-epilogue px-4 lg:px-10">
        {/* Fauna Section */}
        <motion.div
          className="flex flex-col gap-5 bg-amber-100 p-10 lg:p-12 lg:w-1/2 bg-[url(/about/fauna.webp)] bg-cover border-8 border-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-7 w-full">
            <h1 className="text-2xl lg:text-4xl font-semibold lg:w-5/12 text-white">
              Saat ini, 608 jenis Menempati taman Nasional Ujung Kulon
            </h1>
            <p className="text-gray-700 lg:w-7/12 bg-white p-4 h-fit lg:text-lg">
              Taman Nasional Ujung Kulon memiliki julukan sebagai "suaka badak
              Jawa" atau "rumah terakhir badak Jawa" karena merupakan habitat
              alami terakhir bagi spesies badak bercula satu ini di Indonesia.
              🦏🦏🦏
            </p>
          </div>
        </motion.div>

        {/* Flora Section */}
        <motion.div
          className="flex flex-col gap-5 bg-blue-300 p-10 lg:p-12 lg:w-1/2 bg-[url(/about/flora.jpg)] bg-cover border-8 border-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex flex-col gap-3 lg:gap-7 lg:flex-row">
            <h1 className="text-2xl lg:text-4xl font-semibold lg:w-5/12 text-white">
              Dan Sekitar 700 jenis Flora yang dapat ditemukan disini.
            </h1>
            <p className="text-gray-700 lg:w-7/12 bg-white p-4 h-fit lg:text-lg">
              Beberapa tumbuhan yang terkenal di kawasan ini antara lain
              Rafflesia arnoldii (bunga bangkai), meranti, jelutung, nyatoh, dan
              berbagai jenis anggrek. Taman Nasional ini memiliki sekitar 700
              jenis tumbuhan yang terlindungi, dengan 57 di antaranya termasuk
              jenis langka.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
