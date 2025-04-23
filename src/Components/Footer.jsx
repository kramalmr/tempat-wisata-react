import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-gray-100 mt-40">
      <div className="flex flex-col lg:flex-row h-full lg:h-[400px]">
        <div className="relative flex items-center justify-center px-10 bg-[url(/about/fauna.webp)] bg-cover h-full py-20 w-full lg:w-4/6">
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative z-10">
            <h1 className="text-start w-full text-4xl lg:text-6xl font-bold text-white font-epilogue mb-4">
              Tertarik untuk berkunjung?
            </h1>
            <h2 className="text-start text-white w-full lg:text-lg font-epilogue mb-5">
              Ayo jelajahi keindahan alam dan kehidupan liar di Taman Nasional
              Ujung Kulon, rumah bagi badak Jawa yang langka dan ekosistem yang
              menakjubkan. Nikmati petualangan mendaki, menjelajah pulau, dan
              menikmati pantai eksotis yang masih alami!
            </h2>
            <Link
              to="/harga"
              className="font-epilogue border-[1px] border-white px-8 py-3 text-white font-light transition duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              Lihat Tarif Masuk
            </Link>
          </div>
        </div>
        <iframe
          key="google-map"
          className="w-full lg:w-2/6 h-[400px] border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253575.1585345665!2d105.2695370377458!3d-6.756212454505242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42233395979ea1%3A0x8df3a34e43b4c872!2sTaman%20Nasional%20Ujung%20Kulon!5e0!3m2!1sid!2sid!4v1745216706498!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full py-10 px-10 flex flex-col lg:flex-row justify-between items-baseline lg:items-center">
        <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
          <h1 className="text-start w-full text-2xl lg:text-2xl font-bold text-black font-epilogue mb-4">
            Kontak Kami
          </h1>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/email.svg" className="w-5 h-5" alt="Email" />
            <p className="text-start text-gray-700 w-full lg:text-lg font-epilogue">
              balai_tnuk@menlhk.go.id
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/phone.svg" className="w-5 h-5" alt="Phone" />
            <p className="text-start text-gray-700 w-full lg:text-lg font-epilogue">
              +628111238884
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src="/icons/location.svg" className="w-5 h-5" alt="Location" />
            <p className="text-start text-gray-700 w-full lg:text-lg font-epilogue">
              l. Perintis Kemerdekaan No.51 Kec. Labuan, Kab. Pandeglang,
              Provinsi Banten. 42264, Indonesia.
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-start gap-5 w-full lg:w-fit">
          <a
            href="https://www.instagram.com/tamannasionalujungkulon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/icons/instagram.svg"
              className="w-8 h-8"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/tamannasionalujungkulon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/facebook.svg" className="w-8 h-8" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com/tn_ujungkulon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/twitter.svg" className="w-8 h-8" alt="Twitter" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCrQr0YU3aGzN9g4sLmJy7gA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/youtube.svg" className="w-8 h-8" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="w-full bg-gray-200 text-center py-4">
        <p className="text-gray-700 font-epilogue text-sm">
          © {new Date().getFullYear()} Taman Nasional Ujung Kulon. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
