export default function Footer(){
    return(
        <div className="bg-neutral-800 text-white  h-28 pt-4 ">
            <h1 className="flex justify-center  items-center ">copyright &copy; All Reserved</h1>
            <h2 className="flex justify-end mx-14">Click to Connect</h2>
            <div className="flex justify-between mx-10">
            <h2>Made by Asad Imran</h2>
           <button className="bg-blue-800 hover:bg-blue-500 w-36 h-12 mb-4 rounded-lg "><a href="https://www.linkedin.com/in/asad-imran-6b5a652b7/">Linked in</a></button> 
           </div>
        </div>
    )
}