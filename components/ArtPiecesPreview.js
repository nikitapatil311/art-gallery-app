import Image from "next/image";
export default function ArtPiecesPreview({ imageSource, title, artist }) {
  return (
    <div>
      <ul>
        <li>
          <h1>{title}</h1>
          <p>
            Artist: <h2>{artist}</h2>
          </p>

          <p>Image:</p>
          <Image src={imageSource} alt={title} width={140} height={230} />
        </li>
      </ul>
    </div>
  );
}
