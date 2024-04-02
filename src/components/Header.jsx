import logo from "../assets/ricky-and-morty.png";
import HeaderLogo from "./HeaderLogo";
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between item-center w-full relative">
      <HeaderLogo image={logo} />
      {/* <Navbar /> */}
      <Search />
    </header>
  );
};

export default Header;
