import { ImageGrid } from "@/components";
import { PERSON_ENDPOINT, type PersonResponse } from "@/core";
import { useTmdb } from "@/hooks";
import { useParams } from "react-router-dom";

export const CareerView = () => {
  const { id } = useParams();
  const { data } = useTmdb<PersonResponse>(
    `${PERSON_ENDPOINT}/${id}`,
    { append_to_response: "combined_credits" },
    [id],
  );

  const gridData = (data?.combined_credits?.cast ?? []).map((result) => ({
    id: `${String(result.id)}-${result.poster_path}-${result.character}`,
    imagePath: result.poster_path,
    primaryText: result.title,
    secondaryText: result.character,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold mb-6">Career</h2>
      {data.combined_credits?.cast.length ? (
        <ImageGrid results={gridData} />
      ) : (
        <p className="text-gray-400 text-center">No career entries available.</p>
      )}
    </section>
  );
};
