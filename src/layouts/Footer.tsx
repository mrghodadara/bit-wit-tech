import Link from "next/link";
import React from "react";

import { Container } from "./Container";

const LINKS: { id: number; label: string; path: string }[] = [
  { id: 1, label: "Work", path: "#" },
  { id: 2, label: "About", path: "#" },
  { id: 3, label: `Let's Talk`, path: "#" },
];

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-footer-color bg-cover bg-fixed bg-center">
        <div className="bg-footer-1 bg-fixed py-12 lg:py-28">
          <Container>
            <div className="flex flex-col items-center gap-4 py-4 lg:gap-6">
              <p className="font-poppins text-base font-normal uppercase tracking-[4px] text-white">
                READY TO DO THIS
              </p>
              <h3 className="font-montserrat text-4xl font-black leading-10 text-white lg:text-[75px]">
                {`Let's get to work`}
              </h3>
              <Link
                href={"#"}
                className="mt-6 rounded-md border-2 border-white bg-transparent px-10 py-3.5 font-poppins text-base font-medium uppercase text-white shadow-2xl duration-300 ease-linear hover:-translate-y-1.5 hover:bg-white hover:text-light-purple-75 lg:mt-12"
              >
                CONTACT US
              </Link>
            </div>
          </Container>
        </div>
      </div>

      <div className="bg-footer-2 bg-cover bg-repeat pb-10 pt-16 lg:pt-28">
        <Container>
          <div className="flex flex-col items-center gap-10 md:gap-20">
            <div className="flex flex-row items-start gap-10 self-start md:gap-20">
              <div className="flex flex-col items-start gap-4 lg:gap-7">
                <h3 className="font-poppins text-xl font-medium leading-6 text-light-25">
                  Quick Link
                </h3>
                <div className="flex flex-col items-start gap-3.5">
                  {LINKS &&
                    LINKS?.length > 0 &&
                    LINKS?.map(({ id, label, path }) => (
                      <Link
                        key={id}
                        href={path}
                        className="font-poppins text-base text-light-25 opacity-75 duration-300  ease-linear hover:text-primary"
                      >
                        {label}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 lg:gap-7">
                <h3 className="font-poppins text-xl font-medium leading-6 text-light-25">
                  Say Hello
                </h3>

                <Link
                  href={"#"}
                  className="font-poppins text-base text-light-25 opacity-75 duration-300  ease-linear hover:text-primary"
                >
                  social@bitwittech.com
                </Link>
              </div>
            </div>

            <div>
              <p className="font-poppins text-base text-light-25 ">
                Copyright © {new Date().getFullYear()} Bitwit Technologies. All
                Rights Reserved
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export { Footer };
