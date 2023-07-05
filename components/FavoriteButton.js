import Image from "next/image";
import styled from "styled-components";

const Button = styled.button`
  border: 2px solid black;
  border-radius: 10%;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0.3rem 0 0;
  margin-left: 80%;
`;

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  const handleClick = () => {
    onToggleFavorite(!isFavorite);
  };

  return (
    <Button
      type="button"
      onClick={onToggleFavorite}
      aria-label={isFavorite ? "not-Favorite" : "favorite"}
    >
      {isFavorite ? (
        <Image src="/assets/heart.svg" width={30} height={30} alt="" />
      ) : (
        <Image
          src="/assets/OCAL-Favorites-Icon-Unselected.svg"
          width={30}
          height={30}
          alt=""
        />
      )}
    </Button>
  );
};

export default FavoriteButton;
