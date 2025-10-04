import { Link, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { CartIcon } from "./ui/cart-icon";
import { useCart } from "@/hooks/use-cart";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", anchor: "hero" },
    { name: "Nos Produits", path: "/produits" },
    { name: "À Propos", anchor: "about" },
    { name: "Contact", anchor: "contact" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const handleNav = (item: any, e: any) => {
    if (item.path) return;
    e.preventDefault();
    scroller.scrollTo(item.anchor, {
      duration: 600,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -80,
    });
    setIsMenuOpen(false);
  };

  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 group">
          <img src={logo} alt="Logo" className="h-16 w-auto max-h-20" style={{marginTop: '-4px', marginBottom: '-4px'}} />
          <span
            className="ml-2 text-2xl font-extrabold tracking-wide font-serif"
            style={{ color: '#BB1D2B', letterSpacing: '0.04em', fontFamily: 'serif, Georgia, Times, "Times New Roman", serif' }}
          >
            BOUCHERIE L'ORIENTALE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={`#${item.anchor}`}
                  className="text-sm font-medium transition-colors hover:text-primary text-foreground cursor-pointer"
                  onClick={e => handleNav(item, e)}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
            <li>
              <Button asChild variant="ghost" size="icon" className="relative">
                <Link to="/panier">
                  <CartIcon className="h-7 w-7" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full text-xs px-1.5 py-0.5 min-w-[1.5em] text-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </Button>
            </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <ul className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`block text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={`#${item.anchor}`}
                    className="block text-sm font-medium transition-colors hover:text-primary text-foreground cursor-pointer"
                    onClick={e => handleNav(item, e)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Button asChild variant="ghost" className="w-full relative">
                <Link to="/panier" onClick={() => setIsMenuOpen(false)}>
                  <div className="flex items-center justify-center">
                    <CartIcon className="h-7 w-7" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full text-xs px-1.5 py-0.5 min-w-[1.5em] text-center">
                        {cartCount}
                      </span>
                    )}
                  </div>
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
