
import React, { Component } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import './branding.css'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 50,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function branding() {
  const classes = useStyles();

  return (
   <div className="container"  style={{width:"800px",marginTop:"15%" }}>
        <TableContainer className="center" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>BRAND NAME</TableCell>
            <TableCell align="left">NO BRANDING (DEFAULT)</TableCell>
            <TableCell align="right">
                <input type="radio" name="brand" value=""/>
              
            </TableCell>
            
          </TableRow>
          <hr className="solid" />
        </TableHead>
        <TableBody>
           
            <TableRow >
              <TableCell component="th" scope="row">
               BRAND NAME
              </TableCell>
              <TableCell align="left">CAMPAIN 2</TableCell>
           
            {/*  */}
            </TableRow>
            <TableRow>
            <TableCell component="th" scope="row">
               AGE
              </TableCell>
              <TableCell align="left"><span className="s1">17-18</span>  <span className="s1">31-45</span></TableCell>
               
              <TableCell align="right"> <input type="radio"/> </TableCell>
              <TableCell align="right"> <CancelIcon style={{fill: "red"}}/> </TableCell>
            </TableRow>
            <TableRow>
            <TableCell component="th" scope="row">
               GENDER
              </TableCell>
              <TableCell align="left"><span className="allSpan">ALL</span></TableCell>
          
            </TableRow>
            <TableRow>
            <TableCell component="th" scope="row">
               INTERESTS
              </TableCell>
              <TableCell align="left"><span className="sFashion">FASHION</span>  <span className="sFashion">ENTERTAINMENT</span></TableCell>
               

            </TableRow>
            <hr className="solid" />
             
          
        </TableBody>
      </Table>
    </TableContainer>
    <br/><br/><br/>
    <input style={{margin:"20px"}}  type="text" value="" placeholder="Brand Name..." /> 
    <select id="age" name="Age(Choose Age)">
    <option value="11">11</option>
    <option value="22">22</option>
    <option value="23" selected>23</option>
    <option value="38">38</option>
  </select>
  <input type="submit"></input>
   </div>
  );
}

export default branding;