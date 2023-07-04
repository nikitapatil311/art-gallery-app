import ArtPiecesPreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
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
          />
        ))}
      </ul>
    </>
  );
}
