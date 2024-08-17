"use client";
import { Box, Text } from "@chakra-ui/react";
import Banner from "../components/Sections/Banner";
import Services from "../components/Sections/Services";
import GetStarted from "../components/Sections/GetStarted";
import ForAll from "../components/Sections/ForAll";
import FAQ from "../components/Sections/FAQ";
import Location from "../components/Sections/Location";

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
