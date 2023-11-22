import React, { useEffect, useState } from 'react';
import "../App.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from "@mui/material";

import Navbar from './navbar';

const Medidas = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/api/medidas')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(error => console.error(error), setIsLoading(true))
      .finally(() => setIsLoading(false));
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);

  if (isLoading) {
    return (
      <div className="main-container">
        <Navbar />
        <div className="main-content">
          <Typography variant="h4">
            Fetch data....
          </Typography>
          <LinearProgress />
        </div>
      </div>
    );
  }
  return (
    <div className='body'>
      <Navbar />
      <div className="main-content">
        <TableContainer component={Paper}>
          <Table aria-lable="simple-table" className='table'>
            <TableHead>
              <TableRow style={{maxWhidth: '30px'}}>
                <TableCell style={{ color: 'black', textAlign: 'center' }}>Dispositivo</TableCell>
                <TableCell style={{ color: 'black', textAlign: 'center' }}>Temperatura</TableCell>
                <TableCell style={{ color: 'black', textAlign: 'center' }}>Hora</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{}}
                >
                  <TableCell style={{ color: 'black', textAlign: 'center' }}>{row.dispositivo}</TableCell>
                  <TableCell style={{ color: 'black', textAlign: 'center' }}>{row.temperatura}</TableCell>
                  <TableCell style={{ color: 'black', textAlign: 'center' }}>{row.timeString}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Medidas;