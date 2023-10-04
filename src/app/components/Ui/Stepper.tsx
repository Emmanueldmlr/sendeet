// import React from "react";
// import { STEP_DATA } from "@/Data/StepsData";
// import { Box, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
// import WhiteIcon from "../../../../public/Icons/WhiteIcon";

// const Stepper = () => {
//   return (
//     <Stack>
//       {STEP_DATA.map((step, index) => (
//         <Flex
//           key={index}
//           flexDirection={"column"}
//           alignItems={"left"}
//           justifyContent={"center"}
//         >
//           <Flex
//             key={index}
//             flexDirection={"row"}
//             alignItems={"center"}
//             justifyContent={"left"}
//             gap={"2rem"}
//           >
//             <Flex>
//               <Heading
//                 as={Flex}
//                 alignItems={"center"}
//                 textAlign={"center"}
//                 background={"#FFFEEA"}
//                 width={"50px"}
//                 height={"50px"}
//                 borderRadius={"50px"}
//                 fontSize={{ base: "sm", lg: "18px" }}
//                 fontWeight={"bold"}
//                 color="#CD6809"
//                 justifyContent={"center"}
//               >
//                 {step.stepNumber}
//               </Heading>
//             </Flex>
//             <Flex>
//               <Text
//                 fontSize={{ base: "sm", lg: "16px" }}
//                 color="#CD6809"
//                 lineHeight={"150%"}
//               >
//                 {step.description}
//               </Text>
//             </Flex>
//           </Flex>
//           {index < 3 && (
//             <Flex
//               flexDirection={"column"}
//               justifyContent={"left"}
//               alignItems={"left"}
//               px="20px"
//             >
//               <Icon as={WhiteIcon} h="100%" />
//             </Flex>
//           )}
//         </Flex>
//       ))}
//     </Stack>
//   );
// };

// export default Stepper;
import React from "react";

const Stepper = () => {
  return <div>Stepper</div>;
};

export default Stepper;
