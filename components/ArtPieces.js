import Image from "next/image";
//import HomePage from "../pages";
import ArtPiecesPreview from "./ArtPiecesPreview";

export default function ArtPieces({ pieces }) {
  return (
    <>
      <ul>
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
