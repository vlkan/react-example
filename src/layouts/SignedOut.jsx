import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Button primary onClick={signOut}>Login</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Register</Button>
      </Menu.Item>
    </div>
  );
}
