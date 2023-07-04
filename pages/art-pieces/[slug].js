import ArtPieceDetails from "../../components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPiecesDetailPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const pieceIndex = pieces.findIndex((piece) => piece.slug === slug);
  const piece = pieces[pieceIndex];
  if (!piece) return <div>Loading...</div>;

  //console.log(pieces);

  return (
    <ArtPieceDetails
      imageSource={piece.imageSource}
      title={piece.title}
      artist={piece.artist}
      year={piece.year}
      genre={piece.genre}
    />
  );
}
