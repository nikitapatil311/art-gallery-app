import SpotLight from "../components/SpotLight";
import React from "react";

export default function SpotlightPage({ pieces }) {
  const spotlightPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1> Art Gallery</h1>
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
