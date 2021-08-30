import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "../Navbar/navbar.css";
import logo from "../../assets/Logo.svg";
import call from "../../assets/Call.svg";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness3Icon from "@material-ui/icons/Brightness3";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#EB5757",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function Navbar() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__item">
          <div className="nav__text">
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="logo">
            <img src={logo} />
          </div>

          <div className="burger-menu">
            <IconButton
              onClick={handleClick}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              <MenuIcon className="menu" />
            </IconButton>
            <Menu
              className="menu_item"
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>About</MenuItem>
              <MenuItem onClick={handleClose}>Pricing</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
              <MenuItem onClick={handleClose}>
                <div className="call_menu">
                  <span>Call</span>
                </div>
              </MenuItem>
              <MenuItem>
                {" "}
                <FormGroup className="switch_menu">
                  <div>
                    <FormControlLabel
                      className="checked"
                      control={
                        <IOSSwitch
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                        />
                      }
                    />
                  </div>
                </FormGroup>
              </MenuItem>
              <MenuItem>
                <IconButton>
                  <Brightness3Icon
                    style={{ color: "black" }}
                    className="moon"
                  />
                </IconButton>
              </MenuItem>
            </Menu>
          </div>

          <div className="toggle">
            <div className="call_btn">
              <div className="call">
                <a href="#">Call</a>
              </div>
              <div>
                <img src={call} />
              </div>
            </div>

            <FormGroup>
              <div>
                <FormControlLabel
                  className="checked"
                  control={
                    <IOSSwitch
                      checked={state.checkedB}
                      onChange={handleChange}
                      name="checkedB"
                    />
                  }
                />
              </div>
            </FormGroup>
            <div className="moon__cont">
              <IconButton>
                <Brightness3Icon className="moon" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
