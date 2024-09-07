import {
  Box,
  Tabs,
  TabList,
  Tab,
  Stack,
  Input,
  Select,
  Button,
  Icon,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Delivery from "../../../../public/Icons/Delivery";
import Track from "../../../../public/Icons/Track";

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);
const MotionButton = motion(Button);

const TrackSection = () => {
  return (
    <>
      <MotionBox
        bg="#573312"
        w="100%"
        p={{ md: "36px 36px 74px 36px", base: "48px 24px" }}
        display="flex"
        justifyContent="center"
        fontFamily={"Outfit"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionBox
          bg={{ md: "rgba(255, 255, 255, 0.05)", base: "none" }}
          p={{ md: "24px 58px", base: "none" }}
          borderRadius="lg"
          boxShadow="lg"
          w="100%"
          maxW="750px"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Tabs variant={"unstyled"} align="center" mb="8">
            <TabList>
              <Tab
                _selected={{
                  color: "white",
                  borderBottom: "1px solid #FFF",
                }}
                color="#8E8E8E"
                width="189px"
                borderBottom="1px solid #8E8E8E"
              >
                <Icon as={Delivery} fontSize={"1.2rem"} mr="5px" />
                Delivery/Pickup
              </Tab>
              <Tab
                _selected={{
                  color: "white",
                  borderBottom: "1px solid #FFF",
                }}
                color="#8E8E8E"
                width="189px"
                borderBottom="1px solid #8E8E8E"
              >
                <Icon as={Track} fontSize={"1.2rem"} mr="5px" />
                Track
              </Tab>
            </TabList>
          </Tabs>

          <Stack spacing="24px">
            <Box width="100%">
              <Grid
                templateColumns={{
                  base: "1fr",
                  sm: "1fr 1fr",
                  lg: "5fr 5fr 3fr",
                }}
                gap="20px"
              >
                <MotionGridItem
                  position="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    bg="rgba(0, 0, 0, 0.2)"
                    padding={"13px 18px"}
                    borderRadius="md"
                    border="1px solid #EEE"
                    background="rgba(255, 255, 255, 0.12)"
                    width="100%"
                    height="50px"
                  >
                    <Image src="/Asset/greenLocator.svg" />
                    <Input
                      placeholder="Where from?"
                      variant="unstyled"
                      ml="13px"
                      color="#E1E1E1"
                      _placeholder={{ color: "#fff" }}
                    />
                  </Box>
                  <Box
                    position="absolute"
                    top={{ sm: "5px", base: "40px" }}
                    right={{ sm: "-30px", base: "calc(50% - 20px)" }}
                    zIndex="1"
                  >
                    <Image
                      borderRadius="50px"
                      bg="#FF8C1A"
                      padding="10px 12px"
                      src="/Asset/arrow-swap.png"
                    />
                  </Box>
                </MotionGridItem>

                <MotionGridItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    bg="rgba(0, 0, 0, 0.2)"
                    padding={"13px 18px"}
                    borderRadius="md"
                    border="1px solid #EEE"
                    background="rgba(255, 255, 255, 0.12)"
                    width="100%"
                    height="50px"
                  >
                    <Image src="/Asset/orangeLocator.svg" />
                    <Input
                      placeholder="Where to?"
                      variant="unstyled"
                      ml="13px"
                      color="white"
                      _placeholder={{ color: "#fff" }}
                    />
                  </Box>
                </MotionGridItem>

                <MotionGridItem
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    borderRadius="md"
                    border="1px solid #EEE"
                    background="rgba(255, 255, 255, 0.12)"
                    width="100%"
                    height="50px"
                  >
                    <Select color="white" border={"none"}>
                      <option>Customize</option>
                    </Select>
                  </Box>
                </MotionGridItem>
              </Grid>
            </Box>

            <MotionGridItem
              colSpan={{ base: 1, sm: 2, lg: 3 }}
              display="flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <MotionButton
                colorScheme="orange"
                w="full"
                maxW="100%"
                mt={{ base: "24px", sm: "0" }}
                height={"50%"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Search
              </MotionButton>
            </MotionGridItem>
          </Stack>
        </MotionBox>
      </MotionBox>
    </>
  );
};

export default TrackSection;
