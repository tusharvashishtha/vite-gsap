import React from 'react';
import Pineapple from '../public/Pineapple.png';
import zero from '../public/zero.png';

const ProductDetails = () => {
  return (
    <div className="min-h-screen w-full flex items-center overflow-hidden bg-green-500 justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 md:gap-0">
        
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">Pineapple bliss</h2>
            <p className="text-sm sm:text-base md:text-[1vw]">
              We get it, Black Cherry tree. Your wood is used to make the finest furniture and cabinetry. 
              You could say your wood is premium. Well la-di-da. We’d hate to feed your ego more. 
              But black cherry is also a delicious flavor of Carbliss, a premium ready to drink cocktail.
            </p>
          </div>

          {/* Nutrition Icons */}
          <div className="flex gap-3 flex-wrap">
            <img className="w-14 sm:w-16" src={zero} alt="0 carbs" />
            <img className="w-14 sm:w-16" src={zero} alt="0 sugar" />
            <img className="w-14 sm:w-16" src={zero} alt="100 calories" />
            <img className="w-14 sm:w-16" src={zero} alt="Gluten free" />
          </div>

          {/* Rating and Price */}
          <div className="flex flex-col gap-2">
            <div className="p-3 h-12 w-24 bg-zinc-400 rounded-full flex items-center justify-center">
              <span>⭐ 4.2</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">
              <span>₹99</span>
            </div>
          </div>

          {/* Add to Bag Button */}
          <div className="w-full flex justify-center sm:justify-start">
            <button className="py-3 px-6 sm:w-[50%] rounded-2xl bg-zinc-600 text-white text-sm sm:text-base">
              Add to bag
            </button>
          </div>
        </div>

        {/* Right Side - Product Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img className="w-[80%] md:w-[30%]" src={Pineapple} alt="Pineapple Bliss" />
        </div>
      </div>

      
    </div>
  );
};

export default ProductDetails;
