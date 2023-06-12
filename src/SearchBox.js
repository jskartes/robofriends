import React from 'react';

const SearchBox = ({ onChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search RoboFriends'
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBox;
