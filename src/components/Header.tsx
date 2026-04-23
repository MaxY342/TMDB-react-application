import { ButtonGroup, SideBar } from "@/components";
import { LinkGroup } from "./LinkGroup";
import { SearchBar } from "./SearchBar";
import { lazy, useState } from "react";

export const Header = () => {
  const [query, setQuery] = useState("");
  return (
    <header>
      <nav className="flex items-center gap-4 bg-gray-800 p-4">
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
              to: "/trending/movie",
              match: ["/trending/movie", "/trending/tv"],
            },
            {
              label: "Genres",
              to: "/genre/movie/28",
              match: ["/genre/movie/:genreId", "/genre/tv/:genreId"],
            },
          ]}
        />
        <SearchBar value={query} onChange={setQuery} />
        <ButtonGroup>
          value={}
          options={[
            { label: "Movie", value: "movie" },
            { label: "TV", value: "tv" },
            { label: "Person", value: "person" },
          ]}
          onClick={(value) => {
            // Handle search type change
          }
        </ButtonGroup>
      </nav>
    </header>
  );
};
