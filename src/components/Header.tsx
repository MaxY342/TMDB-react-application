import { Link } from '../components/Link';
import { SideBar } from '../components/SideBar';

export const Header = () => {
    return (
        <header>
            <nav className="flex items-center gap-4 bg-gray-800 p-4">
                <SideBar />
                <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
                <Link to="/">Home</Link>
                <Link to="/trending/movie">Trending</Link>
                <Link to="/tv">Search</Link>
            </nav>
        </header>
    );
}