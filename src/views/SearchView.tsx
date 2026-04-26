import { ImageGrid, Pagination } from '@/components';
import { SEARCH_ENDPOINT } from '@/core/constants';
import type { MediaResponse } from '@/core/types';
import { useDebounce, useTmdb } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const SearchView = () => {
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const debouncedQuery = useDebounce(searchParams.get('query'), 500);
  console.log('searchParams.get("query")', searchParams.get('query'));
  console.log('searchParams.get("searchType")', searchParams.get('searchType'));
  const { data } = useTmdb<MediaResponse>(`${SEARCH_ENDPOINT}/${searchParams.get('searchType')}`, { query: debouncedQuery, page }, [debouncedQuery, page, searchParams.get('searchType')]);

  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  const gridData = (data?.results ?? []).map((result) => ({
    id: result.id,
    imagePath: result.profile_path || result.poster_path || null,
    primaryText: result.name || result.original_title || '',
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="max-w-[1200px] mx-auto p-10 space-y-5">
      <ImageGrid results={gridData} />
      {data.results.length ? (
        <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
      ) : (
        <p className="text-center text-gray-400">No search results found</p>
      )}
    </section>
  );
};