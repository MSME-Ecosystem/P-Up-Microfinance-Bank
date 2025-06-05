import Automate from "@/components/reconsilex/Automate";
import Cards from "@/components/reconsilex/Cards";
import Running from "@/components/reconsilex/Running";
import React from "react";

const page = () => {
  return (
    <div className="text-black ">
      <div className="lg:px-24 px-5">
        <Automate />
        <Cards />
      </div>

      <Running />
    </div>
  );
};

export default page;
