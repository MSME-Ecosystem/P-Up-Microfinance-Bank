import Cards from "@/components/offline-stack/Cards";
import Power from "@/components/offline-stack/Power";
import Ready from "@/components/offline-stack/Ready";
import React from "react";

const page = () => {
  return (
    <div className="text-black">
      <div className="lg:px-24 px-5 ">
        <Power />
        <Cards />
      </div>

      <Ready />
    </div>
  );
};

export default page;
