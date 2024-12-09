"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaFigma,
  FaSwift,
  FaJava,
} from "react-icons/fa";

import { SiAppium } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "Hi, I'm Muhamed Kibash, a passionate and dedicated developer with a knack for solving complex problems. I specialize in mobile and web application development, leveraging my skills to create impactful solutions. With a strong background in automation and a deep interest in Appium, I strive to build tools and systems that simplify workflows and enhance user experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhamed Kibash",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (226) 989-0249",
    },
    {
      fieldName: "Email",
      fieldValue: "muhamedkibash@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Canadian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic, Russian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have a strong academic foundation in Networking and Mobile Application Development, which has equipped me with the skills to excel in both development and automation projects. My education has been pivotal in shaping my career and fueling my passion for technology.",
  items: [
    {
      institution: "St. Clair College",
      degree: "Networking",
      duration: "2021 - 2022",
    },
    {
      institution: "St. Clair College",
      degree: "Mobile Applications Development",
      duration: "2022 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Over the years, I have developed a versatile skill set that spans web and mobile development, UI/UX design, and automation. My ability to combine technical expertise with creative problem-solving has allowed me to deliver exceptional results in a variety of projects.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaSwift />,
      name: "swift",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiAppium />,
      name: "appium",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`flex items-center justify-center xl:justify-start gap-4 ${
                          item.fieldName === "Languages"
                            ? "whitespace-nowrap"
                            : ""
                        }`}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
