import React from 'react';

import { Hero } from '@/components/sections/Hero';
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
    </Main>
  );
};

export default Index;
