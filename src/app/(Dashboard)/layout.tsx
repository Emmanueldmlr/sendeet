"use client";

import DashboardWrapper from "../components/Dashboard/DashboardWrapper";
import MobileDrawer from "../components/Dashboard/MobileDrawer";
import AuthHeader from "../components/layout/authLayout/AuthHeader";
import FixedLink from "../components/Ui/FixedLink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MobileDrawer />
      <DashboardWrapper>{children}</DashboardWrapper>
    </>
  );
}
