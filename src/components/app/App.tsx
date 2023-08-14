import { FC } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Navbar from "../common/Navbar";

const Home: FC = () => {
  return (
    <div className="AppWrapper">
      <div className="AppLayout">
        <Navbar></Navbar>
        <Header></Header>
        <div className="Main"></div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
