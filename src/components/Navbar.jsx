import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <box><Typography className="title" variant="body1" sx={{ ml: 1.5, color: "#fff",  }}>
          SN Tube
        </Typography></box>     
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
