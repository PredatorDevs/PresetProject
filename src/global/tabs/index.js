import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

export const Tab = ({
  label, className, onClick, value,
}) => (
  <button
    value={value}
    onClick={() => onClick(value)}
    type="button"
    className={`content__tab ${className}`}
  >
    {label}
  </button>
);

const getChildrens = (childrens, onChange, currentValue) => {
  if (!childrens) {
    return null;
  }
  if (childrens && !childrens.length) {
    if (childrens.type === Tab) {
      const newProps = {
        ...childrens.props,
        onClick: onChange,
        value: 0,
        className: 'active',
      }
      return <Tab key={uniqueId()} {...newProps} />
    }
    return childrens;
  }
  return childrens
    .map((children, index) => {
      if (children.type === Tab) {
        const newProps = {
          ...children.props,
          onClick: onChange,
          value: index,
          className: index === currentValue ? 'active' : '',
        }
        return <Tab key={uniqueId()} {...newProps} />
      }
      return children;
    });
}

export const Tabs = (props) => {
  const { children, onChange, currentValue } = props;
  const tabs = getChildrens(children, onChange, currentValue);
  return (
    <Wrraper>
      <div className="content">
        {tabs}
      </div>
    </Wrraper>
  )
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  currentValue: PropTypes.number,
};

Tabs.defaultProps = {
  onChange: () => {},
  currentValue: 0,
};

Tab.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.number,
};

Tab.defaultProps = {
  label: '',
  className: '',
  onClick: () => {},
  value: 0,
};

const Wrraper = styled.div`
  height: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  background-color: #B5E4F2;
  .content {
    margin-left: 20px;
    &__tab {
      min-width: 150px;
      height: 40px;
      border: none;
      background-color: #ddf4fb;
      border-radius: 3px;
      cursor: pointer;
      margin-right: 10px;
      font-family: 'Roboto';
      font-weight: 500;
      &.active {
        background-color: #FFF;
      }
    }
  }
`;
