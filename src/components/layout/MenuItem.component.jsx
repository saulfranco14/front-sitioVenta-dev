import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import {
    AsideIcon
} from '../styledcomponents/header.styles'
import DashboardIcon from '@material-ui/icons/Dashboard';
import Tooltip from '@material-ui/core/Tooltip';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



const MenuItem = () => {
    return ( 
        <Fragment>
            <Link to={'/dashboard'} >
                <Tooltip title="Dashboard" placement="right-start">
                    <DashboardIcon fontSize="large" /> 
                </Tooltip>
            </Link>
            <Link to={'/reportes'} >
                <AsideIcon>
                    <Tooltip title="Reportes" placement="right-start">
                        <AssessmentIcon fontSize="large" /> 
                    </Tooltip>
                </AsideIcon>
            </Link>
            <Link to={'/caja'} >
                <AsideIcon>
                    <Tooltip title="Caja" placement="right-start">
                        <ShoppingBasketIcon fontSize="large" /> 
                    </Tooltip>
                </AsideIcon>
            </Link>
        </Fragment>
     );
}
 
export default MenuItem;