import ArtPieces from "../../components/ArtPieces";
import styled from "styled-components";

const H1 = styled.h1`
font-family: cursive;
    display: flex;
    margin-left: 50%;
    color: black;
}
`;

export default function ArtPiecesPage({ pieces }) {
  return (
    <>
      <H1>Art Piece List</H1>

      <ArtPieces pieces={pieces} />
    </>
  );
}
