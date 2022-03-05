import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarehouseIcon from '@mui/icons-material/Warehouse';

export const SidebarData = [
	{
		title : 'Dashboard',
		icon : <DashboardIcon />,
		link: '/dashboard'
	},
	{
		title : 'Warehouse',
		icon : <WarehouseIcon />,
		link: '/warehouse'
	},
]