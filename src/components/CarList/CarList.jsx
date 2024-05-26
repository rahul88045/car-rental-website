import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";

const carList = [
  {
    name: "Tata-Ranchi",
    priceSedan: 1399,
    priceMuv: 2199,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Tata-Kolkata",
    priceSedan: 3999,
    priceMuv: 4999,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Tata-Bokaro",
    priceSedan: 2499,
    priceMuv: 3499,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Tata-Dhanbad",
    priceSedan: 2999,
    priceMuv: 3999,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Tata-Asansol",
    priceSedan: 3999,
    priceMuv: 4999,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Tata-Hazaribagh",
    priceSedan: 4499,
    priceMuv: 5499,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Tata-Rourkela",
    priceSedan: 5999,
    priceMuv: 6999,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "Tata-Patna",
    priceSedan: 8999,
    priceMuv: 10999,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "Tata-Ckp",
    priceSedan: 2499,
    priceMuv: 2999,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <>
    <span id="cars"></span>
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          One-Way Package
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Prices may vary as per situation*
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              // <div
              //   data-aos="fade-up"
              //   // data-aos-delay={data.aosDelay}
              //   className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              //   key={data.name}
              // >
              //   <div className="w-full h-[120px]">
              //     <img
              //       src={data.image}
              //       alt=""
              //       className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
              //     />
              //   </div>
              //   <div className="space-y-2">
              //     <h1 className="text-primary font-semibold">{data.name}</h1>
              //     <div className="flex justify-between items-center text-xl font-semibold">
              //       <p>${data.price}/Day</p>
              //       <a href="#">Details</a>
              //     </div>
              //   </div>
              //   <p className="text-xl font-semibold absolute top-0 left-3">
              //     12Km
              //   </p>
              // </div>

              <div className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                data-origin="Jamshedpur"
                data-destination="Ranchi"
                key={data.name}>
                <h3 className="text-primary font-semibold">{data.name} ↕️</h3>
                {/* <button className="">Book</button> */}
                {/* <p className="text-xl font-semibold absolute top-0 left-3">Sedan: ₹1799 + Toll</p>
                <p className="text-xl font-semibold absolute top-0 left-3">MUV: ₹2299 + Toll</p> */}
                <ul>
                  <li>Sedan: ₹{data.priceSedan} + Toll</li>
                  <li>MUV: ₹{data.priceMuv} + Toll</li>
                </ul>
                <span className="text-sm font-semibold">*GST Not Included</span>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        {/* <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div> */}
      </div>
    </div>
    </>
    
  );
};

export default CarList;
