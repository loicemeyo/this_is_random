import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import "./numbers-table.css"

const NumbersTable = (props) => {
  const { phoneNumbers, sortNumbers, sortOrder, sortArrowActive } = props

  return (
    <Paper className=''>
      <Table className='teboo'>
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">
              <Tooltip
                title='sort numbers'
              >
              <TableSortLabel
               active={sortArrowActive}
               direction={sortOrder}
               onClick={sortNumbers}
             >
             </TableSortLabel>
            </Tooltip>
              Phone Number
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {phoneNumbers.map((phoneNumber, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right">{`07${phoneNumber}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default NumbersTable;