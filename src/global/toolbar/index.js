import React from 'react';
import styled from 'styled-components';

class ToolBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <ToolbarMain>

            </ToolbarMain>
        );
    }
}

const ToolbarMain = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100%;
    min-width: 300px;
    background-color: #20262C;

    @media screen and (max-width: 768px) {
        min-width: 100px;
    }
`

export default ToolBar;