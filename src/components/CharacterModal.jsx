const CharacterModal = ({ character, onClose, show }) => {
  const { image, name, status, gender, origin } = character;

  return show ? (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-lg w-[420px]"
      >
        <img
          className="rounded-lg mb-2 w-full"
          src={image}
          alt={`${name} character image`}
        />
        <div className="p-6 text-2xl font-mono flex flex-col gap-y-3">
          <p>Name: {name}</p>
          <p>Status: {status}</p>
          <p>Gender: {gender}</p>
          <p>Origin: {origin.name}</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default CharacterModal;
