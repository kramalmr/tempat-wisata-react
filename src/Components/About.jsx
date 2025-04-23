import { motion } from 'framer-motion';

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center lg:items-start mt-18 px-6 lg:px-12 lg:gap-20"
    >
      <motion.div
        className="sec-1 lg:w-2/6"
        initial={{ opacity: 0, x: -100 }} // Start off-screen left
        whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to original position
        transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation
      >
        <h1 className="text-start w-full text-4xl lg:text-6xl font-bold text-black font-epilogue">
          Taman Nasional Ujung Kulon
        </h1>
        <motion.div
          className="py-5 font-epilogue text-gray-700 lg:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 0.5, delay: 0.2 }} // Initial delay for the parent container
        >
          <motion.h1
            className="py-2"
            initial={{ opacity: 0, y: 20 }} // Start below the normal position
            whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
            transition={{ duration: 0.6, delay: 0.4 }} // Sequential delay for this element
          >
            Ujung Kulon merupakan taman nasional tertua di Indonesia yang sudah
            diresmikan sebagai salah satu Warisan Dunia yang dilindungi oleh
            UNESCO pada tahun 1991.
          </motion.h1>

          <motion.h1
            className="py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }} // Sequential delay for this element
          >
            Terletak di Semenanjung Ujung Kulon, bagian paling barat di Pulau
            Jawa, Indonesia. Kawasan taman nasional ini pada mulanya meliputi
            wilayah Krakatau dan beberapa pulau kecil di sekitarnya seperti
            Pulau Handeuleum dan Pulau Peucang dan Pulau Panaitan.
          </motion.h1>

          <motion.h1
            className="py-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }} // Sequential delay for this element
          >
            Kawasan taman nasional ini mempunyai luas sekitar 122.956 Ha; (443
            km² di antaranya adalah laut), yang dimulai dari tanah genting
            Semenanjung Ujung Kulon sampai dengan Samudra Hindia.
          </motion.h1>

          <img
            src="/about/map.png"
            className="hidden lg:block w-80 h-80"
            alt="Map of Ujung Kulon"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="sec-2 lg:w-4/6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 1, ease: "easeInOut" }} // Smooth fade-in transition
      >
        <motion.img
          src="/about/about1.jpg"
          alt=""
          className="mb-4 object-cover w-full h-64 lg:h-[420px]"
          initial={{ opacity: 0, y: 100 }} // Start from below
          whileInView={{ opacity: 1, y: 0 }} // Slide up and fade in
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <motion.img
          src="/about/about2.jpg"
          alt=""
          className="mb-4 object-cover w-full h-64 lg:h-[420px]"
          initial={{ opacity: 0, y: 100 }} // Start from below
          whileInView={{ opacity: 1, y: 0 }} // Slide up and fade in
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.img
          src="/about/about3.jpg"
          alt=""
          className="mb-4 object-cover w-full h-64 lg:h-[420px]"
          initial={{ opacity: 0, y: 100 }} // Start from below
          whileInView={{ opacity: 1, y: 0 }} // Slide up and fade in
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
