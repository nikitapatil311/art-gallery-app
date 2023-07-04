//import Image from "next/image";
//import HomePage from "../pages";
import ArtPiecesPreview from "./ArtPiecesPreview";
import SpotLight from "./SpotLight";
import { pickRandomPiece } from "./SpotLight";

export default function ArtPieces({ pieces }) {
  const randomPiece = pickRandomPiece(pieces);
  return (
    <>
      <ul>
        <SpotLight
          artist={randomPiece.artist}
          imageSource={randomPiece.imageSource}
        />
        {pieces.map(({ artist, imageSource, name }) => (
          <ArtPiecesPreview
            key={name}
            title={name}
            artist={artist}
            imageSource={imageSource}
            //  <Image src={imageSource} alt={name} width={140} height={230} />
          />
        ))}
      </ul>
    </>
  );
}
