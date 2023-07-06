//import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import styled from "styled-components";
import CommentArtPieces from "../components/commentForm";
import { useState } from "react";
import Comments from "./comments";

export default function ArtPieceDetails({
  imageSource,
  title,
  artist,
  year,
  genre,
  slug,
  isFavorite,
  onToggleFavorite,
  artPieceComments,
}) {
  //   const router = useRouter();
  const [comments, setComments] = useState([]); // Rename the state variable

  function handleArtPiecesSubmit(newComment) {
    const dateTime = new Date().toLocaleString();
    const comment = {
      text: newComment,
      dateTime: dateTime,
    };
    setComments([...comments, comment]);
  }
  return (
    <>
      <div>
        <FavoriteButton
          isFavorite={isFavorite}
          slug={slug}
          onToggleFavorite={onToggleFavorite}
        />
        <IMG priority src={imageSource} alt={title} height={300} width={300} />
        <H1>{title}</H1>
        <P>
          Artist: <strong>{artist}</strong>
        </P>
        <P>
          Year: <strong>{year}</strong>
        </P>
        <P>
          Genre: <strong>{genre}</strong>
        </P>
        <A href="/art-pieces">Back 🔙 </A>
      </div>
      <div>
        <CommentArtPieces onSubmitComment={handleArtPiecesSubmit} />
        <Comments comments={comments} />
      </div>
    </>
  );
}
const IMG = styled.img`
  display: flex;
  margin-left: 30%;
`;

const A = styled.a`
  display: flex;
  text-decoration: none;
  font-size: 20px;
`;

const H1 = styled.h1`
  display: flex;
  color: antiquewhite;
`;

const P = styled.p`
  font-size: 30px;
  color: #852020;
  font-family: sans-serif;
`;
