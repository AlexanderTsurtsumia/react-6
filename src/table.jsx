import React from 'react';

const MyTable = ({ elements }) => {
  return (
    <table  className='table table-striped table-dark'>
       <thead>
        <tr>
          <th>Index</th>
          <th>Element</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{element}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;