const HeaderLogo = ({ image }) => {
  return (
    <nav className="flex justify-center md:justify-start text-white my-10 gap-10">
      <div className="flex items-center gap-2">
        <img
          src={image}
          alt="Logo Ricky & Morty"
          className="hidden w-[120px] md:block aspect-square"
        />
        <h1 className="font-bold text-2xl md:text-4xl">
          Rick & Morty{" "}
          <span className="text-cyan-950 font-extrabold">WiKi</span>
        </h1>
      </div>
    </nav>
  );
};

export default HeaderLogo;
