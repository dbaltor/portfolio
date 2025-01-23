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
    {/* Truncate text
     If you'd like to truncate the text after a specific number of lines, pass the noOfLines prop. 
     This will render an ellipsis when the text exceeds the width of the viewport or maxWidth prop. 
     */}
    <VStack spacing={16} >
      <VStack spacing={4} alignItems="center" >
        <Avatar 
          size="2xl" 
          name="Denis"
          src={photo}
        />
        <Heading as="h4" sized="md" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack py={8} spacing={4} color="#22487e">
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio1}
        </Heading>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
