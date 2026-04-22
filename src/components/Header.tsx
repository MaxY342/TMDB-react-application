import { SideBar } from '@/components/SideBar';
import { LinkGroup } from './LinkGroup';

export const Header = () => {
    return (
        <header>
            <nav className="flex items-center gap-4 bg-gray-800 p-4">
                <SideBar />
                <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
                <LinkGroup
                    options={[
                        { label: 'Home', to: '/' },
                        { label: 'Movies', to: '/movies/category/now_playing', match: ['/movies/category/now_playing', '/movies/category/popular', '/movies/category/top_rated', '/movies/category/upcoming'] },
                        { label: 'TV', to: '/tv/category/airing_today', match: ['/tv/category/airing_today', '/tv/category/on_the_air', '/tv/category/popular', '/tv/category/top_rated'] },
                        { label: 'Trending', to: '/trending/movie', match: ['/trending/movie', '/trending/tv'] },
                        { label: 'Genres', to: '/genre/movie/28', match: ['/genre/movie/:genreId', '/genre/tv/:genreId'] },
                        { label: 'Search', to: '/' },
                    ]}
                />
            </nav>
        </header>
    );
}