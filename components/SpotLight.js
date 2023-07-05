import Image from "next/image";
//import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
//import ArtPieces from "./ArtPieces";
import styled from "styled-components";

const H1 = styled.h1`
  display: flex;
  color: #988265;
  justify-content: center;
`;

const LI = styled.li`
  list-style: none;
  font-size: 30px;
  font-family: cursive;
  color: darkgreen;
  font-weight: bolder;
`;

const Div = styled.div`
  height: 900px;
  width: 700px;
  border-radius: 30px;
  background-color: beige;
  height: 900px;
  width: 700px;
  border-radius: 30px;
  margin-left: 35%;
`;

export default function SpotLight({
  imageSource,
  artist,
  isFavorite,
  slug,
  onToggleFavorite,
  artPiece,
}) {
  return (
    <Div>
      <H1>Random SpotLight Images</H1>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiece={artPiece}
        isFavorite={isFavorite}
      />
      <ul>
        <LI>
          <p>Image:</p>
          <Image src={imageSource} alt={artist} width={600} height={600} />
          <p>
            Artist: <strong>{artist}</strong>
          </p>
        </LI>
      </ul>
    </Div>
  );
}
