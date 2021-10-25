import React from "react";

import { Container, HeaderLinks, ProfileContainer } from "./styles";

import { Link, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Logo from "../../assets/logo.png";
import Profile from "../../assets/profile.png";

function Header() {
  const location = useLocation();

  return (
    <Container>
      <img src={Logo} alt="Yu Gi Memoh Card" />
      <HeaderLinks>
        <Link
          className={location.pathname?.includes("collections") ? "active" : ""}
          to="/collections"
        >
          Minhas Coleções
        </Link>
        <Link
          className={location.pathname?.includes("explore") ? "active" : ""}
          to="/explore"
        >
          Explorar
        </Link>
      </HeaderLinks>
      <ProfileContainer>
        <img src={Profile} alt="Profile" />
        <KeyboardArrowDownIcon />
      </ProfileContainer>
    </Container>
  );
}

export default Header;
