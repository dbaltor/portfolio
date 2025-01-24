import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import photo from '../images/photo.png';

const greeting = "Hello, I am Denis!";
const bio1 = "A backend developer";
const bio2 = "specialised in cloud native applications";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    color
    backgroundColor="#65c3b1"
  >
    <VStack spacing={16} >
      <VStack spacing={4} alignItems="center" >
        <Avatar 
          size="2xl" 
          name="Denis"
          src={photo}
        />
        <Heading sized="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack py={8} spacing={4} color="#22487e">
        <Heading fontSize="calc(2em + 2vw)" >
          {bio1}
        </Heading>
        <Heading fontSize="calc(1.2em + 1vw)" >
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
