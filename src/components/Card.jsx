import { useCallback, useEffect, useState } from "react";
import "../index.css";
import CharacterModal from "./CharacterModal";
import StatusCharacter from "./StatusCharacter";

const Card = ({ data }) => {
  const { name, image, status } = data;
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) handleCloseModal();
    },
    [showModal]
  );

  useEffect(() => {
    if (showModal) document.addEventListener("keydown", handleEscape, false);
    return () => document.removeEventListener("keydown", handleEscape, false);
  }, [handleEscape, showModal]);

  return (
    <div>
      <link rel="preload" as="image" href={image} />
      <div
        className="relative overflow-hidden border-2 border-black cursor-pointer card-animation"
        onClick={() => setShowModal(true)}
      >
        <img
          className="object-cover w-full hover:scale-110 transition-transform duration-500 ease-in-out rounded"
          src={image}
          alt={`${name} character image`}
          loading="lazy"
        />
        <StatusCharacter status={status} />
        <p className="bg-white border-2 text-xl font-bangers border-black py-1 px-3 text-black absolute -skew-x-12 -right-2 -bottom-0 uppercase font-smibold">
          {name}
        </p>
      </div>

      {showModal && (
        <CharacterModal
          character={data}
          onClose={handleCloseModal}
          show={showModal}
        />
      )}
    </div>
  );
};

export default Card;
