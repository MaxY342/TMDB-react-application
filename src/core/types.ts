export type GridData = {
  id: number;
  imagePath: string | null;
  primaryText: string;
  secondaryText?: string;
};

export type MediaResponse = {
  results: Array<{
    id: number;
    original_title?: string;
    name?: string;
    poster_path?: string;
    profile_path?: string;
  }>;
  total_pages: number;
};

export type CreditsResponse = {
  cast: Array<{
    id: number;
    name: string;
    profile_path: string | null;
    character: string;
  }>;
};

export type MovieResponse = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: string;
  videos?: {
    results: Array<{
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
};

export type MoviesResponse = {
  results: Array<{
    id: number;
    original_title: string;
    poster_path: string;
  }>;
  total_pages: number;
};

export type ReviewsResponse = {
  results: Array<{
    id: string;
    author: string;
    content: string;
  }>;
};

export type SearchResponse = {
  results: Array<{
    id: number;
    name: string;
    profile_path: string | null;
  }>;
  total_pages: number;
  total_results: number;
};

export type GenresResponse = {
  genres: Array<{
    id: number;
    name: string;
  }>;
};