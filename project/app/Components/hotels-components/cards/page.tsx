import React from "react";

const Cards = () => {
  return (
    <div className=" flex justify-center items-center flex-wrap mt-56 ">
      {/* First Row */}
      <div className="flex justify-center">
        <div className="card w-96 max-h-96 glass m-8 bg-[#1d1b69]">
          <figure>
            <img
              src="https://www.hotel.paralax-bg.com/hotel/rec/16.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Хотел Паралакс</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://www.hotel.paralax-bg.com/index.html" target="_blank">
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
              src="https://www.hotelgranivan.com/wp-content/uploads/2021/02/38INP_7028web.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-center text-gray-200">
              Хотел Гран Иван
            </h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a
                  target="_blank"
                  href="https://www.hotelgranivan.com/"
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
              src="https://www.hotel-color.eu/phpThumb/phpThumb.php?w=600&h=500&zc=1&q=90&src=/files/actual_images/14_INP_8347_net_724.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Хотел Колор</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://www.hotel-color.eu/bg/" target="_blank">
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
              src="https://hotelroyalvarna.bg/wp-content/uploads/recepcia-1-748x499.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Хотел Роял</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://hotelroyalvarna.bg/" target="_blank">
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
              src="https://dimyat.rosslyn-hotels.com/uploads/roomgalleryfile/images/originals/Suite%20-%20living%20room.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Рослин Димят Хотел</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://dimyat.rosslyn-hotels.com/" target="_blank">
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
              src="https://hoteldionis.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGaG90ZWxkaW9uaXMuY29tJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE2JTJGMTElMkZob3RlbF9uaWdodDEtZTE1NzQxMDQ0MzkyNzMuanBnJmNhY2hlTWFya2VyPTE2OTg2NzIyODUtMzEzNDQxJnRva2VuPWU4NDQ2YWE2ZTE4ZjA4NTU.q.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title pb-3 text-2xl text-gray-200">Хотел Дионис</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href="https://hoteldionis.com/" target="_blank">
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
