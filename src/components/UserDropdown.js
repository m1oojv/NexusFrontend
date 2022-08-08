import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Power } from "react-feather";
import { useHistory } from "react-router-dom";
import { QueryClient } from "react-query";
import { AccountContext } from "../pages/auth/Account";

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from "@material-ui/core";

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;
const queryClient = new QueryClient();

function UserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const { signOut } = useContext(AccountContext);
  const history = useHistory();

  const toggleMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleProfile = () => {
    history.push("/Profile");
  };

  const closeMenu = () => {
    // history.push("/Profile");
    setAnchorMenu(null);
  };

  const handleSignOut = async () => {
    // Signs the user out before dispatching signed out state to Redux
    await signOut();
    window.location.pathname = "/auth/sign-in";
  };

  return (
    <React.Fragment>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default UserDropdown;
