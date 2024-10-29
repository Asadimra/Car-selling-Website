export default function Navbar() {
  return (
    <header>
      <nav className="bg-black  my-6">
        <div className="flex justify-between mx-24 text-white">
          Download App via Sms
            <ul className="flex">
              <li className="mx-2 hover:text-red-600"><a href="">Sign up</a></li>
              <li className=" hover:text-red-600">Sign in</li>
            </ul>
        </div>    
        <div className="flex justify-between mx-24 ">
          <img
            className="flex w-40 h-19 mx-2 my-3 "
            src="/Pk-Logo.png " alt=""/>
          <ol className="flex items-center ">
            <li className="p-5 text-white hover:text-red-600 ">
              <a href=".html">Used Car</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">New Car</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">Bikes</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">Auto Store</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">Vedio</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">Forums</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">Blog</a>
            </li>
            <li className="p-5 text-white hover:text-red-600">
              <a href=".html">More</a>
            </li>
            <li>
              <select className="bg-red-500 h-9 w-28 text-white text-center">
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
