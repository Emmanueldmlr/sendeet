"use client";
import { Box, Text } from "@chakra-ui/react";
import Banner from "../components/sections/Banner";
import Services from "../components/sections/Services";
import GetStarted from "../components/sections/GetStarted";
import ForAll from "../components/sections/ForAll";
import FAQ from "../components/sections/FAQ";
import Location from "../components/sections/Location";

export default function HomePage() {
  return (
    <Box>
      <Banner />
      <Services />
      <GetStarted />
      <ForAll />
      <FAQ />
      <Location />
    </Box>
  );
}
