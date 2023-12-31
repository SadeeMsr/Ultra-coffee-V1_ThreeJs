import logo from '../assets/logo.png'


export default function NavBar() {
  return (
    <nav>
      <div className="w-full flex justify-between mt-5">
        <img
          className="w-20"
          src={logo}
        />

        <button className="shadow-md relative px-5 py-2 font-medium text-white group">
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-orange-500 group-hover:bg-orange-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-orange-700 group-hover:bg-orange-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-orange-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-orange-400 -rotate-12"></span>
          <span className="relative">Products</span>
        </button>
      </div>
    </nav>
  );
}
