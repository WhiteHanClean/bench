import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "../Navbar/navbar.css";
import logo from "../../assets/Logo.svg";
import call from "../../assets/Call.svg";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
            <IconButton>
              <img src={Menu} alt="произошла ошибка" />
            </IconButton>
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
          </div>
        </div>
      </div>
    </div>
  );
}
