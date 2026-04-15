import { Link } from '@/components/Link';

export const SideBar = () => {
    return (
        <div className="w-64 bg-gray-800 text-gray-300 h-screen p-4">
            <button>Menu</button>
            <div className="hidden fixed top-0 h-screen w-[300px] bg-[#2f2f2f] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[3] overflow-hidden whitespace-nowrap">
                <Link className="text-white py-4 px-4 no-underline" to="/">Home</Link>
                <Link className="text-white py-4 px-4 no-underline" to="/movies">NowPlaying</Link>
                <Link className="text-white py-4 px-4 no-underline" to="/tv">Search</Link>
                <Link className="text-white py-4 px-4 no-underline" to="/trending">Trending</Link>
            </div>
        </div>
    );
};