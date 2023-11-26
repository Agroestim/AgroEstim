import { Outlet } from "react-router-dom";
import { Navbar } from "../common/navbar/Navbar";
import { AppLayout, AppWrapper } from "./styled";

export default function App() {
  return (
    <AppWrapper>
      <AppLayout>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </AppLayout>
    </AppWrapper>
  );
}
