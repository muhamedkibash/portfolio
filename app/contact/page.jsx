"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 (226) 989-0249",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "muhamedkibash@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Windsor, Ontario",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm excited to collaborate with you on your next project!
                Whether you need a cutting-edge mobile app, a sleek website, or
                innovative automation solutions, I'm here to bring your ideas to
                life. Share your vision, and let's create something
                extraordinary together.
              </p>
              {/* input */}
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  className="rounded"
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  className="rounded"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="rounded"
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  className="rounded"
                />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full rounded">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="rounded">
                  <SelectGroup className="rounded">
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est" className="rounded">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="mst">Automation Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* btn */}
              <Button size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:-order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
