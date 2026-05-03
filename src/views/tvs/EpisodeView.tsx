import { ImageGrid } from "@/components";
import { type SeasonResponse, TV_ENDPOINT } from "@/core";
import { useTmdb } from "@/hooks";
import { useParams } from "react-router-dom";

export const EpisodeView = () => {
  const { id, seasonNumber } = useParams();
  const { data } = useTmdb<SeasonResponse>(
    `${TV_ENDPOINT}/${id}/season/${seasonNumber}`,
    {},
    [id, seasonNumber],
  );

  const gridData = (data?.episodes ?? []).map((result) => ({
    id: result.id,
    imagePath: result.still_path,
    primaryText: result.name,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="p-5">
      <button
        className="inline-block px-6 py-3 rounded-2xl transition font-medium shadow-lg bg-blue-600 hover:bg-blue-500 text-white mb-5"
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <h2 className="text-2xl font-bold mb-6">Episodes</h2>
      {data.episodes?.length ? (
        <ImageGrid results={gridData} />
      ) : (
        <p className="text-gray-400 text-center">No seasons available.</p>
      )}
    </section>
  );
};
