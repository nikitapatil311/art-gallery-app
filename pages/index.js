import SpotLight from "../components/SpotLight";
import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  display: grid;
  text-align: center;
  font-family: fantasy;
  color: darkorange;
  font-size: 40px;
`;

const DIV = styled.div``;

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <H1> Art Gallery</H1>
      <div>
        {spotlightPiece && (
          <SpotLight
            imageSource={spotlightPiece.imageSource}
            artist={spotlightPiece.artist}
          />
        )}
      </div>
    </>
  );
}
