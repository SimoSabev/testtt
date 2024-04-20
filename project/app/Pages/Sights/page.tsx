import React from "react";
import Header_Cards from "@/app/Components/sights-components/header-cards/page";
import Cards from "@/app/Components/sights-components/cards/page";


const Sights = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Header_Cards />
      <Cards />
    </div>
  );
};

export default Sights;
