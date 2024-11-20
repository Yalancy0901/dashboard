import { useState } from "react";
import { AppBar, Toolbar, IconButton, Avatar } from "@mui/material";
import { Notifications, Language, WbSunny, NightlightRound } from "@mui/icons-material";
import logo from "./logo.svg";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#333",
        boxShadow: "none",
        padding: "0 16px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <div>
          <img src={logo} alt="G20 Logo" style={{ height: 40 }} />
        </div>

        {/* Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <IconButton color="inherit">
            <Language />
          </IconButton>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <WbSunny /> : <NightlightRound />}
          </IconButton>
          <Avatar
            src="https://via.placeholder.com/40"
            alt="Profile"
            sx={{ width: 40, height: 40, border: "2px solid gray" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
