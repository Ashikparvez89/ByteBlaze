import { Link } from "react-router-dom";


const EmptyPage = ({massage, address, labe}) => {
    return (
        <div className="min-h-[calc(100vh-186px)] flex flex-col justify-center items-center">
            <p className="text-[#868484] text-2xl font-bold my-4 uppercase">{massage}</p>
            <Link to={address} className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
              ><span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  <button>Read More</button>
                </span>
              </Link>
              <label className="mt-5 text-[#868484] text-2xl font-bold my-4 uppercase" htmlFor="Go to blog">{labe}</label>
        </div>
    );
};

export default EmptyPage;