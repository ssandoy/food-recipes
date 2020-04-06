import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  children: React.ReactNode;
  style?: {};
};

export const NavLinkContainer: React.FC<Props> = ({
  path,
  style = { color: "#c35a11", textDecoration: "none", fontSize: "1.7rem" },
  children,
}: Props) => {
  return (
    <>
      <NavLink exact to={path} style={style} activeStyle={{ color: "#c35a11" }}>
        {children}
      </NavLink>
    </>
  );
};
