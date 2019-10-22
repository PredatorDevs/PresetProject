import React from 'react';
import styled from 'styled-components';

import companysInfo from './data/companys';

export default function TransportPage() {
    return (
        <CardContainer>
            {
                companysInfo.map((elm) => {
                    console.log(elm);
                    return (
                        <div key={elm.id} className='card-main'>
                            <img className='card-image' src={elm.portada}/>
                            <p className='card-title'>
                                {elm.nombre}
                            </p>
                            <p className='card-descrip'>
                                {elm.descrip}
                            </p>
                        </div>
                    )
                })
            }
        </CardContainer>

    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
    .card-main {
        background-color: white;
        width: 400px;
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 20px;
        overflow: hidden;
        transition: 0.2s;
        :hover {
            background-color: #B2E6E5;
            width: 420px;
            .card-image {
                width: 420px;
            }
        }
    }

    .card-image {
        width: 400px;
        height: 200px;
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

    @media screen and (max-width: 768px) {
        flex-direction: column;
        .card-main {
            width: 300px;
            :hover {
            background-color: #B2E6E5;
            width: 320px;
            .card-image {
                width: 320px;
            }
            }
        }
        .card-image {
            width: 300px;
            height: 100px;
        }
    }
`