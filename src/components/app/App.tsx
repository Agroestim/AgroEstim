import { Outlet } from "react-router-dom";
import { CommonNavbar } from "../common/navbar/Navbar";
import { AppLayout, AppWrapper } from "./styled";

export default function App() {
  return (
    <AppWrapper>
      <AppLayout>
        <CommonNavbar></CommonNavbar>
        <Outlet></Outlet>
      </AppLayout>
    </AppWrapper>
  );
}
