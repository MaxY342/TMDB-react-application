import { Link } from "@/components";
import { IoMenu } from "react-icons/io5";

export const SideBar = () => {
  return (
    <div className="group">
      <button className="group bg-gray-900 text-white p-[10px] text-[16px] border-none z-[1] no-underline rounded-[10px]">
        <IoMenu />
      </button>
      <div className="fixed top-0 left-0 h-screen w-0 flex flex-col group-hover:w-md transition-[width] duration-800 ease-in-out bg-gray-800 z-50 overflow-hidden whitespace-nowrap">
        <Link to="/">Home</Link>
        <Link to="/movies/category/now_playing">Movies</Link>
        <Link to="/tv/category/airing_today">Tv</Link>
        <Link to="/trending/movies">Trending</Link>
        <Link to="/genre/movies/28">Genres</Link>
      </div>
      <div className="fixed inset-0 bg-black/50 opacity-0 group-hover:backdrop-blur-xs group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-40"></div>
    </div>
  );
};
