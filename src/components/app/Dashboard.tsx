import { FC } from "react";
import { Outlet } from "react-router-dom";

const Dashboard: FC = () => {
  return (
    // TODO: User notification provider
    <Outlet />
  );
};

export default Dashboard;
