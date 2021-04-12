import React from 'react';

let active;

export const columnsUser = [
    { field: 'nombre',            headerName: 'Nombre',             width: 300 },
    { field: 'email',             headerName: 'Email',              width: 300 },
    {
      field: "",
      headerName: "Editar",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: ( params ) => {
      return  <button
                    type        ="button"
                    className   ="btn btn-editar"
                    onClick     = { (  )=> handleClick(`${ params.getValue('_id') }`) }
                >
                    Editar
                </button>;
    }
  },
  {
    field: "activo",
    headerName: "Activo",
    sortable: false,
    width: 150,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
      active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
      return  active
    }
  },
];

export const columnsProducts = [
  { field: 'nombre',            headerName: 'Nombre',             width: 300 },
  { field: 'modelo',            headerName: 'Modelo',             width: 100 },
  { field: 'tipo',              headerName: 'Tipo',               width: 150 },
  { field: 'precio',            headerName: 'Precio',             width: 180 },
  {
    field: "",
    headerName: "Editar",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
    return  <button
                  type        ="button"
                  className   ="btn btn-editar"
                  onClick     = { (  )=> handleClick(`${ params.getValue('_id') }`) }
              >
                  Editar
              </button>;
  }
},
{
  field: "activo",
  headerName: "Activo",
  sortable: false,
  width: 150,
  disableClickEventBubbling: true,
  renderCell: ( params ) => {
    active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
    return  active
  }
},
];

export const columnsUsuarios = [
  // { field: 'id',                headerName: 'ID',               width: 70 },
  { field: 'nombre',            headerName: 'Nombre',           width: 300 },
  { field: 'edad',              headerName: 'Edad',             width: 90 },
  { field: 'telefono_celular',  headerName: 'Telefono Celular', width: 200 },
  {
    field: "",
    headerName: "Editar",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: ( params ) => {
    return  <button
                  type        ="button"
                  className   ="btn btn-editar"
                  
                  onClick     = { (  )=> handleClick(`${ params.getValue('id') }`) }
              >
                  Editar
              </button>;
  }
},
{
  field: "activo",
  headerName: "Activo",
  sortable: false,
  width: 150,
  disableClickEventBubbling: true,
  renderCell: ( params ) => {
    active = params.getValue('active') === true ? <button type ="button" className   ="btn btn-success"> Activo </button> : <button type ="button" className   ="btn btn-eliminar"> Desactivo </button> ;
    return  active
  }
},
];




const handleClick = (id) =>{
    console.log(id);
}