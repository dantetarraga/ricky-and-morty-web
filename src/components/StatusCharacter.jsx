const StatusCharacter = ({ status }) => {
  const statusClasses = {
    Alive: "bg-green-600",
    Dead: "bg-red-600",
    unknown: "bg-gray-600",
  };

  const className = `font-mono absolute top-2 right-2 px-2 py-1 rounded-md text-white font-medium ${statusClasses[status]}`;

  return <span className={className}>{status}</span>;
};

export default StatusCharacter;
