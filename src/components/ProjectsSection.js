import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Banking Demo API",
    description:
      "Restful API for Banking using BDD and TDD",
    getImageSrc: () => require("../images/bdd_with_tdd.png"),
    url: "https://github.com/dbaltor/banking-demo-api",
  },
  {
    title: "Transfer money",
    description:
      "Playing with reactive programming and DDD in Java",
    getImageSrc: () => require("../images/reactive-traits.png"),
    url: "https://github.com/dbaltor/transfermoney",
  },
  {
    title: "Provisioning with IaC and Deployment with GitOps",
    description:
      "An exercise to provision an EKS cluster using Terraform and deploy applications using ArgoCD",
    getImageSrc: () => require("../images/superset-deployment.png"),
    url: "https://github.com/dbaltor/eks-iac"
  },
  {
    title: "Spring Boot and Spring Cloud",
    description:
      "How to build microservices leveraging Spring Boot and Spring Cloud: Netflix, OpenFeign, Config, Contract, Gateway, and Sleuth",
    getImageSrc: () => require("../images/spring-cloud.png"),
    url: "https://github.com/dbaltor/library-msa"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#2A4365"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
