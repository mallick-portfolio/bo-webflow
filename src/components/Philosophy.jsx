import React from "react";

const Philosophy = () => {
  return (
    <div className="px-12 py-8 mt-36 mb-48 mx-auto">
      <h4 className="text-lg font-medium text-secondary mb-8">
        Our Philosophy
      </h4>
      <div className="flex">
        <div className="w-1/2">
          <h2 className="text-4xl text-primary font-semibold">
            High-end digital experiences. Created at the heart of Manhattan, we
            are a human-sized team.
          </h2>
          <h2 className="text-4xl my-8 text-primary font-semibold">
            The driving force of all speeches, we believe that creation should
            be the point around which any communication strategy revolves.
          </h2>
          <a className="cmn-btn" href="/">
            Meet the team
          </a>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default Philosophy;
