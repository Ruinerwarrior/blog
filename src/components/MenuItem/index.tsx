import * as React from "react";

import NavItem from "./NavItem";
import Image from "./Image";
import Text from "./Text";

interface IProps {
  title: string;
  route: string;
  image: string;
  color: string;
}

const MenuItem: React.FunctionComponent<IProps> = ({ title, route, image, color }) => (
  <NavItem
    color={color}
    exact={route === ""}
    to={`${route}`}
  >
    <Image src={image} color={color}/>
    <Text>{title}</Text>
  </NavItem >
);

export default MenuItem;