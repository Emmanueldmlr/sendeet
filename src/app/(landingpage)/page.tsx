"use client";
import { Box, Text } from "@chakra-ui/react";
import Banner from "../components/sections/Banner";
import Services from "../components/sections/Services";
import GetStarted from "../components/sections/GetStarted";
import FAQ from "../components/sections/FAQ";
import Track from "../components/sections/Track";
import Clients from "../components/sections/Clients";

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
