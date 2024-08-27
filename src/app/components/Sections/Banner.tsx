import { Container, Flex, Heading, chakra, Image, Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Banner = () => {
  return (
      <MotionBox
        position="relative"
        bgGradient={{
          md: "linear(to-r, transparent 65%, white 40%)",
          base: "linear(to-r, transparent 100%, white 0%)",
        }}
        overflow="hidden"
        padding={{ lg: "94px 0 36px 0", base: "85px 0 36px 0" }}
        textAlign="center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          width={{ md: "65%", base: "100%" }}
          height="100%"
          bgImage="url('/Asset/map.svg')"
          bgSize="cover"
          bgPosition="left"
          bgRepeat="no-repeat"
          transform="scaleY(-1)"
          zIndex={-1}
        />
        <Container
          as={Flex}
          maxW={{ base: "80%", xl: "1300px" }}
          textAlign={"center"}
          color={"#fff"}
          gap="1rem"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingTop={{ lg: "94px", base: "85px" }}
        >
          <Heading
            fontSize={{ base: "30px", lg: "43px" }}
            fontWeight={"500"}
            color="#1F1F1F"
            w="100%"
          >
            We pair you with the best logistics
            <chakra.span>
              <Image
                ml="5px"
                display={"inline-block"}
                verticalAlign="middle"
                src="/Asset/box.svg"
              />
            </chakra.span>
            <br />
            company that works best for you
          </Heading>
          <Heading
            fontWeight={"500"}
            fontSize={{ base: "16px", lg: "16px" }}
            lineHeight={"24px"}
            px={{ base: "0rem", lg: "8rem" }}
            color="#4B4B4B"
          >
            Search delivery service around you, book pickup and delivery to your
            customers
          </Heading>
        </Container>
      </MotionBox>
  );
};

export default Banner;
