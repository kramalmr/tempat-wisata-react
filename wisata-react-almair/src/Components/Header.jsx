import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="relative">
      <motion.img
        src="/hero.webp"
        className="object-cover h-screen w-[100%] blur-sm object-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/4 lg:gap-10">
        <motion.img
          src="/logo.png"
          className="w-1/2 lg:w-2/6"
          alt=""
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        />
        <div className="w-full lg:w-1/2">
          <motion.h1
            className="hidden lg:block text-2xl font-bold text-white font-epilogue tracking-tight text-start"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          >
            Semenjak 1992,
          </motion.h1>
          <motion.h1
            className="px-5 mt-8 mb-3 lg:m-0 lg:p-0 text-4xl lg:text-6xl font-bold text-white font-epilogue tracking-tight text-center lg:text-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease: "easeInOut" }}
          >
            Taman Nasional Wisata Ujung Kulon
          </motion.h1>
          <motion.button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="cursor-pointer hidden lg:block font-epilogue border-[1px] border-gray-200 px-8 py-3 text-white font-light mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
            whileHover={{
              scale: 1.2,
              color: "#333",
              rotate: 2,
              backgroundColor: "#f3f3f3",
              transition: {
                duration: 0.2,
                ease: "easeOut",
              },
            }}
          >
            Eksplor
          </motion.button>
        </div>
        <motion.button
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="lg:hidden font-epilogue border-[1px] border-gray-200 px-8 py-3 text-white font-light mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
        >
          Eksplor
        </motion.button>
      </div>
    </div>
  );
}

