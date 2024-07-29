import "./globals.css";
import type { Metadata } from "next";
import { ChakraLayout } from "./components/ChakraLayout";
import ReduxProvider from "@/redux/provider";
export const metadata: Metadata = {
  title: "Sendeet Logistics",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraLayout>
          <ReduxProvider>{children}</ReduxProvider>
        </ChakraLayout>
      </body>
    </html>
  );
}
