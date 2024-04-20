import React from "react";
import Navbar from "./Components/navbar/page";
import Content from "./Components/content/page";
import Sights from "./Pages/Sights/page";
import Hotels from "./Pages/Hotels/page";

const Home = () => {
  return (
    <main className="">
      <div>
        <Navbar />
      </div>

      <div className="">
        <Content />
      </div>

      <div className=" mt-24">
        <Sights/>
      </div>

      <div className=" mt-36">
        <Hotels/>
      </div>
      

      {/* <div className=""><Footer/></div> */}
    </main>
  );
};

export default Home;
