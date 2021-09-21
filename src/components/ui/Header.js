import React from 'react';
import { AppBar, Toolbar, useScrollTrigger, Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
  
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "7em"
    },
    tabContainer: {
        marginLeft: 'auto'
    }
}))

export default function Header(props) {
    const classes = useStyles()

    return <>
        <ElevationScroll>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters>
                    <img src={logo} className={classes.logo} alt="Company Logo" />
                    <Tabs className={classes.tabContainer}>
                        <Tab label="Home" />
                        <Tab label="Services" />
                        <Tab label="The Revolution" />
                        <Tab label="About Us" />
                        <Tab label="Contact Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
    </>
}
