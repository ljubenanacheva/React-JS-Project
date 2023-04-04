import { Routes, Route, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { Create } from "./Components/Create/Create.js";
import { Footer } from "./Components/Footer/Footer.js";
import { Header } from "./Components/Header/Header.js";
import { Home } from "./Components/Home/Home.js";
import { Register } from "./Components/Register/Register.js";
import { Login } from "./Components/Login/Login.js";
import { Logout } from "./Components/Logout/Logout.js";
import { Edit } from "./Components/Edit/Edit.js";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage.js";
import { AuthProvider } from "./contexts/AuthContext.js";
import { Catalog } from "./Components/Catalog/Catalog.js";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<Create />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:landMarkId/edit" element={<Edit />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
