import Image from "next/image";
import React from "react";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
export default function ArtPiecesPreview({
  imageSource,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <p>
        Artist: <strong>{artist}</strong>
      </p>

      <p>Image:</p>
      <Image priority src={imageSource} alt={title} width={130} height={210} />

      <Link href={`/art-pieces/${slug}`}>Art Pieces Details</Link>
    </div>
  );
}
