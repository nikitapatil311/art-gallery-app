import ArtPieces from "../../components/ArtPieces";

export default function Favorites({ favoritePieces }) {
  // Filter for favorite art pieces using artPiecesInfo state

  return (
    <>
      <h1>Favorites Page</h1>

      <ArtPieces pieces={favoritePieces} />
    </>
  );
}
