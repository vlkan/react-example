import React from "react";
import { Menu, Dropdown, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="" />
        <Dropdown pointing="top left" text="Volkan">
          <Dropdown.Menu>
            <Dropdown.Item text="My Info" icon="info" />
            <Dropdown.Item onClick={signOut}text="Exit" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
