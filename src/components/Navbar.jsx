import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="text-emerald-600" size={24} />
            <span className="font-bold text-emerald-800">
              Virtual Herbal Garden
            </span>
          </Link>

          <div className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/plants"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
                }`
              }
            >
              Plant Catalog
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
