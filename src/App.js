import { Create } from "./Components/Create/Create.js";
import { Footer } from "./Components/Footer/Footer.js";
import { Header } from "./Components/Header/Header.js";
import { Home } from "./Components/Home/Home.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./Components/Register/Register.js";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Register />
      <Create />
      <Footer />
    </>
  );
}

export default App;
