import React from "react";
import Cards from "@/app/Components/hotels-components/cards/page";
import Header_Cards from "@/app/Components/hotels-components/header-cards/page";


const Hotels = () => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Header_Cards />
      <Cards />
    </div>
  );
};

export default Hotels;
