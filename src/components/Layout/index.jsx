import React from 'react';
import Background from '../../assets/backgroundone.svg';

const IntroLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
		backgroundAttachment: "fixed",
        overflow: 'hidden',
      }}
      className="relative w-full h-screen flex flex-col justify-between"
    >
      <div className="pt-[30px]">
        <h1 className="text-[104.06px] leading-[100%] text-white font-normal font-boldwishrough text-center">
          Journey Through <br /> the MILtiverse
        </h1>
      </div>
      <div className="w-full h-full flex flex-col flex-grow relative">{children}</div>
    </div>
  );
};

export default IntroLayout;