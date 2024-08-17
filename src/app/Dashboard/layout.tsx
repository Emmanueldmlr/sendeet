"use client";

import DashboardWrapper from "../components/dashboard/DashboardWrapper";
import MobileDrawer from "../components/dashboard/MobileDrawer";
import AuthHeader from "../components/layout/authLayout/AuthHeader";
import FixedLink from "../components/ui/FixedLink";

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
