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
import { LandmarkProvider } from "./contexts/LandmarkContext.js";
import { Details } from "./Components/Details/Details.js";
import { RouteGuard } from "./Components/common/guards/RouteGuard.js";
import { RecourceGuard } from "./Components/common/guards/RecourseGuard.js";
import { Wrapper } from "./Components/common/Wrapper/Wrapper.js";
import { Profile } from "./Components/Profile/Profile.js";

function App() {
  return (
    <>
      <AuthProvider>
        <LandmarkProvider>
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Wrapper>
                    <Home />
                  </Wrapper>
                }
              />
              <Route
                path="/register"
                element={
                  <Wrapper>
                    <Register />
                  </Wrapper>
                }
              />
              <Route
                path="/login"
                element={
                  <Wrapper>
                    <Login />
                  </Wrapper>
                }
              />
              <Route
                path="/catalog"
                element={
                  <Wrapper>
                    <Catalog />
                  </Wrapper>
                }
              />
              <Route
                path="/catalog/:landmarkId"
                element={
                  <Wrapper>
                    <Details />
                  </Wrapper>
                }
              />

              <Route element={<RouteGuard />}>
                <Route path="/logout" element={<Logout />} />
                <Route
                  path="/create"
                  element={
                    <Wrapper>
                      <Create />
                    </Wrapper>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <Wrapper>
                      <Profile />
                    </Wrapper>
                  }
                />
                <Route
                  path="/catalog/:landmarkId/edit"
                  element={
                    <Wrapper>
                      <RecourceGuard>
                        <Edit />
                      </RecourceGuard>
                    </Wrapper>
                  }
                />
              </Route>

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
        </LandmarkProvider>
      </AuthProvider>
    </>
  );
}

export default App;
