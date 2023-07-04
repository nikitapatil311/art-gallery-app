import Image from "next/image";

export function pickRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

export default function SpotLight({ imageSource, artist }) {
  return (
    <>
      <div>
        <li>
          <p>Image:</p>
          <Image src={imageSource} alt={artist} width={140} height={230} />
          <p>
            Artist: <h2>{artist}</h2>
          </p>
        </li>
      </div>
    </>
  );
}
