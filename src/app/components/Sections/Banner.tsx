import {
  Button,
  Container,
  Flex,
  Heading,
  chakra,
  Icon,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import ButtomAnimation from "../Animation/ButtomAnimation";
import Track from "../../../../public/Icons/Track";
import Delivery from "../../../../public/Icons/Delivery";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  return (
    <Flex
      mt="5rem"
      px="0.2rem"
      backgroundImage="url('/Asset/Bannerbg.png')"
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      h={{ base: "500px", xl: "593px" }}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap="2.3rem"
    >
      <ButtomAnimation>
        <Container
          as={Flex}
          maxW={{ base: "100%", xl: "1300px" }}
          textAlign={"center"}
          color={"#fff"}
          gap="1rem"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            fontSize={{ base: "30px", lg: "43px" }}
            fontWeight={"500"}
            w="100%"
          >
            Enjoy the<chakra.span color="primary"> swiftest</chakra.span>{" "}
            service, all items{" "}
            <chakra.br display={{ base: "none", md: "flex" }} /> brought to your{" "}
            <chakra.span color="primary">door.</chakra.span>
          </Heading>
          <Heading
            fontWeight={"500"}
            fontSize={{ base: "16px", lg: "16px" }}
            lineHeight={"24px"}
            px={{ base: "0rem", lg: "8rem" }}
            color="#CACACA"
          >
            Locate your shipment items instantly and accurately
          </Heading>
          <HStack display={{ base: "none", xl: "flex" }}>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              p="13px 63px"
              borderBottom={"1px solid white"}
              bg="rgba(235, 235, 235, 0.29)"
              gap="10px"
            >
              <Icon as={Track} fontSize={"1.2rem"} />
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Track
              </Heading>
            </Flex>
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              p="13px 63px"
              bg="transparent"
              gap="10px"
            >
              <Icon as={Delivery} fontSize={"1.2rem"} />
              <Heading fontSize={"14px"} fontWeight={"500"}>
                Delivery/Pickup
              </Heading>
            </Flex>
          </HStack>
          <Stack>
            <HStack>
              <Flex
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                border="1px solid #eee"
                bg="#fff"
                w={{ base: "100%", xl: "325px" }}
                h="50px"
                borderRadius={"5px"}
                p={{ base: "10px", xl: "25px" }}
              >
                <AiOutlineSearch size="20px" color="#E1E1E1" />
                <Input
                  placeholder="Please enter your tracking number"
                  border={"none"}
                  _active={{ outline: "transparent" }}
                  _placeholder={{
                    color: "#E1E1E1",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    fontSize: { base: "12px", xl: "13px" },
                  }}
                />
              </Flex>
              <Button p="25px" variant={"solid"} fontSize={"sm"}>
                Track Now
              </Button>
            </HStack>
            <chakra.ul
              as={Flex}
              flexDir="row"
              alignItems={"left"}
              justifyContent={"left"}
              textAlign={"left"}
              fontFamily="Outfit"
              fontWeight={"400"}
              fontSize={{ base: "xs", xl: "sm" }}
            >
              <chakra.li color="#E1E1E1">Track your parcel</chakra.li>
            </chakra.ul>
          </Stack>
        </Container>
      </ButtomAnimation>
    </Flex>
  );
};

export default Banner;
