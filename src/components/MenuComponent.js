import React, { Component } from 'react';
import { Link, useRouteMatch } from "react-router-dom";

const CustomMenuLink = ({ label, to, activeOnlyWhenExact }) => {
	let match = useRouteMatch({
		path: to,
		exact: activeOnlyWhenExact
	});

	return (
		<li className={match ? "active" : ""}>
			<Link to={to}>
				<i className="menu-icon fa fa-tachometer"></i>
				<span className="menu-text">{ label } </span>
			</Link>

			<b className="arrow"></b>
		</li>
	);
}

export default class MenuComponent extends Component {
	
	render() {
		return (
			<div id="sidebar" className="sidebar responsive ace-save-state compact">
				<div className="sidebar-shortcuts">
					<div className="sidebar-shortcuts-large">
						<button className="btn btn-success">
							<i className="ace-icon fa fa-signal"></i>
						</button>

						<button className="btn btn-info" href="#my-modal" data-toggle="modal">
							<i className="ace-icon fa fa-pencil"></i>
						</button>
					</div>

					<div className="sidebar-shortcuts-mini">
						<span className="btn btn-success"></span>

						<span className="btn btn-info"></span>

						<span className="btn btn-warning"></span>

						<span className="btn btn-danger"></span>
					</div>
				</div>

				<ul className="nav nav-list">
					<CustomMenuLink label = "Danh Sách Phòng Thuê" to="/" activeOnlyWhenExact = {true} />
					<CustomMenuLink label = "Danh Sách Phòng Thuê" to="/renter" activeOnlyWhenExact = {false} />
					<CustomMenuLink label = "Danh Sách Phòng Thuê" to="/roomrent" activeOnlyWhenExact = {false} />
					{/* <li className="active">
						<Link to="/">
							<i className="menu-icon fa fa-tachometer"></i>
							<span className="menu-text">  </span>
						</Link>
						<b className="arrow"></b> 
					</li>
					<li className="">
						
						<Link to="/renter">
							<i className="menu-icon fa fa-tachometer"></i>
							<span className="menu-text"> Danh Sách Người Thuê </span>
						</Link>
						<b className="arrow"></b> 
					</li>
					<li className="">
						
						<Link to="/roomrent">
							<i className="menu-icon fa fa-tachometer"></i>
							<span className="menu-text"> Danh Sách Phòng Cho Thuê </span>
						</Link>
						<b className="arrow"></b> 
					</li>
					<li className="">
						<Link to="">
							<i className="menu-icon fa fa-tachometer"></i>
							<span className="menu-text"> Vị Trí Phòng Trọ</span>
						</Link>
						<b className="arrow"></b>
					</li> */}
				</ul>

				<div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
					<i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
				</div>
			</div>
		)
	}
}
