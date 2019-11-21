import React from 'react';
import styled from 'styled-components';

import companysInfo from './data/companys';
import { showNotification } from '../../customNotifications';

export default function WinePage() {
    return (
        <Wrapper>
                <CardsContainer>
                    <CardContainer>
                        {
                            companysInfo.slice((0), (0 + (3 * 1))).map((elm) => {
                                return (
                                    <div key={elm.id} className='card-main'>
                                        <img className='card-image' src={elm.portada} alt="portada"/>
                                        <p className='card-title'>
                                            {elm.nombre}
                                        </p>
                                        <p className='card-descrip'>
                                            {elm.descrip}
                                        </p>
                                        <div className='card-buttons-cont'>
                                            <button className='button-more-info' onClick={() => {  showNotification("info", "Solicitando información", `Llamando a: ${elm.nombre}`); }}>Más información</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CardContainer>
                    <CardContainer>
                        {
                            companysInfo.slice((0 + (3 * 1)), (0 + (3 * 2))).map((elm) => {
                                return (
                                    <div key={elm.id} className='card-main'>
                                        <img className='card-image' src={elm.portada} alt="portada"/>
                                        <p className='card-title'>
                                            {elm.nombre}
                                        </p>
                                        <p className='card-descrip'>
                                            {elm.descrip}
                                        </p>
                                        <div className='card-buttons-cont'>
                                            <button className='button-more-info' onClick={() => {  showNotification("info", "Solicitando información", `Llamando a: ${elm.nombre}`); }}>Más información</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CardContainer>
                    <CardContainer>
                        {
                            companysInfo.slice((0 + (3 * 2)), (0 + (3 * 3))).map((elm) => {
                                return (
                                    <div key={elm.id} className='card-main'>
                                        <img className='card-image' src={elm.portada} alt="portada"/>
                                        <p className='card-title'>
                                            {elm.nombre}
                                        </p>
                                        <p className='card-descrip'>
                                            {elm.descrip}
                                        </p>
                                        <div className='card-buttons-cont'>
                                            <button className='button-more-info' onClick={() => {  showNotification("info", "Solicitando información", `Llamando a: ${elm.nombre}`); }}>Más información</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CardContainer>
                </CardsContainer>
            </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 75px);
    width: 100%;
`

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    .card-main {
        background-color: white;
        width: 300px;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 20px;
        overflow: hidden;
        transition: 0.2s;
    }

    .card-image {
        width: 300px;
        height: 125px;
        transition: 0.2s;
    }

    .card-title {
        color: black;
        font-size: 18px;
        font-weight: bolder;
        margin: 5px;
    }

    .card-descrip {
        color: black;
        font-size: 15px;
        margin: 10px;
        text-align: justify
    }

    .card-buttons-cont {
        display: flex;
        padding: 5px;
        padding-right: 15px;
    }

    .button-more-info {
        margin-left: auto;
        border: none;
        border-radius: 10px;
        padding: 10px;
        color: #FFF;
        background-color: #20262C;
        transition: 0.4s;
        outline: none;
        :hover{
            color: #E54A4E;
            cursor: pointer;
            border: solid 1px #E54A4E;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        .card-main {
            width: 225px;
        }
        .card-image {
            width: 225px;
            height: 100px;
        }
        .card-title {
            color: black;
            font-size: 15px;
            font-weight: bolder;
            margin: 5px;
        }
        .card-descrip {
            color: black;
            font-size: 12px;
            margin: 5px;
            text-align: justify
        }
    }
`
