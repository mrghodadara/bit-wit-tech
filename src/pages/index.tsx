import React, { useEffect, useState } from 'react';

import { Loader } from '@/components/loader/Loader';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Hero } from '@/components/sections/Hero';
import { Portfolio } from '@/components/sections/Portfolio';
import { Service } from '@/components/sections/Service';
import { Team } from '@/components/sections/Team';
import { Footer } from '@/layouts/Footer';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Whole Home Protection Plans | American Water Resources"
          description="American Water Resources offers affordable whole home protection programs that help protect against unexpected repair costs for various home emergencies."
        />
      }
    >
      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <Hero />
          <About />
          <Service />
          <Team />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      )}
    </Main>
  );
};

export default Index;
