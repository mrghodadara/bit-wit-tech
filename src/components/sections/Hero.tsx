import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

import { NAV_LINK } from '@/constants';
import { Container } from '@/layouts/Container';

const Hero = () => {
  return (
    <div className="bg-banner bg-cover bg-fixed bg-center bg-no-repeat">
      {/* Header */}
      <div className="flex flex-row items-center justify-between p-12">
        <Link href={'/'}>
          <Image
            src={'/assets/images/logo.png'}
            alt="logo"
            width={1000}
            height={1000}
            className="h-24 w-24"
          />
        </Link>

        <div className="flex flex-row items-center justify-end gap-4">
          {NAV_LINK &&
            NAV_LINK.length > 0 &&
            NAV_LINK?.map(({ id, name, path }) => (
              <Link
                href={path}
                key={id}
                className="font-poppins text-base font-medium text-white hover:text-primary"
              >
                {name}
              </Link>
            ))}
        </div>
      </div>
      <Container>
        <div className="flex flex-col items-start gap-12 pb-24 pt-4">
          <div className="min-h-[156px] max-w-lg font-poppins text-[40px] font-bold leading-[50px] text-white">
            {/* We Develop Experiences <br /> that make <br />
            {`people's life easier.`} */}
            <Typewriter
              options={{
                strings:
                  "We Develop Experiences that make people's life easier.",
                autoStart: true,
                loop: false,
                cursorClassName: 'font-medium',
              }}
            />
          </div>

          <Link
            href={'#'}
            className="rounded-md border-2 border-light-purple-50 bg-light-purple-100 px-10 py-4 font-poppins text-base font-medium uppercase text-white"
          >
            CONTACT US
          </Link>
        </div>
      </Container>
    </div>
  );
};

export { Hero };
