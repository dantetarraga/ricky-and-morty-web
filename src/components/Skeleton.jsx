const Skeleton = () => {
  const skeletons = Array.from({ length: 12 });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 my-4">
      {skeletons.map((_, i) => (
        <div
          key={i}
          className="h-80 rounded-xl bg-gray-200 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Skeleton;
