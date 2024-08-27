"use client";
import { Box } from "@chakra-ui/react";
import Banner from "../components/Sections/Banner";
import Services from "../components/Sections/Services";
import GetStarted from "../components/Sections/GetStarted";
import FAQ from "../components/Sections/FAQ";
import Track from "../components/Sections/Track";
import Clients from "../components/Sections/Clients";

export default function HomePage() {
  return (
    <Box>
      <Banner />
      <Track />
      <Services />
      <GetStarted />
      <Clients />
      <FAQ />
    </Box>
  );
}
