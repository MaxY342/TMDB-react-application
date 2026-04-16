import { Link } from '../components/Link';

export const SideBar = () => {
    return (
        <div className="w-64 bg-gray-800 text-gray-300 h-screen p-4 group">
            <button>Menu</button>
            <div className="hidden group:hover:block fixed top-0 h-screen w-[300px] bg-[#2f2f2f] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[3] overflow-hidden whitespace-nowrap">
                <Link to="/">Home</Link>
                <Link to="/movies">NowPlaying</Link>
                <Link to="/tv">Search</Link>
                <Link to="/trending">Trending</Link>
            </div>
        </div>
    );
};