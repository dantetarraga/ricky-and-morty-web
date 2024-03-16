import "../utils/generateBoxShadow";

const BackgroundSpace = ({ children }) => {
  return (
    <div className="overflow-y-auto h-dvh scroll-smooth bg-black">
      <div id="stars" className="stars"></div>
      <div id="stars2" className="stars"></div>
      <div id="stars3" className="stars"></div>
      {children}
    </div>
  );
};

export default BackgroundSpace;
