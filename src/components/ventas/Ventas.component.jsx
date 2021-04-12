import React, { Fragment } from 'react';
import { DataGrid }                                 from '@material-ui/data-grid';
import { columnsProducts }                              from '../../utils/rowData';
import Header                                       from '../layout/Header.component';
import Sidebar                                      from '../layout/Sidebar.component';
import {
    DisplayDiv,
    ViewProduct,
    TitleProduct,
    AddProduct,
    TextButtonAd,
    TableDataGrid,
    DivButtonTitle
} from '../styledcomponents/viewComponent.styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

    // const rowsProducts = [
    //     { id: 1 ,   nombre: "Maceta de fibra de vidrio", modelo: "MC-9Y09", tipo: "Macetas", precio:"$350", active: true},
    //     { id: 2,    nombre: "Flores de Seda", modelo: "FL-0P81", tipo: "Flores", precio:"$649", active: true},
    //     { id: 3 ,   nombre: "Planta artifical", modelo: "PA-N98E", tipo: "Plantas", precio:"$289", active: true},
    //     { id: 4 ,   nombre: "Follaje", modelo: "F-UI91", tipo: "Follaje", precio:"$58", active: true},
    //     { id: 5,    nombre: "Planta Natural", modelo: "PN-Q213", tipo: "Plantas", precio:"$389", active: false},

    // ]

const Ventas = () => {
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <div className="seccion-principal">
                    <Header/>
                    <DisplayDiv>
                        <Sidebar/>
                        <ViewProduct>
                            <DivButtonTitle>
                                <TitleProduct>Ventas</TitleProduct>
                                <AddProduct>
                                    <AddCircleIcon fontSize="large" style={{ marginTop: "0px"}} /> 
                                    <TextButtonAd> 
                                        Agregar venta
                                    </TextButtonAd>
                                </AddProduct>
                            </DivButtonTitle>
                            {/* <TableDataGrid>
                                <DataGrid rows={rowsProducts} columns={columnsProducts} pageSize={15} />
                            </TableDataGrid> */}
                        </ViewProduct>
                    </DisplayDiv>
                </div>
                
                
            </div>
        </Fragment>
     );
}
 
export default Ventas;