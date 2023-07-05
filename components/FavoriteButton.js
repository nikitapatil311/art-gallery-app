//import { ReactComponent as heartICON } from "../components/heart.svg";
import Image from "next/image";

const FavoriteButton = ({ isFavorite, onToggleFavorite }) => {
  const handleClick = () => {
    onToggleFavorite(!isFavorite);
  };

  return (
    <button
      type="button"
      onClick={onToggleFavorite}
      onToggleFavorite={handleClick}
      isFavorite={isFavorite}
      aria-label={isFavorite ? "not-Favourite" : "favourite"}
    >
      {/* <Image src="/assets/heart.svg" width={30} height={30} alt="" /> */}

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
    </button>
  );
};

export default FavoriteButton;
