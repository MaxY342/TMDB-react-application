import { Link } from '../components/Link';

export const SideBar = () => {
    return (
        <div className='group'>
            <button className="group bg-[#191919] text-white p-[10px] text-[16px] border-none z-[1] no-underline rounded-[10px]">Menu</button>
            <div className="hidden group-hover:grid fixed top-0 h-screen w-[300px] bg-[#2f2f2f] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.2)] z-[3] overflow-hidden whitespace-nowrap">
                <Link to="/">Home</Link>
                <Link to="/movies">NowPlaying</Link>
                <Link to="/tv">Search</Link>
                <Link to="/trending">Trending</Link>
            </div>
        </div>
    );
};