import type { ReactNode } from 'react';
import React from 'react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: ReactNode;
}
const ServiceCard = ({ icon, name, description }: ServiceCardProps) => {
  return (
    <div className="flex cursor-pointer flex-col items-start gap-5 rounded-lg bg-white/30 px-11 py-14">
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
