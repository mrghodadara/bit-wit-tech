import React from "react";

import { CONTACT_NUMBERS, EMAILS } from "@/constants/contact";
import { Container } from "@/layouts/Container";

const Contact = () => {
  return (
    <div className="bg-light-50  lg:py-28">
      <Container>
        <div className="grid w-full grid-cols-1 gap-14 lg:gap-8 py-4 lg:grid-cols-3">

          <div className="relative flex flex-col items-start justify-start gap-4 rounded-xl border border-light-100 bg-white p-14">
            <h4 className="font-poppins text-lg font-bold leading-6 text-dark-50">
              Contact With Phone Number
            </h4>
            <div>
              {CONTACT_NUMBERS &&
                CONTACT_NUMBERS?.length > 0 &&
                CONTACT_NUMBERS?.map(({ id, number }) => (
                  <p key={id}>
                    <a
                      className="font-poppins text-lg leading-7 text-[#1d1d24]/75"
                      href={`tel:${number}`}
                    >
                      {number}
                    </a>
                  </p>
                ))}
            </div>
            <div className="absolute left-8 top-0 h-20 w-20 -translate-y-1/2 rounded-full border border-light-100 bg-white"></div>
          </div>

          <div className="relative flex flex-col items-start justify-start gap-4 rounded-xl border border-light-100 bg-white p-14">
            <h4 className="font-poppins text-lg font-bold leading-6 text-dark-50">
              Email Address
            </h4>
            <div>
              {EMAILS &&
                EMAILS?.length > 0 &&
                EMAILS?.map(({ id, email }) => (
                  <p key={id}>
                    <a
                      className="font-poppins text-lg leading-7 text-[#1d1d24]/75"
                      href={`tel:${email}`}
                    >
                      {email}
                    </a>
                  </p>
                ))}
              <div className="absolute left-8 top-0 h-20 w-20 -translate-y-1/2 rounded-full border border-light-100 bg-white"></div>
            </div>
          </div>

          <div className="relative flex flex-col items-start justify-start gap-4 rounded-xl border border-light-100 bg-white p-14">
            <h4 className="font-poppins text-lg font-bold leading-6 text-dark-50">
              Location
            </h4>
            <p className="font-poppins text-[17px] leading-7 text-[#1d1d24]/75">
              D - 147, Near Medispa,
              <br /> Vaishali Nagar,Jaipur, Rajasthan 302021
            </p>
            <div className="absolute left-8 top-0 h-20 w-20 -translate-y-1/2 rounded-full border border-light-100 bg-white"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { Contact };
