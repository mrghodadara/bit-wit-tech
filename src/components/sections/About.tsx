import Image from 'next/image';
import React from 'react';

import { Container } from '@/layouts/Container';

const About = () => {
  return (
    <div className="bg-white py-28">
      <Container>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16 lg:py-4">
          <div className="w-full lg:w-5/12">
            <Image
              src={'/assets/images/about.gif'}
              width={1000}
              height={1000}
              alt="About"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-6 lg:w-7/12">
            <h3 className="font-poppins text-4xl font-bold leading-7 text-dark-50 lg:text-6xl">
              About <span className="text-2xl">BITWIT TECHNOLOGIES</span>
            </h3>

            <div className="flex flex-col items-start gap-3">
              <p className="font-poppins text-lg font-light leading-[30px] text-dark-25">
                Bitwit Technologies offers expertise in developing and designing
                online and offline solutions for clients which helps a client in
                increasing its business and revenues. We are providing all kinds
                of digital services under one roof. It starts with Web
                designing, Mobile or Web applications, Content Writing,
                E-commerce Solutions ,Digital Marketing and Catalogue Designing
                and Others.
              </p>

              <p className="font-poppins text-lg font-light leading-[30px] text-dark-25">
                {`We understand different businesses have different requirements
                and approaches in the market. And to match with each customer’s
                needs and requirements we follow a very flexible process to
                cater the need of each client. Our team of experts, innovation,
                and robust technology gives us an edge over others.`}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { About };
