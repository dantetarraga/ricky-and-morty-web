import logo from "../assets/ricky-and-morty.png";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex justify-between item-center w-full">
      <HeaderLogo image={logo} />
      <Navbar />
      <Search />
    </header>
  );
};

export default Header;
