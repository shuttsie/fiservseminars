import React from 'react'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import Dropdown, {
    MenuItem,
} from '@trendmicro/react-dropdown';

import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import { Link } from "react-router-dom"

function Sidenav() {
    return (
        <SideNav className="custom-sidenav"
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Nav defaultSelected="home">
                <NavItem>
                    <NavIcon id="sidenav-item" className="sidenav-item">
                        <Link className="sidebar-nav-link" to=""><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />Home</Link>
                    </NavIcon>
                </NavItem>
                <NavItem id="sidenav-item">
                    <NavIcon>
                        <a className="sidebar-nav-link" href="https://fiservseminars-media.s3.amazonaws.com/2020_Education+Seminar_Precision_Overview+and+Agenda.pdf" target="_blank"><i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />Agenda</a>
                    </NavIcon>
                </NavItem>
                {/* <NavItem>
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/chat"><i className="fa fa-fw fa-comments" style={{ fontSize: '1.75em' }} />Chat</Link>
                    </NavIcon>
                </NavItem> */}
                <NavItem id="sidenav-item">
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/meetings"><i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />Meetings</Link>
                    </NavIcon>
                </NavItem>
                <NavItem id="sidenav-item">
                    <NavIcon>
                        <Dropdown className="resource-flyout">
                            <Dropdown.Toggle className="resource-flyout-toggle">
                                <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />Resource Center
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="resource-flyout-menu">
                                <MenuItem className="resource-flyout-menu-item">
                                    <Link className="sidebar-nav-link" to="/resource-center/articles"><i className="fa fa-fw fa-newspaper" style={{ fontSize: '1.5em', margin:'5px' }} />Articles</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link className="sidebar-nav-link" to="/resource-center/videos"><i className="fa fa-fw fa-video" style={{ fontSize: '1.5em', margin:'5px' }} />Videos</Link>
                                </MenuItem>
                            </Dropdown.Menu>
                        </Dropdown>
                    </NavIcon>
                </NavItem>
                <NavItem id="sidenav-item">
                    <NavIcon>
                        <Link className="sidebar-nav-link" to="/profile"><i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />Profile</Link>
                    </NavIcon>
                </NavItem>
                {/* <NavItem id="sidenav-item" eventKey="/search">
                    <NavIcon>
                        <i className="fa fa-fw fa-search" style={{ fontSize: '1.75em' }} />Search
                    </NavIcon>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav>
    )
}
export default Sidenav