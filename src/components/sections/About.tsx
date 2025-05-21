"use client";

import { Container, Stack, Typography } from "@mui/material";
import {
  aboutMe1,
  aboutMe2,
  aboutMe3,
  languages,
} from "../../constants/aboutText";
import { techStack } from "@/constants/skills-section";
import { Card, CardDescription, CardHeader, CardTitle } from "./skillbox/card";

const About: React.FC = () => {
  return (
    <div className="w-auto h-screen flex flex-col justify-start items-center lg:px-20">
      <div className="flex flex-col items-center py-10">
        <h1 className="font-Sans font-bold text-[25px] lg:text-[40px] leading-[1.3] mb-8 tracking-normal relative pb-4">
          ABOUT ME
          <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-[20%] h-[2px] bg-[#800000] rounded-[8px] pt-1.5" />
        </h1>
      </div>
      <Stack direction={{ xs: "column", md: "row" }} className="md:mx-20">
        <Container className="w-full flex flex-col items-center">
          <div className="w-full h-[500px] bg-gray-300 mb-4 flex items-center justify-center">
            <span>Image Placeholder</span>
          </div>
        </Container>
        <Container>
          <div className="text-justify font-sans text-sx lg:text-[1.2rem]">
            <p>{aboutMe1}</p>
            <p className="mt-5 md:mt-10">{aboutMe2}</p>
            <p className="mt-5 md:mt-10">{aboutMe3}</p>
          </div>
          <div className=" md:mt-20">
            <Typography
              variant="body1"
              className="font-sans text-justify text-[#111] pt-5"
              sx={{
                fontFamily: "sans-serif",
                fontSize: { md: "1.5rem" },
                fontWeight: "bold",
              }}
            >
              {languages}
            </Typography>
            <div className="mx-10 mb-4 grid grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
              {techStack?.map((item, index) => (
                <Card className="w-full" key={index}>
                  <CardHeader className="flex flex-col items-center justify-center">
                    <CardTitle className="text-2xl lg:text-3xl">
                      {item.icon}
                    </CardTitle>
                    <CardDescription className="text-sm lg:text-md font-bold">
                      {item.title}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Stack>
    </div>
  );
};

export default About;
