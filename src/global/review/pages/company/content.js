import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const generalInformation = (data) => {
//   if (!data) return null;
//   const row = {
//     data: data.name,
//   }
//   const {
//     data,
//   } = row;
  return (
    <Wrapper>
      <Grid
        container
        spacing={5}
        direction="row"
      >
        <Grid item xs={12} sm={12} md={6}>
          <div className="simple-content-wrapper">
            <p className="simple-content-wrapper__label">Fecha inicial</p>
            <p className="simple-content-wrapper__content">
              {data}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="simple-content-wrapper">
            <p className="simple-content-wrapper__label">Fecha final</p>
            <p className="simple-content-wrapper__content">
              {'formatDateToDisplay(new Date(finalDate))'}
            </p>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

const getContent = (
  currentTab,
  data
) => {
  switch (currentTab) {
    case 0: return generalInformation(data);
    default: return null;
  }
}

export const Content = ({
  currentTab,
  data,
}) => getContent(
  currentTab,
  data,
);

const Wrapper = styled.div`
  background-color: skyblue;
  .simple-content-wrapper {
    p {
      margin: 0;
      padding: 0;
    }
    &__label {
      font-size: 12px;
      color: rgba(0,0,0,0.7);
      padding-bottom: 20px;
    }
    &__content {
      font-size: 15px;
    }
  }
`;
