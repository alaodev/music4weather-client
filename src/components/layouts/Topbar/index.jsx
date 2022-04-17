import React from "react";

import Logo from '../../statics/Logo';

import { 
  TopbarContainer
} from "./styles"; 
 
const Topbar = () => {
  return (
    <TopbarContainer>
      <Logo />
    </TopbarContainer>
  );
}

export default Topbar;