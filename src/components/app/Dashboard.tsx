import { FC } from "react";
import { Outlet } from "react-router-dom";
import { DashboardLayout, DashboardWrapper } from "./styled";

const Dashboard: FC = () => {
  return (
    <DashboardWrapper>
      <DashboardLayout>
        {/* TODO: User notification provider */}
        <Outlet />
      </DashboardLayout>
    </DashboardWrapper>
  );
};

export default Dashboard;
