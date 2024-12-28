import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Apple Watch</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/product-builder">Build</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
