//import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  imageSource,
  title,
  artist,
  year,
  genre,
}) {
  //   const router = useRouter();

  return (
    <>
      <div>
        <FavoriteButton />
        <Image
          priority
          src={imageSource}
          alt={title}
          height={200}
          width={200}
        />
        <Link href="/art-pieces">Back</Link>
        {/* <Image
          priority
          src={imageSource}
          alt={title}
          width={130}
          height={200}
        /> */}
        <h1>Title ={title}</h1>
        <p>Artist = {artist}</p>
        <p>Year = {year}</p>
        <p>Genre = {genre}</p>
      </div>
    </>
  );
}
