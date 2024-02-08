import React from 'react';
import Select from 'react-select';
import tw from 'twin.macro';

const CountrySelect = ({  countries, userSelectValue,myid }) => {
  // Transform data into options expected by react-select
//   const options = countries.map(country => ({
//     value: country.value,
//     label: `${country.label} ${country.value === userCountryCode ? '(Your Country)' : ''}`,
//   }));
const SelectInput = tw.select`w-full pl-8   py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-2 first:mt-0`;
  return (
    <SelectInput
    id={myid}
    value={userSelectValue}
    onChange={(e) => {
      // Handle the selected option
      const selectedValue = e.target.value;
      console.log(selectedValue);
    }}
  >
    {countries.map((country) => (
      <option key={country.value} value={country.value}>
        {`${country.label} ${country.value}`}
      </option>
    ))}
  </SelectInput>
  );
};

export default CountrySelect;
