import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import clsx from "clsx";

export function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li
            className={clsx(
              "nav__item",
              location.pathname === "/" && "nav__item_active"
            )}
          >
            <Link to="/" className="nav__link">
              All
            </Link>
          </li>
          <li
            className={clsx(
              "nav__item",
              location.pathname === "/deleted" && "nav__item_active"
            )}
          >
            <Link to="/deleted" className="nav__link">
              Deleted
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
