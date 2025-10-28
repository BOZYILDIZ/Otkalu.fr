import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Garde-corps", href: "/garde-corps" },
    { name: "Portail", href: "/portail" },
    { name: "Escalier", href: "/escalier" },
    { name: "Serrure", href: "/serrure" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/logo_otkalu.webp"
                alt="OTK ALU Logo"
                className="h-16 w-16 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">OTK ALU</span>
                <span className="text-sm text-muted-foreground">Métallerie - Serrurerie</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === item.href
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0651234047" className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">06 51 23 40 47</span>
            </a>
            <Link href="/contact">
              <Button size="lg">Devis Gratuit</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span
                    className={`block px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
                      location === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <a
                href="tel:0651234047"
                className="flex items-center space-x-2 px-3 py-2"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-base font-semibold">06 51 23 40 47</span>
              </a>
              <Link href="/contact">
                <Button size="lg" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Devis Gratuit
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
