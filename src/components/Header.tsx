import { Link } from '../components/Link';
import { SideBar } from '../components/SideBar';

export const Header = () => {
    return (
        <header>
            <nav>
                <SideBar />
                <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
                <Link to="/">Home</Link>
                <Link to="/movies">NowPlaying</Link>
                <Link to="/tv">Search</Link>
                <Link to="/trending">Trending</Link>
            </nav>
        </header>
    );
}