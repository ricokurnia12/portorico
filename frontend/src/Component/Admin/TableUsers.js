import React from 'react';
import MUIDataTable from 'mui-datatables';

const TableUsers = () => {
  const columns = ['No', 'Id', 'Name', 'Email', 'Register Date'];
  const options = {
    filterType: 'checkbox',
  };
  return (
    <div>
      <MUIDataTable
        title={'Employee List'}
        // data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default TableUsers;
