import { MainLayout } from '@/layouts/MainLayout';
import { HomeView, TrendingView, MoviesView, TelevisionView, GenreView, SearchView } from '@/views';
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
        <Route path="/tv">
          <Route path="category/:listType" element={<TelevisionView />} />
          <Route path="tv/:id" element={<HomeView />} />
        </Route>
        <Route path="/trending/:mediaType" element={<TrendingView />} />
        <Route path="/genre/:mediaType/:genreId" element={<GenreView />} />
        <Route path="/search/:searchType" element={<SearchView />} />
        {/*<Route path="/movie/:id" element={<MovieView />}>*/}
        {/*<Route path="credits" element={<CreditsView />} />*/}
        {/*<Route path="reviews" element={<ReviewsView />} />*/}
        {/*</Route>*/}
      </Route>
      {/*<Route path="*" element={<ErrorView />} />*/}
    </Routes>
  );
};