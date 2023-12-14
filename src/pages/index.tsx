import React from 'react';

import { About } from '@/components/sections/About';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Service } from '@/components/sections/Service';
import { Team } from '@/components/sections/Team';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Whole Home Protection Plans | American Water Resources"
          description="American Water Resources offers affordable whole home protection programs that help protect against unexpected repair costs for various home emergencies."
        />
      }
    >
      <Hero />
      <About />
      <Service />
      <Team />
      <Portfolio />
    </Main>
  );
};

export default Index;
