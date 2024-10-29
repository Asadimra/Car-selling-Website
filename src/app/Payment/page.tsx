import Link from "next/link";
export default function Payment() {
  return (
    <div>
      <h1 className="mt-10 text-5xl font-semibold text-center uppercase ">
        Enter your details
      </h1>
      <div>
        <form className="mt-14 flex gap-10 justify-center items-center flex-col  ">
          <input
            type="name"
            className="p-2 h-12 rounded-md w-2/5 border border-red-300"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            className="p-2 h-12 rounded-md w-2/5 border border-red-300"
            placeholder="Enter your Email"
          />
          <input
            type="card number"
            className="p-2 h-12 rounded-md w-2/5 border border-red-300"
            placeholder="Enter your Card Number"
          />
          <input
            type="phone number"
            className="p-2 h-12 rounded-md w-2/5 border border-red-300"
            placeholder="Enter your Phone Number"
          />
          <input
            type="adress"
            className="p-2 h-12 rounded-md w-2/5 border border-red-300"
            placeholder="Enter your Adress"
          />
          <button className="rounded-md p-3 bg-blue-800 text-white hover:bg-blue-600">
            <Link href="Thankyou">Place your Order</Link>
          </button>
        </form>
      </div>
    </div>
  );
}
