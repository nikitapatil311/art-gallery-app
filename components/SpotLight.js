import Image from "next/image";
import Link from "next/link";

export default function SpotLight({ imageSource, artist }) {
  return (
    <>
      <h1>Random SpotLight Images</h1>
      <ul>
        <li>
          <p>Image:</p>
          <Image src={imageSource} alt={artist} width={140} height={230} />
          <p>
            Artist: <strong>{artist}</strong>
          </p>
        </li>
      </ul>
    </>
  );
}
