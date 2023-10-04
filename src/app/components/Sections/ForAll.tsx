import { Stack, Text, Box, Heading, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FORALL } from "@/app/Data/SectionDatas";

const ForAll = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set this to true for continuous autoplay
    autoplaySpeed: 3000, // Set the duration (in milliseconds) between slides
  };
  return (
    <Stack
      mt="3rem"
      backgroundImage="url('/Asset/bgcon.png')"
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      w="100%"
      textAlign={"center"}
      padding={{
        base: "40px 40px 40px 40px",
        xl: "64px 184px 64px 184px",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {" "}
      <Text
        fontSize={{ base: "xs", xl: "12px" }}
        color="#8E8E8E"
        fontWeight={"500"}
      >
        SENDEET FOR ALL
      </Text>
      <Box as="div" maxWidth={{ base: "100%", xl: "1200px" }}>
        <Slider {...sliderSettings}>
          {FORALL.map((i, index) => (
            <Flex
              flexDirection={"column"}
              key={index}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={{ base: "0.5rem", xl: "20rem" }}
              p={{ base: "1rem", xl: "3rem" }}
            >
              <Heading
                color={"#fff"}
                fontSize={{ base: "15px", xl: "32px" }}
                px="1rem"
                fontWeight={"500"}
                mb="1rem"
              >
                {i.title}
              </Heading>

              <Heading
                mb="1rem"
                color="#8E8E8E"
                fontSize={{ base: "xs", xl: "16px" }}
                fontWeight={"500"}
                px={{ base: "2rem", xl: "10rem" }}
              >
                {i.body}
              </Heading>
              <Button variant={"solid"}>View All</Button>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Stack>
  );
};

export default ForAll;
