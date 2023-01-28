import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search({ members, setFilteredMembers }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const results = members.filter((member) => member.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredMembers(results);
  };
  return (
    <>
      <input placeholder="Search" value={query} onChange={handleChange} />
    </>
  );
}

Search.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
  setFilteredMembers: PropTypes.func.isRequired,
};
