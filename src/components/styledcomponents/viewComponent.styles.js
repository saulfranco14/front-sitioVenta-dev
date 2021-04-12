import styled from 'styled-components';


export const DisplayDiv = styled.div`
    display: flex;
    width: 100%;
    height: 87.5%;
`
// Product
export const ViewProduct = styled.div`
    display: flex;
    flex-direction: column;
    flex: 80;
`
export const TitleProduct = styled.h1`
    margin-top: 4rem;
    margin-left: 4rem;
`
export const AddProduct = styled.button`
    display: flex;
    justify-content: center;
    background-color: #0275d8;
    width: 210px;
    height: 35px;
    color: #ffff;
    margin-top: 4rem;
    margin-right: 4rem;
    font-family:'Raleway', sans-serif;
    padding: 0.7rem 1.5rem 1.5rem 1.5rem;
    font-size: 14px;
    font-weight: 700;
    border-radius: .5rem;
    border: none;
    transition: background-color .3s ease;
    cursor: pointer;
`

export const TextButtonAd = styled.p`
    margin-top: 2px;
    margin-left: 10px;
`

export const DivButtonTitle = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TableDataGrid = styled.div`
    margin-left: 5%;
    height: 500px;
    width: 90%;
`
