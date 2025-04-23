import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import About2 from "./Components/About2.jsx";
import About3 from "./Components/About3.jsx";
import Footer from "./Components/Footer.jsx";
import Harga from "./Components/Harga.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <About />
        <About2 />
        <About3 />
        <Footer />
      </>
    )
  },
  {
    path: "/harga",
    element: (
      <>
        <Harga />
      </>
    )
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
