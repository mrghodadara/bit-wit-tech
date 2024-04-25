import React from 'react';

import { Container } from '@/layouts/Container';

import { TeamCard } from '../card/TeamCard';

const OUR_TEAMS: {
  id: number;
  name: string;
  title: string;
  profile: string;
  faceBook: string;
  instagram: string;
  linkedin: string;
}[] = [
  {
    id: 1,
    name: 'Vivek Ghodadara',
    title: 'Founder & CEO',
    profile: '/assets/images/profile/vivek.png',
    faceBook: '',
    instagram: '',
    linkedin: '',
  },
  {
    id: 2,
    name: 'Piyush Kalsariya',
    title: 'Co-Founder',
    profile: '/assets/images/profile/piyush.png',
    faceBook: '',
    instagram: '',
    linkedin: '',
  },
  {
    id: 3,
    name: 'Darshan Kalsariya',
    title: 'Co-Founder',
    profile: '/assets/images/profile/darshan.png',
    faceBook: '',
    instagram: '',
    linkedin: '',
  },
];

const Team = () => {
  return (
    <div className="bg-white py-16 lg:py-28">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6 lg:gap-12 py-4">
          <div>
            <h2 className="font-poppins text-5xl lg:text-6xl font-bold lg:leading-[140%] text-dark-50">
              Our <span className="text-xl lg:text-2xl">SUPERHEROS</span>
            </h2>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {OUR_TEAMS &&
              OUR_TEAMS?.length > 0 &&
              OUR_TEAMS?.map(
                ({
                  id,
                  name,
                  title,
                  profile,
                  faceBook,
                  instagram,
                  linkedin,
                }) => (
                  <TeamCard
                    key={id}
                    name={name}
                    title={title}
                    profile={profile}
                    faceBook={faceBook}
                    instagram={instagram}
                    linkedin={linkedin}
                  />
                )
              )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Team };
