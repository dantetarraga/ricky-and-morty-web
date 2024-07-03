import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../index.css";
import CharacterModal from "./CharacterModal";
import StatusCharacter from "./StatusCharacter";

const Example = React.forwardRef(({ data }, ref) => {
  const { name, image, status } = data;
  const [showModal, setShowModal] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) handleCloseModal();
    },
    [showModal]
  );

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Último elemento observado");
              console.log(entry.target);
              let page = searchParams.get("page") || 1;
              console.log("page", page);
              setSearchParams({ page: Number(page) + 1 });
            }
          });
        },
        {
          rootMargin: "0px",
          threshold: 1,
        }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }
  }, []);

  useEffect(() => {
    if (showModal) document.addEventListener("keydown", handleEscape, false);
    return () => document.removeEventListener("keydown", handleEscape, false);
  }, [handleEscape, showModal]);

  return (
    <div ref={ref}>
      <link rel="preload" as="image" href={image} />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>

      {showModal && (
        <CharacterModal
          character={data}
          onClose={handleCloseModal}
          show={showModal}
        />
      )}
    </div>
  );
});

export default Example;
