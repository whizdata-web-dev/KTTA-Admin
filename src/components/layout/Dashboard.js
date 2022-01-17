import { useState, lazy, Suspense, useEffect } from "react";
import decode from "jwt-decode";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Account = lazy(() => import("../account/Account"));
const Tournament = lazy(() => import("../tournaments/Tournament"));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

export default function Dashboard({ navTabs }) {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const token = localStorage.getItem("loggedin");
  const navigate = useNavigate();
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    if (token) {
      const decoded = decode(token);
      setPaths(decoded);
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [token]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'
          sx={{
            backgroundColor: "#cfd8dc",
            color: "black",
            border: "2px solid #78909c",
            borderStyle: "solid solid none solid",
          }}
        >
          {navTabs &&
            navTabs.map((route, index) => (
              <Tab key={index} label={route} {...a11yProps(index)} />
            ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {navTabs &&
          navTabs.map((element, index) => (
            <Suspense
              key={index}
              fallback={<Typography variant='h3'>Loading</Typography>}
            >
              <TabPanel
                value={value}
                index={value}
                dir={theme.direction}
                style={{
                  border: "1px solid #b0bec5",
                  borderBottom: "2px solid #b0bec5",
                  borderStyle: "none solid solid solid",
                  minHeight: "95vh",
                }}
              >
                {element === "Tournament" ? <Tournament /> : <Account />}
              </TabPanel>
            </Suspense>
          ))}
      </SwipeableViews>
    </Box>
  );
}
