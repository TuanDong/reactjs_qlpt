import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div id="navbar" className="navbar navbar-default ace-save-state">
                <div className="navbar-container ace-save-state" id="navbar-container">
                    <button type="button" className="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                        <span className="sr-only">Toggle sidebar</span>

                        <span className="icon-bar"></span>

                        <span className="icon-bar"></span>

                        <span className="icon-bar"></span>
                    </button>
                    <div className="navbar-header pull-left">
                        <a className="navbar-brand">
                            <small>
                                <i className="fa fa-leaf"></i>
                                Ace Admin
                            </small>
                        </a>
                    </div>

                    <div className="navbar-buttons navbar-header pull-right" role="navigation">
                        <ul className="nav ace-nav">
                            <li className="light-blue">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">

                                    <img src="/assets/images/icon-language-english.png" alt="" /> ENGLISH
                        
                                </a>

                                <ul className="dropdown-menu dropdown-light-blue dropdown-caret">
                                    <li>
                                        <a>
                                            <img src="/assets/images/icon-language-english.png" alt="" /> ENGLISH
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <img src="/assets/images/vn-flag-lang.png" alt="" /> VIET NAM
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="light-blue dropdown-modal">
                                <a data-toggle="dropdown" className="dropdown-toggle">
                                    <img className="nav-user-photo" src="/assets/images/avatars/user.jpg" alt="Jason's Photo" />
                                    <span className="user-info">
                                        <small>Welcome</small>
                                        Admin
                                    </span>

                                    <i className="ace-icon fa fa-caret-down"></i>
                                </a>

                                <ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                                    <li>
                                        <a>
                                            <i className="ace-icon fa fa-cog"></i>
                                            Settings
                                        </a>
                                    </li>

                                    <li>
                                        <a>
                                            <i className="ace-icon fa fa-user"></i>
                                            Profile
                                        </a>
                                    </li>

                                    <li className="divider"></li>

                                    <li>
                                        <a>
                                            <i className="ace-icon fa fa-power-off"></i>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
