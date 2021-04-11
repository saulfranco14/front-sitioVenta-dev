import React, { Fragment, useContext, useEffect } from 'react';
import authContext          from '../../context/auth/authContext';

const Header = () => {

    const authToken                                 = useContext( authContext );
    const { user, getUserByAuth, logoutUser  }      = authToken;

    useEffect(() => {
        // getUserByAuth();
        // eslint-disable-next-line
    }, [])

    return ( 
        <Fragment>
             <header className="app-header">
               
                <nav className="nav-principal">
                    {
                        user ? 
                            <h5 className="nombre-usuario">Hola :{" "}<span>{ user.auth.nombre }</span></h5>
                        : null
                    }
                    <button
                        className="btn btn-blank cerrar-sesion"
                        onClick = { () => logoutUser() }
                    >
                        Cerrar Sesión
                    </button>
                </nav>
            </header>
        </Fragment>
     );
}
 
export default Header;