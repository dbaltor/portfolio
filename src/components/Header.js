import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: r3qwkfhnt@mozmail.com"
  },
  {
    icon: faGithub,
    url: "https://github.com/dbaltor",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/denis-baltor/",
  },
  {
    icon: faMedium,
    url: "https://dbaltor.medium.com",
  },
];

const Header = () => {
  // Hide/show the header smoothly depending on the scroll direction
  const headerRef = useRef(null);

  useEffect(() => {
    // Detecting scroll direction: https://stackoverflow.com/a/45719399/7066647
    let prevScrollPos = window.scrollY;

    const hideShowHeader = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) { // scrolling up 
        headerElement.style.transform = "translateY(0)"
      } else { // scrolling down
        headerElement.style.transform = "translateY(-200px)"
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", hideShowHeader);

    return () => {
      window.removeEventListener("scroll", hideShowHeader);
    };
  }, []);



  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((s) => (
                <a 
                  key={s.url} 
                  href={s.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={s.icon} size="2x" />
                </a> 
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>Repos</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
