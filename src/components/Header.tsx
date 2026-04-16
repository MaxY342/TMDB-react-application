import { Link } from '../components/Link';
import { SideBar } from '../components/SideBar';

export const Header = () => {
    return (
        <div>
            <SideBar />
            <Link to="/">Home</Link>
            <Link to="/movies">NowPlaying</Link>
            <Link to="/tv">Search</Link>
            <Link to="/trending">Trending</Link>
        </div>
    );
}