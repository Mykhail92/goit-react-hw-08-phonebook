import React from 'react';
import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/filter/filtersSlice';
import { selectFilter } from 'redux/contacts/selectors';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name:
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
