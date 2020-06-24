import * as React from "react";

import MenuItem from "../MenuItem";
import Hero from "./Hero";
import NavBar from "./NavBar";
import NavBarItems from "./NavBarItems";
import cpp from "../../images/cpp.png";
import csharp from "../../images/csharp.png";
import js from "../../images/js.png";
import Section from "./Section";

const MenuItems = [
  { title: "Js", route: "js", image: js, color: '#80BC22' },
  { title: "c#", route: "csharp", image: csharp, color: '#007BFB' },
  { title: "c++", route: "cplusplus", image: cpp, color: '#01559D' }
];

const Header: React.FunctionComponent = () => {
  return (
    <Section>
      <Hero>
      </Hero>
      <NavBar>
        <NavBarItems>
          {
            MenuItems.map(m => <MenuItem key={m.title} title={m.title} image={m.image} route={m.route} color={m.color} />)
          }
        </NavBarItems>
      </NavBar>
    </Section>

  )
}

export default Header;