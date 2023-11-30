/* 

{
    "id": 2,
    "dispositivo": "pruebas",
    "hora": "2023-11-27T12:32:49.098Z",
    "temperatura": 25,
    "altura": 1200,
    "presion": 213,
    "luxes": 1256,
    "wifiRsii": 45,
    "updatedAt": "2023-11-27T12:32:49.100Z",
    "createdAt": "2023-11-27T12:32:49.100Z"
}


*/


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
    fetch('http://localhost:5000/api/miniestacion')
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
      <Paper className='container'>
        <div className="main-container">
          <Navbar />
          <div className="main-content">

            <TableContainer>
              <Table className='table'>
                <TableHead>
                  <TableRow style={{ maxWidth: '30px' }}>
                    <TableCell style={{ color: 'white', textAlign: 'center' }}>
                      <Typography variant="h8">
                        ID
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', textAlign: 'center' }}>
                      <Typography variant="h8">
                        Dispositivo
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', textAlign: 'center' }}>
                      <Typography variant="h8">
                        Hora
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', textAlign: 'center' }}>
                      <Typography variant="h8">
                        Temperatura
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', textAlign: 'center' }}>
                      <Typography variant="h8">
                        Humedad
                      </Typography>
                    </TableCell>
                    <TableCell style={{ color: 'white', textAlign: 'center' }}>
                      <Typography variant="h8">
                        Wifi Rssi
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell style={{ color: 'white', textAlign: 'center' }}>
                        <Typography variant="h8">
                          {row.id}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ color: 'white', textAlign: 'center' }}>
                        <Typography variant="h8">
                          {row.dispositivo}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ color: 'white', textAlign: 'center' }}>
                        <Typography variant="h8">
                          {new Date(row.hora).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 })}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ color: 'white', textAlign: 'center' }}>
                        <Typography variant="h8">
                          {row.temperatura}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ color: 'white', textAlign: 'center' }}>
                        <Typography variant="h8">
                          {row.humedad}
                        </Typography>
                      </TableCell>
                      <TableCell style={{ color: 'white', textAlign: 'center' }}>
                        <Typography variant="h8">
                          {
                            row.wifiRsii > -70 ?
                              <span style={{ color: 'white' }}>
                                ✅ {row.wifiRsii}
                              </span>
                              :
                              <span style={{ color: 'white' }}>
                                ❌ {row.wifiRsii}
                              </span>
                          }
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default Medidas;