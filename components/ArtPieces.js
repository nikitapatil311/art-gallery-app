import ArtPiecesPreview from "./ArtPiecesPreview";
import { useState } from "react";

export default function ArtPieces({ pieces }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  const toggleFavorite = (slug) => {
    if (artPiecesInfo.includes(slug)) {
      setArtPiecesInfo(artPiecesInfo.filter((favorite) => favorite !== slug));
    } else {
      setArtPiecesInfo([...artPiecesInfo, slug]);
    }
  };
  return (
    <>
      <ul>
        {pieces.map((piece) => (
          <ArtPiecesPreview
            key={piece.slug}
            title={piece.name}
            artist={piece.artist}
            imageSource={piece.imageSource}
            slug={piece.slug}
            isFavorite={artPiecesInfo.includes(piece.slug)}
            onToggleFavorite={() => toggleFavorite(piece.slug)}
          />
        ))}
      </ul>
    </>
  );
}
