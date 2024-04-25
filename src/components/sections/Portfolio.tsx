import React from 'react';

import { Container } from '@/layouts/Container';

import { Counter } from '../counter/Index';

const LISTS: { id: number; label: string; count: number }[] = [
  { id: 1, label: 'Years of Experience', count: 6 },
  { id: 2, label: 'Projects', count: 46 },
  { id: 3, label: 'Happy Customers', count: 26 },
];

const Portfolio = () => {
  return (
    <div className="bg-portfolio bg-cover bg-top bg-no-repeat py-28">
      <Container>
        <div className="grid w-full grid-cols-3 justify-items-center gap-4 md:gap-8 py-4">
          {LISTS &&
            LISTS.length > 0 &&
            LISTS?.map(({ id, label, count }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center gap-2 md:gap-4"
              >
                <h3 className="font-poppins text-5xl md:text-7xl font-semibold leading-9 md:leading-[80px] text-white">
                  <Counter limit={count} />
                </h3>
                <p className="font-poppins text-lg md:text-xl text-center font-medium md:font-semibold leading-6 text-white">
                  {label}
                </p>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export { Portfolio };
