import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <h1>Art Piece List</h1>

      <ArtPieces pieces={pieces} />
    </>
  );
}
