import * as React from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const BaseNavItem = styled(NavLink)`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: rgba(0,0,0,0);
  filter: drop-shadow(0 0 50px ${props => props.color});
`;

const NavItem = styled(({ className, ...props }) => <BaseNavItem {...props} activeClassName={className} />)`
  color: blue
`;

export default NavItem;