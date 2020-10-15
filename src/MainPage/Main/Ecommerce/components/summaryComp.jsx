import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
function createData(name, adspaceName, adType , price, qty) {
  return {
    name,
    adspaceName,
    adType,
    price,
    qty,
    history: [
      { date: 'Purchase Date: 2020-01-05', customerId: 'ID: 11091700', amount: `Amount: 3` },
     
    ],
  };
}
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  })); 

 function UploadButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
         
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    );
  }
  
function Row(props) {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectedDate1, setSelectedDate1] = React.useState(null);
    

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" style={{background:'white'}} scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.adspaceName}</TableCell>
        <TableCell align="right">{row.adType}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.qty}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1} padding={3}>
              <Typography align="center" variant="h6" gutterBottom component="div" style={{backgroundColor:"grey", padding:"20", borderRadius:"10px"}}>
                 History/Details
              </Typography>
              <Table size="small" aria-label="purchases">
                
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" style={{background:"white"}}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                      <Button variant="contained" color="primary">
                        Click Here to see details
                       </Button>
                      </TableCell>
                      <TableCell>
                      <Grid container justify="space-around">
                      <div  style={{padding:"3px", background:"black" ,borderRadius: "7px"}}>
                <DatePicker  showYearDropdown scrollableMonthYearDropdown isClearable  placeholderText="Start Date" selected={selectedDate} onChange={date=>setSelectedDate(date) } />
                <span>  </span>
                <DatePicker  showYearDropdown scrollableMonthYearDropdown isClearable  placeholderText="End Date" selected={selectedDate1} onChange={date=>setSelectedDate1(date) } />

                 </div>
        </Grid>
                       
                          <UploadButtons/>
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Img Preview', "Name", "LED BILLBOARD", "$2500", "3"),
  createData('Img Preview', "Name", "LCD BILLBOARD", "$2500", "2"),
  createData('Img Preview', "Name", "SOLAR BILLBOARD", "$3000", "1"),
  createData('Img Preview', "Name", "PORTABLE BILLBOARD", "$3500", "2"),
  createData('Img Preview', "Name", "BILLBOARD", "$2500", "5"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell style={{background:"white"}}/>
            <TableCell style={{background:"white"}}></TableCell>
            <TableCell style={{background:"white"}} align="right">Adspace Name</TableCell>
            <TableCell style={{background:"white"}} align="right">Adtype</TableCell>
            <TableCell  style={{background:"white"}} align="right">Price</TableCell>
            <TableCell style={{background:"white"}} align="right">Qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} style={{background:"white"}}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

//---------------------------------------------------
{/* <Box margin={1} padding={50}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row" style={{background:"white"}}>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                      <Button variant="contained" color="primary">
                        Click Here to see details
                       </Button>
                      </TableCell>
                      <TableCell>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          
        />
        </Grid>
        </MuiPickersUtilsProvider>
                          <UploadButtons/>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box> */}