import '../App.css';
import React from 'react';
import {SidebarData} from './SidebarData.js';

const Sidebar = () => {
	return (
		<div className='Sidebar'>
			{ SidebarData.map((item, index) => {
				return(
					<ul className='SidebarList'>
						<li className='row' id={window.location.pathname == item.link ? "active" :""} index={index} onClick={()=>{window.location.pathname=item.link}}>
						<div id='icon'>{item.icon}</div>
						<div id='title'>
							{item.title}
						</div>
						</li>
					</ul>
				)
			}) }
		</div>
	);
};

export default Sidebar;