import Card from "./Card";

const ListCharacters = ({ data }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] 2xl:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 my-4">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ListCharacters;
