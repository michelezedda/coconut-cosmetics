import React from "react";

function ProductCard({ img, name, description }) {
  return (
    <>
      <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
        <img className="w-[100%]" src={img} alt={name} />
        <div className="flex justify-between items-center p-6">
          <h3 className="font-medium text-xl">{name}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;