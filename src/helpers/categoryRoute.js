import React from 'react'
import { Route } from 'react-router-dom'
import { PropTypes } from 'prop-types';

const CategoryRoute = ({
  component: Component, companiesData, pageInformation, ...rest
}) => (
  <Route
    rest={rest}
    render={(props) => (
      <Component props={props} companiesData={companiesData} pageInformation={pageInformation} />
    )}
  />
)

CategoryRoute.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  companiesData: PropTypes.instanceOf(Array).isRequired,
  pageInformation: PropTypes.instanceOf(Object).isRequired,
}

export default CategoryRoute;
