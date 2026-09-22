import ThemeToggle from "../theme-toggle/ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <a className="nav-brand" href="#home">
        Justin Seaward
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;