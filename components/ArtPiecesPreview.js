import Image from "next/image";
import React from "react";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";

const DIV = styled.div``;
const H1 = styled.h1`
  color: crimson;
  background-color: cornsilk;
  border-radius: 20px;
`;

const P = styled.p`
  font-size: 30px;
  color: color: crimson;;
  font-family: monospace;
  display: inline-grid;
`;

const IMG = styled.img`
  border-radius: 200px;

  &:hover {
    transform-style: unset;
    transition-delay: 3s;
    font-size: 500px;
  }
`;

const A = styled.a`
  font-size: 40px;
  margin-left: 40%;
  list-style: none;
  text-decoration: none;
  color: crimson;
  font-family: cursive;
`;

export default function ArtPiecesPreview({
  imageSource,
  title,
  artist,
  slug,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <DIV>
      <H1>{title}</H1>
      <FavoriteButton
        slug={slug}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <P>
        Artist: <strong>{artist}</strong>
      </P>

      <IMG priority src={imageSource} alt={title} width={600} height={600} />

      <A href={`/art-pieces/${slug}`}>Art Pieces Details</A>
    </DIV>
  );
}
