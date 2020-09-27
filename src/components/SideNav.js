import React from 'react'
import SideNav, { NavItem, NavIcon, Dropdown, MenuItem } from '@trendmicro/react-sidenav';
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
                        <Link className="sidebar-nav-link" to="/calendar"><i className="fa fa-fw fa-calendar" style={{ fontSize: '1.75em' }} />Agenda</Link>
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
                        <Link className="sidebar-nav-link" to="/resource-center"><i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />Resource Center</Link>
                    </NavIcon>
                    {/* <Dropdown>
                            <Dropdown.Toggle>
                                Settings
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <MenuItem onClick={this.navigate('settings/policies')}>
                                    Policies
                                </MenuItem>
                                <MenuItem onClick={this.navigate('settings/network')}>
                                    Network
                                </MenuItem>
                            </Dropdown.Menu>
                        </Dropdown> */}
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