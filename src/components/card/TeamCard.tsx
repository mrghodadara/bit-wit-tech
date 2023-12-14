import Image from 'next/image';
import React from 'react';

interface TeamCardProps {
  name: string;
  title: string;
  profile: string;
  faceBook: string;
  instagram: string;
  linkedin: string;
}

const TeamCard = ({
  name,
  profile,
}: // title,
// faceBook,
// instagram,
// linkedin,
TeamCardProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image src={profile} width={1000} height={1000} alt={name} />
    </div>
  );
};

export { TeamCard };
