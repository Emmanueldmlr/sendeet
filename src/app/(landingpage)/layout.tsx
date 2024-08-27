"use client";

import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import FixedLink from "../components/Ui/FixedLink";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FixedLink />
    </>
  );
}
