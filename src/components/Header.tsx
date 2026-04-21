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
                        { label: 'Trending', to: '/trending/movie', match: ['/trending/movie', '/trending/tv'] },
                        { label: 'Search', to: '/tv' },
                    ]}
                />
            </nav>
        </header>
    );
}