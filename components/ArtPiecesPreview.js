import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function ArtPiecesPreview({ imageSource, title, artist, slug }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        Artist: <strong>{artist}</strong>
      </p>

      <p>Image:</p>
      <Image priority src={imageSource} alt={title} width={130} height={210} />

      <Link href={`/art-pieces/${slug}`}>Art Pieces Details</Link>
    </div>
  );
}
