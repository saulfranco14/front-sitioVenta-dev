import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../context/auth/authContext';


const RouteAdmin = ( { component : Component, ...props } ) => {

    const contextAuth   = useContext(authContext);
    const { auth , getUserByAuth, loading, role }      = contextAuth;

    useEffect(() => {
        getUserByAuth();
        console.log("******UE********");
        console.log(role);
        console.log(auth);
        console.log(loading);
        console.log("******UE********");

        // eslint-disable-next-line
    }, []);

    return ( 
        <Route 
            { ...props }
            render = { props => role === "1" && auth === true && loading == false ? 
                    ( <Component { ...props} />) 
                :
                    ( <Redirect to="/usuarios" />)  
                
            }
        />
     );
}
 
export default RouteAdmin;