import React from "react";

const Cards = () => {
  return (
    <div className=" flex justify-center items-center flex-wrap mt-56 ">
      {/* First Row */}
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://d2exd72xrrp1s7.cloudfront.net/www/000/1k5/19/19ivmtc3tgg0c3630d2tfg8ck3w0dm1is-uhi40089539/0?width=768&height=576&crop=true"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Морската Градина</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://visit.varna.bg/bg/Sea_Garden.html" target="_blank">
                  Научете повече
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Add more cards here as needed */}
      </div>

      {/* Second Row */}
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://m.netinfo.bg/media/images/29509/29509887/640-420-katedralata-vyv-varna-edin-simvol-na-130-godini.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-center text-gray-200">
              "Успение Богородично"
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a
                  target="_blank"
                  href="https://visit.varna.bg/bg/church_dormission.html"
                >
                  Научете повече
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Add more cards here as needed */}
      </div>
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://visit.varna.bg/media/cache/a4/86/thumb7_DJI_0598.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Плаж "Залтни Пясъци"</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://visit.varna.bg/bg/golden_sands.html" target="_blank">
                  Научете повече
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Add more cards here as needed */}
      </div>
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://blog.stefanika.com/wp-content/uploads/2017/08/template_blog_BULGARIA-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Побити камани</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://visit.varna.bg/bg/stone_forest.html" target="_blank">
                  Научете повече
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Add more cards here as needed */}
      </div>
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://archaeo.museumvarna.com/uploads/pages/real/a8dc94051c7099b5136d5dd55bebfeac1362b709.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Археологически музей</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://visit.varna.bg/bg/arhaeological_museum.html" target="_blank">
                  Научете повече
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Add more cards here as needed */}
      </div>
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://www.btsbg.org/sites/default/files/obekti/1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Римски терми</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://visit.varna.bg/bg/roman_thermae.html" target="_blank">
                  Научете повече
                </a>
              </button>
            </div>
          </div>
        </div>
        {/* Add more cards here as needed */}
      </div>

      {/* Add more rows as needed */}
    </div>
  );
};

export default Cards;
