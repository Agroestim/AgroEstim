import { FC } from "react";
// import Footer from "../common/Footer";
// import Header from "../common/Header";
import Navbar from "../common/navbar/Navbar";
import { AppLayout, AppWrapper } from "./styled";

const Home: FC = () => {
  return (
    <AppWrapper>
      <AppLayout>
        <Navbar></Navbar>
        {/* <Header></Header> */}
        {/* <div className="Main"></div> */}
        {/* <Footer></Footer> */}
        {/* <Notify></Notify> */}
      </AppLayout>
    </AppWrapper>
  );
};

export default Home;
