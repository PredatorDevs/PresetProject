import React, { Component } from 'react';
import styled from 'styled-components';

import focus from './light.png';
import publicaccess from './publicaccess.png';
import responsive from './responsive.png';
import trueNew from './true.png';
import offers from './offers.png';
import generalAspects from './generalaspects';
import CardInfo from '../../global/cardinfo/index';

class LandPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <Wrapper>
                <div className="presentation-cont">
                    <div className="pre-cont-1">
                        <img src={focus} alt="focus"/>     
                    </div>
                    <div className="pre-cont-2">
                        <p className="title">PRE-SE-T</p>
                        <p className="descrip">Se presenta con la idea de ofrecer una Plataforma de múltiples servicios, como
                            Contratación de servicios publicitarios, adquisición de productos vía previo acuerdo y otros más en desarrollo.
                        </p>
                        <div className="button-group-land">
                            <button>Presentaciones</button>
                            <button>Servicios</button>
                            <button>Trabajos</button>
                        </div>
                    </div>
                </div>
                <br />
                <div className="information-cont">
                    <div className="widget-1">
                        <CardInfo image={publicaccess} title={generalAspects[0].title} descrip={generalAspects[0].descrip} />
                    </div>
                    <div className="widget-2">
                        <CardInfo image={responsive} title={generalAspects[1].title} descrip={generalAspects[1].descrip} />
                    </div>
                    <div className="widget-3">
                        <CardInfo image={trueNew} title={generalAspects[2].title} descrip={generalAspects[2].descrip} />
                    </div>
                    <div className="widget-4">
                        <CardInfo image={offers} title={generalAspects[3].title} descrip={generalAspects[3].descrip} />
                    </div>
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    max-width: 1200px;
    min-height: calc(100vh - 75px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .presentation-cont {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        .pre-cont-1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-width: 350px;
            width: 50%;
            img {
                width: 350px;
                height: 350px;
            }
        }
        .pre-cont-2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            .title {
                margin: 0px;
                font-size: 60px;
            }
            .descrip {
                margin: 10px;
                font-size: 25px;
                text-align: justify;
                padding: 10px;
            }
            .button-group-land {
                button {
                    border: none;
                    outline: none;
                    margin: 15px 25px;
                    width: 120px;
                    padding: 10px;
                    height: 50px;
                    border-radius: 10px;
                    background-color: #313A43;
                    color: white;
                    font-weight: bolder;
                    transition: 0.4s;
                    :hover {
                        color: #313A43;
                        background-color: #F3AEB0;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .information-cont {
        display: grid;
        margin-top: 20px;
        width: 100%;
        grid-gap: 20px;
        grid-template: "widget-1 widget-2 widget-3 widget-4";
        .widget-1, .widget-2, .widget-3, .widget-4 {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }

        .widget-1 {
            grid-area: widget-1;
        }

        .widget-2 {
            grid-area: widget-2;
        }

        .widget-3 {
            grid-area: widget-3;
        }

        .widget-4 {
            grid-area: widget-4;
        }
    }

    @media screen and (max-width: 1024px) {
        max-width: 1024px;
        .presentation-cont {  
            .pre-cont-1 {
                img {
                    width: 350px;
                    height: 350px;
                }
            }
            .pre-cont-2 {
                
                .title {
                    
                }
                .descrip {
                    
                }
                .button-group-land {
                    display: flex;
                    flex-direction: column;
                    button {
                        
                        :hover {
                            
                        }
                    }
                }
            }
        }
        .information-cont {
            grid-template: "widget-1 widget-2"
                           "widget-3 widget-4";
            .widget-1, .widget-2, .widget-3, .widget-4 {
                
            }
            .widget-1 {
                
            }
            .widget-2 {
                
            }
            .widget-3 {
                
            }
            .widget-4 {
                
            }
        }
    }

    @media screen and (max-width: 768px) {
        max-width: 768px;
        .presentation-cont {  
            .pre-cont-1 {
                img {
                    width: 350px;
                    height: 350px;
                }
            }
            .pre-cont-2 {
                .title {  
                }
                .descrip {   
                }
                .button-group-land {
                    display: flex;
                    flex-direction: column;
                    button {
                        :hover {
                        }
                    }
                }
            }
        }
        .information-cont {
            grid-template: "widget-1"
                           "widget-2"
                           "widget-3"
                           "widget-4";
            .widget-1, .widget-2, .widget-3, .widget-4 {
                
            }
            .widget-1 {
                
            }
            .widget-2 {
                
            }
            .widget-3 {
                
            }
            .widget-4 {
                
            }
        }
    }

    @media screen and (max-width: 411px) {
        max-width: 411px;
        .presentation-cont { 
            flex-direction: column;
            .pre-cont-1 {
                width: 100%;
                img {
                    width: 350px;
                    height: 350px;
                }
            }
            .pre-cont-2 {
                width: 100%;
                .title {
                    
                }
                .descrip {
                    
                }
                .button-group-land {
                    display: flex;
                    flex-direction: column;
                    button {
                        
                        :hover {
                            
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 375px) {
        max-width: 375px;
        .content-descrip {
            .descrip {
                
            }
        }
    }

    @media screen and (max-width: 360px) {
        max-width: 360px;
        .content-descrip {
            .descrip {
                
            }
        }
    }

    @media screen and (max-width: 320px) {
        max-width: 320px;
        .content-descrip {
            .descrip {
                
            }
        }
    }
`

export default LandPage;