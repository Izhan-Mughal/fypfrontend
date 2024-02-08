import React from 'react';
import Select from 'react-select';

const CountrySelect = ({ userCountryCode, countries, userSelectValue, onSelectChange }) => {
  // Transform data into options expected by react-select
  const options = countries.map(country => ({
    value: country.value,
    label: `${country.label} ${country.value === userCountryCode ? '(Your Country)' : ''}`,
  }));

  return (
    <Select
      options={options}
      value={userSelectValue}
      onChange={onSelectChange}
      isSearchable={true}
      placeholder="Select a country"
    />
  );
};

export default CountrySelect;
