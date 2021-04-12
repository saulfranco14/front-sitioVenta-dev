import React, { Fragment,useContext, useEffect }    from 'react';
import Header                                       from '../layout/Header.component';
import Sidebar                                      from '../layout/Sidebar.component';
import authContext                                  from '../../context/auth/authContext';
import {
    DisplayDiv,
    ViewProduct,
    TitleProduct,
    AddProduct,
    TextButtonAd,
    TableDataGrid,
    DivButtonTitle
} from '../styledcomponents/viewComponent.styles';

const Caja = () => {
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
                    <DisplayDiv>
                        <Sidebar/>
                        <ViewProduct>
                            <DivButtonTitle>
                                <TitleProduct>Caja</TitleProduct>
                            </DivButtonTitle>
                        </ViewProduct>
                    </DisplayDiv>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Caja;