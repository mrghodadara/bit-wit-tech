import type { ReactNode } from 'react';
import React from 'react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ icon, name, description }: ServiceCardProps) => {
  return (
    <div className="flex cursor-pointer select-none flex-col items-start gap-5 rounded-lg bg-white/30 p-14 px-11 transition-all duration-500 hover:-translate-y-3 hover:bg-serviceHover">
      <div className="mb-1 text-white">{icon}</div>
      <h3 className="font-poppins text-xl font-medium leading-6 text-white">
        {name}
      </h3>
      <p className="font-poppins text-lg leading-7 text-white ">
        {description}
      </p>
    </div>
  );
};

export { ServiceCard };
