import { Link } from '@/components/Link';
import { SideBar } from '@/SideBar';

export const Header = () => {
    return (
        <SideBar />
        <Link to="/">Home</Link>
        <Link to="/movies">NowPlaying</Link>
        <Link to="/tv">Search</Link>
        <Link to="/trending">Trending</Link>
    );
}