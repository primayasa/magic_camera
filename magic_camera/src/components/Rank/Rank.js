import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div className="ma4 mt0 center">
      <div className='black f3'>
        <span className="b f2">{`${name}, your current entry count...`}</span>
      </div>
      <div className='black f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;