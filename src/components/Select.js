import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const {
      label,
      name,
      onChange,
      value,
      options,
      dataTestId,
    } = this.props;
    return (
      <label htmlFor={ name }>
        { label }
        <div>
          <select
            name={ name }
            id={ name }
            required
            onChange={ onChange }
            value={ value }
            data-testid={ dataTestId }
          >
            {
              options.map((option, index) => (
                <option key={ index }>{ option }</option>
              ))
            }
          </select>
        </div>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Select;
