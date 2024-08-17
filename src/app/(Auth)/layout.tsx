"use client";

import AuthHeader from "../components/Layout/AuthLayout/AuthHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      {children}
    </>
  );
}
