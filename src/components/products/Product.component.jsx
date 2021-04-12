import React, { Fragment } from 'react';
import Header                                       from '../layout/Header.component';
import Sidebar                                      from '../layout/Sidebar.component';
import {
    DisplayDiv,
    ViewProduct,
    TitleProduct,
    AddProduct,
    TextButtonAd
} from '../styledcomponents/viewComponent.styles';
import {
    LinkHeader,
    IconHeader
} from '../styledcomponents/header.styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Product = () => {
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <div className="seccion-principal">
                    <Header/>
                    <DisplayDiv>
                        <Sidebar/>
                        <ViewProduct>
                            <TitleProduct>Productos</TitleProduct>
                               <AddProduct>
                                    <AddCircleIcon fontSize="large" style={{ marginTop: "0px"}} /> 
                                    <TextButtonAd> 
                                        Agregar producto
                                    </TextButtonAd>
                                    
                                </AddProduct>
                        </ViewProduct>
                    </DisplayDiv>
                </div>
                
            </div>
        </Fragment>
     );
}
 
export default Product;