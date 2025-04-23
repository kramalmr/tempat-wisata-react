import { motion } from "framer-motion";

export default function About3() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start mt-40 px-6 lg:px-12 lg:gap-20">
      {/* Title Section */}
      <div className="sec-1 lg:w-2/6">
        <motion.h1
          className="text-end w-full text-4xl lg:text-6xl font-bold text-black font-epilogue mb-10"
          initial={{ opacity: 0, y: 20 }} // Initial state
          whileInView={{ opacity: 1, y: 0 }} // Final state (when in view)
          transition={{ duration: 0.5 }} // Transition properties
        >
          Cagar Alam dan Obyek Wisata
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="sec-2 flex flex-col lg:flex-row lg:w-full gap-5 font-epilogue">
        {/* First Section (Pulau & Pantai) */}
        <motion.div
          className="relative w-full lg:w-1/3 h-96 lg:h-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }} // Adding a small delay
        >
          <img
            src="/about/pantai.jpeg"
            alt="Pulau & Pantai"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col text-white text-2xl font-bold p-10">
            Pulau & Pantai
            <span className="text-lg font-normal">
              <ol className="list-decimal mt-3">
                <li>Pulau Peucang</li>
                <li>Pulau Handeuleum</li>
                <li>Pulau Panaitan</li>
              </ol>
            </span>
          </div>
        </motion.div>

        {/* Second Section (Padang & Savana) */}
        <motion.div
          className="relative w-full lg:w-1/3 h-96 lg:h-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }} // Delay for this section
        >
          <img
            src="/about/padang.jpg"
            alt="Padang & Savana"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col text-white text-2xl font-bold p-10">
            Padang & Savana
            <span className="text-lg font-normal">
              <ol className="list-decimal mt-3">
                <li>Padang Cidaon</li>
                <li>Padang Cibunar</li>
                <li>Padang Cihujan</li>
              </ol>
            </span>
          </div>
        </motion.div>

        {/* Third Section (Air Panas & Curug) */}
        <motion.div
          className="relative w-full lg:w-1/3 h-96 lg:h-[320px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }} // Delay for this section
        >
          <img
            src="/about/curug.jpg"
            alt="Air Panas & Curug"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex flex-col text-white text-2xl font-bold p-10">
            Air Panas & Curug
            <span className="text-lg font-normal">
              <ol className="list-decimal mt-3">
                <li>Air Panas Cibiuk</li>
                <li>Air Panas Cimadur</li>
                <li>Curug Cimadur</li>
              </ol>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
