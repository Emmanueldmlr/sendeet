"use client";

import DashboardWrapper from "../components/Dashboard/DashboardWrapper";
import MobileDrawer from "../components/Dashboard/MobileDrawer";

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
