import Link from "next/link";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  display: grid;

  font-family: cursive;
  color: black;
  margin-left: 10%;
`;

const A = styled.a`
  text-decoration: none;
  list-style: none;
  margin-left: 5%;
  color: white;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 20%;
  text-decoration: none;
  font-size: 25px;
  background-color: black;
  height: 100px;
  text-align: center;
  display: flow-root;
  border: 5px solid black;
  border-radius: 50px;
  color: white;
`;
const LI = styled.li`
  text-decoration: none;
  color: currentColor;
  border-radius: 20px;

  &hover {
    transition: 2s;
    font-size: xx-large;
    color: blueviolet;
  }
`;

export default function Navigation({ children }) {
  return (
    <div>
      <H1>ART GALLERY</H1>
      <UL>
        <LI>
          <A href="/">Spotlight</A>
        </LI>
        <LI>
          <A href="/art-pieces">ArtPieces List</A>
        </LI>
        <LI>
          <A href="/art-pieces/favorites">Favorites Page</A>
        </LI>
      </UL>
      {children}
    </div>
  );
}

export function Layout({ children }) {
  return <Navigation>{children}</Navigation>;
}
