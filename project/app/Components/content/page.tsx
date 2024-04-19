import React from "react";
import Image from "next/image";
import char from "../../../public/assets/image-group.png-removebg-preview.png";

const Content = () => {
  return (
    <div className=" hero min-h-screen flex items-center pl-48 bg-[url('https://i.pinimg.com/564x/27/a6/02/27a6024cad4b65ae6b1ee17d45977bd7.jpg')] ">
      <div>
        <Image
        className=" absolute right-24 bottom-16"
          src={char}
          width={600}
          height={600}
          alt="Picture of the author"
        />
      </div>
      <div className=" hero-content text-start">
        <div className="max-w-md flex flex-col">
          <h1 className="text-6xl text-slate-300 font-bold">Hello there</h1>
          <p className="py-6 text-slate-300">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className=" btn  btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Content;
