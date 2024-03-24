import { Link } from "react-router-dom";
import wave from "../assets/wave.svg";

const Hero = () => {

  return (
    <div className="flex relative justify-center flex-col items-center min-h-[calc(100vh-186px)]">
      <div className="hero ">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">
              Welcome to <span class="text-5xl bg-300% font-bold bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">ByteBlaze</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/blog" className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
              ><span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  <button>Read More</button>
                </span>
              </Link>
              <Link to="/bookmark" className="relative inline-block px-4 py-2 font-medium group cursor-pointer"
              ><span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  <button>Bookmarks</button>
                </span>
              </Link>
              
              
            </div>
          </div>
        </div>
      </div>
      <img className="w-full absolute bottom-0" src={wave} alt="" />
    </div>
  );
};

export default Hero;
