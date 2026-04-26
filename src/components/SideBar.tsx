import { Link } from '../components/Link';

export const SideBar = () => {
    return (
        <div className='group'>
            <button className="group bg-[#191919] text-white p-[10px] text-[16px] border-none z-[1] no-underline rounded-[10px]">Menu</button>
            <div className="fixed top-0 left-0 h-screen w-0 flex flex-col group-hover:w-md transition-[width] duration-800 ease-in-out bg-[#2f2f2f] z-50 overflow-hidden whitespace-nowrap">
                <Link to="/">Home</Link>
                <Link to="/movies/category/now_playing">Movies</Link>
                <Link to="/tv/category/airing_today">Tv</Link>
                <Link to="/trending/movie">Trending</Link>
            </div>
            <div className="fixed inset-0 bg-black/50 opacity-0 group-hover:backdrop-blur-xs group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-40"></div>
        </div>
    );
};