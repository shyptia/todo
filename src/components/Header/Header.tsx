import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import clsx from "clsx";
import { links } from "./links";

export function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          {links.map((link) => (
            <li className="nav__item">
              <Link
                to={link.pathname}
                className={clsx(
                  "nav__link",
                  location.pathname === link.pathname && "nav__link_active"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
