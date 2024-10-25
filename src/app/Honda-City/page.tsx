import Link from "next/link";
export default function City() {
  return (
    <div className="bg-zinc-200  ">
      <div>
        <h1 className="flex justify-center text-3xl font-semibold  underline ">
          Honda City 2024 Price in Pakistan, Images, Reviews & Specs
        </h1>
        <img className="my-10 mx-auto w-1/3  " src="/Cityc.webp" alt="" />
      </div>
      <div className="m-10 flex justify-center ">
        <button className="bg-blue-800 text-white rounded-md  w-40 h-14 mx-4">
          Book a Test Drive
        </button>
        <button className=" w-48 h-14 mx-4 text-blue-700 border-2 border-blue-700 rounded-md  ">
          Request Bank Finace
        </button>
        <button className=" w-40 h-14 mx-4 text-blue-700 border-2 border-blue-700 rounded-md">
          Visit Place
        </button>
        <button className=" w-40 h-14 mx-4  text-blue-700 border-2 border-blue-700 rounded-md">
          Car Inspection
        </button>
      </div>
      <h1 className="flex justify-center text-4xl">Vehicle Description</h1>
      <div className="flex justify-center py-4 ">
        <h2 className="font-bold ">Number of Doors:</h2>
        <h3 className="px-1 mr-4">4</h3>
        <h2 className="font-bold ">Engine:</h2>
        <h3 className="px-1 mr-4">1300 CC</h3>
        <h2 className="font-bold ">Condition:</h2>
        <h3 className="px-1 mr-4">5.5 / 10</h3>
        <h2 className="font-bold ">Driven:</h2>
        <h3 className="px-1 mr-4">9,500 KM</h3>
        <h2 className="font-bold ">Suspension Type:</h2>
        <h3 className="px-1 mr-4">Soft Suspension</h3>
      </div>
      <div className="flex justify-center  ">
        <h2 className="font-bold ">AVG:</h2>
        <h3 className="px-1 mr-4">14 km per litre</h3>
        <h2 className="font-bold ">Transmission:</h2>
        <h3 className="px-1 mr-4">Automatic</h3>
        <h2 className="font-bold ">Fuel type:</h2>
        <h3 className="px-1 mr-4">High Octane</h3>
      </div>
      <h1 className="flex justify-center mt-8 text-green-600 text-2xl font-semibold ">
        PKR 25,00,000
      </h1>
      <div className="flex justify-center items-center m-auto h-14 w-40 my-12 bg-blue-800 rounded-md text-white">
        <button>
          <Link href="Payment">Make Payment</Link>
        </button>
      </div>
    </div>
  );
}
