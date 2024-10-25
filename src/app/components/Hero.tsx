import Link from "next/link";
export default function Hero() {
  return (
    <div>
      <section>
        <div className="flex justify-center text-3xl font-serif">
          <h1>Sell Your Car on PakWheels and Get the Best Price </h1>
        </div>
        <div className="flex justify-center gap-32  my-5">
          <div className="  h-60  ">
            <div className="my-7 mx-9 text-xl ">
              <h2>Post Your Ad on Pak Wheels</h2>
            </div>
            <div className="mx-12">
              <p>Post Your add for Free in 3 Easy Step</p>
              <p>Get Genuine offers from Verified Buyers</p>
              <p>Sell your Car Fast at the Best Price</p>
            </div>
            <div className="bg-red-500 w-40 h-10 text-center my-6 mx-20 py-2 rounded-md ">
              <button>Post Your Ad</button>
            </div>
          </div>
          <div className=" h-60">
            <div className="my-7 mx-9 text-xl ">
              <h2>Try PakWheels Sell It For Me</h2>
            </div>
            <div className="mx-12">
              <p>Dedicated Sales Expert to Sell your Car</p>
              <p>We Bargain For you and share the Best Offer</p>
              <p>We ensure Safe & Secure Transaction</p>
            </div>
            <div className="bg-blue-400 w-40 h-10 text-center my-6 mx-20 py-2 rounded-md ">
              <button>Register your Car</button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-96 w-3/4 bg-zinc-100 mx-40  ">
        <div className=" flex justify-between px-4 ">
          <h2 className="text-xl ">Feature New Cars</h2>
          <a className="text-blue-400" href="">
            View all Cars
          </a>
        </div>
        <div>
          <ul className="flex my-4">
            <li className="px-5 underline underline-offset-8 decoration-blue-800 ">
              <a href="">Popular</a>
            </li>
            <li className="px-5">
              <a href="">Upcoming</a>
            </li>
            <li className="px-5">
              <a href="">Newly Launched</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-6 h-96 bg- ">
          <div className="h-60  bg-white">
            <img className="h-36 w-60   flex" src="/corolla.jpg" alt="" />
            <Link
              className="flex justify-center font-semibold text-blue-700 hover:text-blue-400" 
              href="Toyota-Corolla"
            >
              Toyota Corolla
            </Link>
            <h4 className="flex justify-center text-green-400">
              PKR 59.7-75.5 Lacs
            </h4>
            <h5 className="flex justify-center text-gray-400">621 Reviews</h5>
          </div>
          <div className="h-60   bg-white">
            <img className="h-36 w-60 flex" src="/alto.png" alt="" />

            <Link
              className="flex justify-center font-semibold text-blue-700 hover:text-blue-400"
              href="Suzuki-Alto"
            >
              Suzuki Alto
            </Link>
            <h4 className="flex justify-center text-green-400">
              PKR 23.3-30.5 Lacs
            </h4>
            <h5 className="flex justify-center text-gray-400">199 Reviews</h5>
          </div>
          <div className="h-60  bg-white">
            <img className="h-36 w-60 flex" src="/Honda.jpg" alt="" />
            <Link
              className="flex justify-center font-semibold text-blue-700 hover:text-blue-400"
              href="Honda-City"
            >
              Honda City
            </Link>
            <h4 className="flex justify-center text-green-400">
              PKR 46.5-58.5 Lacs
            </h4>
            <h5 className="flex justify-center text-gray-400">458 Reviews</h5>
          </div>
          <div className="h-60   bg-white ">
            <img className="h-36  w-60 flex" src="/Civic.jpg" alt="" />
            <Link
              className="flex justify-center font-semibold text-blue-700 hover:text-blue-400"
              href="Honda-Civic"
            >
              Honda Civic
            </Link>
            <h4 className="flex justify-center text-green-400">
              PKR 86.6-90.0 Lacs
            </h4>
            <h5 className="flex justify-center text-gray-400">357 Reviews</h5>
          </div>
        </div>
      </section>
    </div>
  );
}