import { ButtonGroup, SideBar, LinkGroup, SearchBar } from "@/components";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    searchType: "movie",
  });
  const [searchType, setSearchType] = useState("movie");
  const query = searchParams.get("query") || "";
  const location = useLocation();
  const navigate = useNavigate();
  const onSearch = (query: string) => {
    navigate({
      pathname: "/search",
      search: `?query=${encodeURIComponent(query)}&searchType=${searchType}`,
    });
  };
  return (
    <header>
      <nav className="flex bg-gray-800 p-4 justify-between">
        <div className="flex items-center gap-4">
          <SideBar />
          <h1 className="text-2xl font-bold text-white-900">TMDB Explorer</h1>
          <LinkGroup
            options={[
              {
                label: "Movies",
                to: "/movies/category/now_playing",
                match: [
                  "/movies/category/now_playing",
                  "/movies/category/popular",
                  "/movies/category/top_rated",
                  "/movies/category/upcoming",
                ],
              },
              {
                label: "TV",
                to: "/tv/category/airing_today",
                match: [
                  "/tv/category/airing_today",
                  "/tv/category/on_the_air",
                  "/tv/category/popular",
                  "/tv/category/top_rated",
                ],
              },
              {
                label: "Trending",
                to: "/trending/movies",
                match: ["/trending/movies", "/trending/tv"],
              },
              {
                label: "Genres",
                to: "/genre/movies/28",
                match: ["/genre/movies/:genreId", "/genre/tv/:genreId"],
              },
            ]}
          />
        </div>
        <div className="flex items-center gap-4">
          <SearchBar value={query} onChange={(value) => onSearch(value)} />
          <ButtonGroup
            value={searchType}
            options={[
              { label: "Movies", value: "movie" },
              { label: "TV", value: "tv" },
              { label: "Person", value: "person" },
            ]}
            onClick={(value) => {
              setSearchType(value);
              if (location.pathname === "/search") {
                setSearchParams({ query, searchType: value });
              }
            }}
          />
        </div>
      </nav>
    </header>
  );
};
