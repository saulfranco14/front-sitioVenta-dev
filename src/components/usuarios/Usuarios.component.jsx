import React, { Fragment } from 'react';
import { DataGrid }                                 from '@material-ui/data-grid';
import { columnsUsuarios }                              from '../../utils/rowData';
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

   
    const rowsUsuarios = [
        { id: 1, nombre : "Saúl Mauricio Franco Rentería", edad:27,  telefono_celular:"5534932203", active : true},
        { id: 2, nombre : "Miguel", edad:29,  grupo:"Azul",  telefono_celular:"5569823647", active : true},
        { id: 3, nombre : "Omar Gutierrez", edad:24,    telefono_celular:"5532013682", active : true},
        { id: 4, nombre : "Virginia Ziga", edad:40,   telefono_celular:"5520361490", active : true},
        { id: 5, nombre : "Iván Franco", edad:31,    telefono_celular:"5571829380", active : true},
        { id: 6, nombre : "Roberto", edad:35,    telefono_celular:"5585999485", active : true},
        { id: 7, nombre : "Sandra Villanueva", edad:28,    telefono_celular:"5515586228", active : true},
        { id: 8, nombre : "Yan Angel", edad:29,    telefono_celular:"5547203719", active : false},
        { id: 9, nombre : "Fernando Rentería", edad:35,   telefono_celular:"5519378246", active : true},
        { id: 10, nombre : "Esther", edad:29,    telefono_celular:"5549160379", active : true},
        { id: 11, nombre : "Selene", edad:24,   telefono_celular:"5537689140", active : false},
        { id: 12, nombre : "Gerardo Gaona", edad:32,    telefono_celular:"5501346758", active : false},
        { id: 13, nombre : "Lorena Leyva", edad:30,   telefono_celular:"5510287496", active : true},
        { id: 14, nombre : "Valentín Alvarez", edad:36,    telefono_celular:"5526689874" , active : false},
    ];
    

const Usuarios = () => {
    return ( 
        <Fragment>
            <div className="contenedor-app">
                <div className="seccion-principal">
                    <Header/>
                    <DisplayDiv>
                        <Sidebar/>
                        <ViewProduct>
                            <DivButtonTitle>
                                <TitleProduct>Usuarios</TitleProduct>
                                <AddProduct>
                                    <AddCircleIcon fontSize="large" style={{ marginTop: "0px"}} /> 
                                    <TextButtonAd> 
                                        Agregar usuario
                                    </TextButtonAd>
                                </AddProduct>
                            </DivButtonTitle>
                            <TableDataGrid>
                                <DataGrid rows={rowsUsuarios} columns={columnsUsuarios} pageSize={15} />
                            </TableDataGrid>
                        </ViewProduct>
                    </DisplayDiv>
                </div>
                
                
            </div>
        </Fragment>
     );
}
 
export default Usuarios;