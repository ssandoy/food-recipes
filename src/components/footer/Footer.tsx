import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch, faWineGlassAlt } from "@fortawesome/free-solid-svg-icons";

import { NavLinkContainer } from "../nav-link/NavLinkContainer";

import "./styles.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <Router>
        <NavLinkContainer path="/oppskrifter">
          <FontAwesomeIcon icon={faSearch} style={{ color: "#a43c0b" }} />
          &nbsp;SØK I OPPSKRIFTER
        </NavLinkContainer>
        <NavLinkContainer path="/registrer">
          <FontAwesomeIcon icon={faPlus} style={{ color: "#a43c0b" }} />
          &nbsp;LEGG TIL OPPSKRIFT
        </NavLinkContainer>
        <a href="https://vinolini.no" style={{ color: "#c35a11", textDecoration: "none", fontSize: "1.7rem" }}>
          <FontAwesomeIcon icon={faWineGlassAlt} style={{ color: "#a43c0b" }} />
          &nbsp;VINOLINI
        </a>
      </Router>
    </div>
  );
};
