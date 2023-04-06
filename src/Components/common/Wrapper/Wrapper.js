import { Header } from "../../Header/Header.js";
import { Footer } from "../../Footer/Footer.js";

export const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
