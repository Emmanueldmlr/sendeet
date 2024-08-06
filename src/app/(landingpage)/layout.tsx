"use client";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import FixedLink from "../components/ui/FixedLink";

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
