export default function Navbar() {
  return (
    <header>
      <nav className="bg-black  my-6">
        <div className="flex justify-between mx-24 text-white">
          Download App via Sms
            <ul className="flex">
              <li className="px4">Sign up</li>
              <li className="px-4">Sign in</li>
            </ul>
        </div>    
        <div className="flex justify-between mx-24 ">
          <img
            className="flex w-40 h-19 mx-2 my-3 "
            src="/Pk-Logo.png " alt=""/>
          <ol className="flex items-center ">
            <li className="p-5 text-white ">
              <a href="">Used Car</a>
            </li>
            <li className="p-5 text-white">
              <a href="">New Car</a>
            </li>
            <li className="p-5 text-white">
              <a href="">Bikes</a>
            </li>
            <li className="p-5 text-white">
              <a href="">Auto Store</a>
            </li>
            <li className="p-5 text-white">
              <a href="">Vedio</a>
            </li>
            <li className="p-5 text-white">
              <a href="">Forums</a>
            </li>
            <li className="p-5 text-white">
              <a href="">Blog</a>
            </li>
            <li className="p-5 text-white">
              <a href="">More</a>
            </li>
            <li>
              <select className="bg-red-500 h-9 w-40 text-white text-center">
                <option value="">Post and AD</option>
                <option value="">Sell your Car</option>
                <option value="">Sell your bike</option>
              </select>
            </li>
          </ol>
        </div>
      </nav>
    </header>
  );
}
