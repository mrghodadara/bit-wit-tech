import type { ReactNode } from "react";
import React from "react";

import { Container } from "@/layouts/Container";

import { ServiceCard } from "../card/ServiceCard";
import { CameraIcon } from "../icons/CameraIcon";
import { ComputerIcon } from "../icons/ComputerIcon";
import { HeartIcon } from "../icons/HeartIcon";
import { MobileIcon } from "../icons/MobileIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { ServerIcon } from "../icons/ServerIcon";

const OUR_SERVICES: {
  id: number;
  name: string;
  description: string;
  icon: ReactNode;
}[] = [
  {
    id: 1,
    name: "Website Development",
    description:
      "We start from idea to its development and provide end to end solution.We guide our valued clients through all stages in the production of website",
    icon: <ComputerIcon />,
  },

  {
    id: 3,
    name: "Mobile Development",
    description:
      "Over the years, we’ve built up specific knowledge and expertise in creating applications for almost all the niches providing best Mobile Solutions.",
    icon: <MobileIcon />,
  },
  {
    id: 4,
    name: "Ui/UX Design",
    description:
      "We deliver easy-to-use interfaces while providing the enterprise-grade code quality.",
    icon: <CameraIcon />,
  },
  {
    id: 2,
    name: "Digital Marketing",
    description:
      "Social media can be a great place to advertise your product, services, and business.We provide excellent social media marketing services.",
    icon: <HeartIcon />,
  },
  {
    id: 5,
    name: "SEO",
    description:
      "We are specialized in achieving top ranking in search engine results by using proven,.",
    icon: <SearchIcon />,
  },
  {
    id: 6,
    name: "Dedicated Server",
    description:
      "We add a value to website to meet all online needs at one stop with tangible results.",
    icon: <ServerIcon />,
  },
];

const Service = () => {
  return (
    <div className="bg-service bg-cover bg-fixed bg-center bg-no-repeat py-16 lg:py-28">
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 py-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="font-poppins text-3xl font-bold leading-[140%] text-white lg:text-6xl">
              Our Service
            </h2>
            <p className="text-center font-poppins text-base font-light leading-5 text-white md:text-lg lg:text-xl lg:leading-8">
              Seek every kind of Digital Solution with us!
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {OUR_SERVICES &&
              OUR_SERVICES?.length > 0 &&
              OUR_SERVICES?.map(({ id, icon, name, description }) => (
                <ServiceCard
                  key={id}
                  icon={icon}
                  name={name}
                  description={description}
                />
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Service };
