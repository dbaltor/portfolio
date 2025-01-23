import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url}) => {
  return (
    <VStack>
      <Box rounded="md" color="black" bg="white">
        <Image rounded="md" src={imageSrc} />
        <Heading px={4} py={4} size="md">{title}</Heading>
        <Text px={4} color="grey">{description}</Text>
        <HStack>
          <Text px={4} py={4} fontWeight="semibold">See more</Text>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </a>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
