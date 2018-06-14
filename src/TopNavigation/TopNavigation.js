import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import LeftNavigation from '../LeftNavigation/LeftNavigation'
import AddStaff from '../StaffManagement/AddStaff'
import EditStaff from '../StaffManagement/EditStaff'
import AddWard from '../WardManagement/AddWard'

const drawerWidth = 180;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor:'#0c0c14',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works

    },
    toolbar: theme.mixins.toolbar,
    flex: {
        flex:1,
    },
    avatar: {
        width: 32,
        height: 32,
        float: 'right',
        marginright :10,
    },
    profileName:{
        fontFamily: 'Montserrat',
        color: '#fff'
    },
    sys_heading:{
        fontFamily: 'Montserrat',
        flex:1,
        color: '#fff',
    }

});

function TopNavigation(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap className={classes.sys_heading}>
                        Hospital Information System
                    </Typography>
                    <Typography variant="subheading" color="inherit" noWrap className={classes.profileName} >
                        Muvindu
                    </Typography>
                    <IconButton >
                        <Avatar
                            alt="Muvindu"
                            src="./img/user.png"
                            className={classes.avatar}
                        /></IconButton>


                </Toolbar>

            </AppBar>
            <LeftNavigation/>

            <main className={classes.content}>



                <AddWard/>

            </main>

        </div>
    );
}

export default withStyles(styles)(TopNavigation);