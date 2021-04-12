import React, { Fragment,useContext, useEffect }    from 'react';
import Header                                       from '../layout/Header.component';
import Sidebar                                      from '../layout/Sidebar.component';
import authContext                                  from '../../context/auth/authContext';


const Dashboard = () => {
    const authToken             = useContext( authContext );
    const { getUserByAuth  }    = authToken;

    useEffect(() => {
        // getUserByAuth();

        // eslint-disable-next-line
    }, [])
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <div className="seccion-principal">
                    <Header/>
                    <Sidebar/>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Dashboard;