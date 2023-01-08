import React from "react";
import CalturalData from "./CalturalData";

const HomeCulture = () => {
  return (
    <div className="flex">
      <div className="px-3">
        <h1 className="py-4 font-bold">Culture and LifeStyle</h1>
        <div>
          <div className="flex">
            <div>
              <img
                src="https://static01.nyt.com/images/2023/01/08/multimedia/05ny-la-1-112a/05ny-la-1-112a-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                alt="/"
              />
              <h1>CULTURAL STUDIES</h1>
              <h1>Is New York Turning Into Los Angeles?</h1>
              <p>
                Authoritatively negotiate robust products via visionary
                paradigms. Objectively architect unique models and just in time
                helllo and hello
              </p>
            </div>
            <div className="w-px h-full bg-black">hello</div>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <CalturalData />
      </div>
    </div>
  );
};

export default HomeCulture;
