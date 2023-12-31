import ArtPieces from "../../components/ArtPieces";

export default function Favorites({ favoritePieces }) {
  // Filter for favorite art pieces using artPiecesInfo state
  if (!favoritePieces) {
    return <div>Loading...</div>;
  }
  if (favoritePieces.error) {
    return <div>Error: {favoritePieces.error.message}</div>;
  }

  return (
    <>
      <h1>Favorites Page</h1>

      <ArtPieces pieces={favoritePieces} />
    </>
  );
}
