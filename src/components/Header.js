import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="text-center p-10">
        <Link to="/">
          <h1 className="text-3xl md:text-7xl font-bold">Characters</h1>
        </Link>
      </header>
    </>
  );
}

export default Header;
