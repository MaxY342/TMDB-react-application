import { MainLayout } from '@/layouts/MainLayout';
import { HomeView, TrendingView, MoviesView } from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route element={<MainLayout />}>
        <Route path="/movies">
          <Route path="category/:listType" element={<MoviesView />} />
          <Route path="movie/:id" element={<HomeView />} />
        </Route>
        <Route path="/tv" element={<HomeView />}>
          <Route path="category/:listType" element={<HomeView />} />
          <Route path="tv/:id" element={<HomeView />} />
        </Route>
        <Route path="/trending/:mediaType" element={<TrendingView />} />
        {/*<Route path="/search" element={<SearchView />} />*/}
        {/*<Route path="/movie/:id" element={<MovieView />}>*/}
        {/*<Route path="credits" element={<CreditsView />} />*/}
        {/*<Route path="reviews" element={<ReviewsView />} />*/}
        {/*</Route>*/}
      </Route>
      {/*<Route path="*" element={<ErrorView />} />*/}
    </Routes>
  );
};