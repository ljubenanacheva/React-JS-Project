import "bootstrap/dist/css/bootstrap.min.css";

import { Create } from "./Components/Create/Create.js";
import { Footer } from "./Components/Footer/Footer.js";
import { Header } from "./Components/Header/Header.js";
import { Home } from "./Components/Home/Home.js";
import { Register } from "./Components/Register/Register.js";
import { Login } from "./Components/Login/Login.js";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Register />
      <Login />
      <Create />
      <Footer />
    </>
  );
}

export default App;
